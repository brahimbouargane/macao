<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reference>
 */
class ReferenceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ref' => $this->faker->regexify('[0-9]{4}[A-Z]{1}[0-9]{3}'),
            'weight' => $this->faker->randomFloat(2, 0.5, 1.5),
            'packaging' => $this->faker->randomElement([
                '6 x Bocal plastique de 200 pièces / Carton',
                '12 x Sachet de 50 pièces / Carton',
                '24 x Boîte métallique de 10 pièces / Carton',
            ]),
            'tc_20' => $this->faker->numberBetween(1000, 5000) . ' Carton',
            'tc_40' => $this->faker->numberBetween(5000, 10000) . ' Carton',
            'product_id' => 11,
        ];
    }
}
