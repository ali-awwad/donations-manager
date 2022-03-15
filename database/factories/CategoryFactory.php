<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'color' => $this->faker->colorName,
            'description' => $this->faker->sentence,
            'slug'=>$this->faker->slug
        ];
    }
}
