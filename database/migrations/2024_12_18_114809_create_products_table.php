<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('ref');
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->string('type')->nullable();
            $table->float('weight')->nullable();
            $table->float('price')->nullable();
            $table->string('packaging')->nullable();
            $table->string('tc_20')->nullable();
            $table->string('tc_40')->nullable();
            $table->foreignId('brand_id')->nullable()->constrained('brands')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
