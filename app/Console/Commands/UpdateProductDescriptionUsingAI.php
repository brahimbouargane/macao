<?php

namespace App\Console\Commands;

use App\Models\Product;
use App\Services\HuggingFaceTextGenerationService;
use Illuminate\Console\Command;

class UpdateProductDescriptionUsingAI extends Command
{
    protected $signature = 'products:update-descriptions';

    protected $description = 'Fetch and update product descriptions using Hugging Face API for eligible products';

    protected $textGenerationService;

    public function __construct(HuggingFaceTextGenerationService $textGenerationService)
    {
        parent::__construct();
        $this->textGenerationService = $textGenerationService;
    }

    public function handle()
    {
        $this->info('Fetching products for description updates...');

        $totalProducts = 0;
        $affectedProducts = 0;
        $updatedProducts = 0;
        $nonUpdatedProducts = 0;
        $notAffectedWithDescription = 0;

        $products = Product::with(['brand', 'categories'])
            ->whereNotNull('name')
            ->whereHas('brand', fn($query) => $query->whereNotNull('name'))
            ->whereHas('categories', fn($query) => $query->whereNotNull('name'))
            ->where(function ($query) {
                $query->whereNull('description')
                    ->orWhere('description', '')
                    ->orWhereRaw('LENGTH(description) < 150');
            })
            ->get();
            
            $totalProducts = $products->count();
            $this->line("Fetched Products count : {$totalProducts}");

        if ($totalProducts === 0) {
            $this->warn('No products found in the database.');
            return 0;
        }

        foreach ($products as $product) {
            $hasName = !empty($product->name);
            $hasBrandName = !empty($product->brand?->name);
            $hasFirstCategoryName = !empty($product->categories->first()?->name);
            $hasNoDescription = empty($product->description);
            $hasShortDescription = !$hasNoDescription && strlen($product->description) < 150;

            $meetsBasicConditions = $hasName && $hasBrandName && $hasFirstCategoryName;

            if ($meetsBasicConditions) {
                $affectedProducts++;

                // Skip if product has a description and it's 150 characters or more
                if (!$hasNoDescription && !$hasShortDescription) {
                    $notAffectedWithDescription++;
                    continue;
                }

                sleep(3); // Add here

                // Generate description using Hugging Face service
                $language = 'French';
                $result = $this->textGenerationService->generateText(
                    productName: $product->name,
                    category: $product->categories->first()->name,
                    brand: $product->brand->name,
                    language: $language
                );

                if ($result['ok'] && !empty($result['text'])) {
                    $product->description = $result['text'];
                    $product->save();
                    $updatedProducts++;
                    $this->line("Updated description for product ID {$product->id}: {$product->name}");
                } else {
                    $nonUpdatedProducts++;
                    $this->warn("Failed to update description for product ID {$product->id}: {$result['text']}");
                }
            }
        }

        $this->newLine();
        $this->info('Processing Summary:');
        $this->table(
            ['Metric', 'Count', 'Explanation'],
            [
                [
                    'Total products in the database',
                    $totalProducts,
                    'Total number of products found in the database, regardless of eligibility.',
                ],
                [
                    'Total affected products',
                    $affectedProducts,
                    'Products that have a name, brand name, and at least one category name, making them eligible for description updates.',
                ],
                [
                    'Updated products',
                    $updatedProducts,
                    'Eligible products that had no description or a description shorter than 150 characters and were successfully updated with a new description.',
                ],
                [
                    'Non-updated products',
                    $nonUpdatedProducts,
                    'Eligible products that had no description or a description shorter than 150 characters but failed to update (e.g., due to API errors).',
                ],
                [
                    'Not affected products',
                    $notAffectedWithDescription,
                    'Products that have a name, brand name, and category name but had a description of 150 characters or more, so they were skipped.',
                ],
            ]
        );

        return 0;
    }
}
