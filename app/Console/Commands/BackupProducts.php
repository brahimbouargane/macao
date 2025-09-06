<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class BackupProducts extends Command
{
    protected $signature = 'products:backup';

    protected $description = 'Backup the products table to a SQL file';

    public function handle()
    {
        $this->info('Backing up products table...');

        try {
            // Ensure backup directory exists
            $backupDir = 'backup-temp';
            if (!Storage::disk('local')->exists($backupDir)) {
                Storage::disk('local')->makeDirectory($backupDir);
                $this->info("Created backup directory: storage/app/{$backupDir}");
            }

            // Verify mysqldump is available
            exec('which mysqldump', $output, $returnVar);
            if ($returnVar !== 0 || empty($output)) {
                throw new \Exception('mysqldump is not installed or not found in PATH.');
            }

            $filename = 'backup_products_' . now()->format('Y_m_d_H_i_s') . '.sql';
            $path = storage_path('app/' . $backupDir . '/' . $filename);

            // Get database credentials
            $database = config('database.connections.mysql.database');
            $username = config('database.connections.mysql.username');
            $password = config('database.connections.mysql.password');
            $host = config('database.connections.mysql.host');

            if (empty($database) || empty($username) || empty($host)) {
                throw new \Exception('Database configuration is incomplete. Check DB_DATABASE, DB_USERNAME, and DB_HOST in .env.');
            }

            // Construct mysqldump command
            $command = sprintf(
                'mysqldump -h %s -u %s %s products > %s 2>&1',
                escapeshellarg($host),
                escapeshellarg($username),
                escapeshellarg($database),
                escapeshellarg($path)
            );

            // Handle password securely
            if ($password) {
                putenv('MYSQL_PWD=' . $password);
            }

            // Execute the command
            exec($command, $output, $returnVar);

            // Clear password
            putenv('MYSQL_PWD=');

            if ($returnVar !== 0) {
                throw new \Exception('mysqldump failed: ' . implode(', ', $output));
            }

            // Verify file was created
            if (!file_exists($path)) {
                throw new \Exception('Backup file was not created at: ' . $path);
            }

            $this->info("Products table backed up to: {$filename}");
        } catch (\Exception $e) {
            $this->error('Failed to backup: ' . $e->getMessage());
            return 1;
        }

        return 0;
    }
}