<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class HuggingFaceTextGenerationService
{
    protected string $apiUrl;
    protected string $apiToken;

    public function __construct()
    {
        $this->apiUrl = config('services.huggingface.api_url');
        $this->apiToken = config('services.huggingface.api_token');
    }

    /**
     * Generate a product description using Hugging Face API.
     *
     * @param string $productName
     * @param string $category
     * @param string $brand
     * @param string $language
     * @return array
     */
    public function generateText(string $productName, string $category, string $brand, string $language): array
    {
        if (empty($this->apiToken) || empty($this->apiUrl)) {
            return [
                'ok' => false,
                'text' => 'A required configuration is missing. Please check your settings.'
            ];
        }

        try {
            $response = Http::withHeaders([
                'Authorization' => "Bearer {$this->apiToken}",
            ])->post($this->apiUrl, [
                'inputs' => $this->buildPrompt($productName, $category, $brand, $language),
                'parameters' => [
                    'max_new_tokens' => 100,
                    'do_sample' => true,
                    'temperature' => 0.7,
                    'top_p' => 0.9,
                    'top_k' => 50,
                    'repetition_penalty' => 1.2,
                    'return_full_text' => false,
                ],
            ]);

            if ($response->successful()) {
                $generatedText = $response->json()[0]['generated_text'] ?? null;
                if ($generatedText) {
                    return [
                        'ok' => true,
                        'text' => Str::squish($generatedText)
                    ];
                }
            }

            return [
                'ok' => false,
                'text' => $response->json()['error'] ?? 'Failed to generate description'
            ];
        } catch (\Exception $e) {
            return [
                'ok' => false,
                'text' => $e->getMessage() ?: 'Failed to generate description'
            ];
        }
    }

    /**
     * Build the prompt for the Hugging Face API.
     *
     * @param string $productName
     * @param string $category
     * @param string $brand
     * @param string $language
     * @return string
     */
    protected function buildPrompt(string $productName, string $category, string $brand, string $language): string
    {
        return <<<EOT
PASTOR MACAO is a leading Moroccan company that has been producing high-quality confectionery and chocolate products since 1948. Known for its dedication to excellence, Pastor Macao offers a wide range of products such as chocolates, biscuits, wafers, and spreads, crafted with premium ingredients and high manufacturing standards. The brand is recognized for its iconic red and white elephant logo, synonymous with quality and trust among Moroccan consumers.

Now, based on the following product information, please generate a 5-line description in the language specified:

Product Name: {$productName}
Category: {$category}
Brand: {$brand}
Language: {$language}

If the brand is provided, include it in the description. If the brand is not provided, focus more on the category, quality, and the reputation of the company, highlighting its use of premium ingredients and high standards of manufacturing. The description should be suitable for the product's category and written in the specified language, the description should primarily be about the product only also only provide the result text of the product description without any indications such as "description": and with no new line before the result text or after
EOT;
    }
}
