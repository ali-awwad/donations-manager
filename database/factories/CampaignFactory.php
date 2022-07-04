<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CampaignFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->realText(20),
            'description' => $this->faker->paragraph,
            'slug'=>$this->faker->slug,
            'target'=>$this->faker->randomDigitNotZero()*100000,
            'category_id'=>Category::inRandomOrder()->first()->id,
            'created_at'=>$date = $this->faker->dateTimeBetween('-3 years','now'),
            'updated_at'=>$date,
            'tenant'=>'12232-2111-555',
        ];
    }
}
