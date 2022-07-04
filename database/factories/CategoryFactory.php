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
            'color' => $this->faker->rgbCssColor(),
            'description' => $this->faker->sentence,
            'slug'=>$this->faker->slug,
            'created_at'=>$date = $this->faker->dateTimeBetween('-3 years','now'),
            'updated_at'=>$date,
            'tenant'=>'12232-2111-555',
        ];
    }
}
