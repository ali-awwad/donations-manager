<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DonorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'alias' => $this->faker->colorName,
            'remarks' => $this->faker->paragraph(10),
            'user_id'=>User::inRandomOrder()->first()->id,
            'created_at'=>$date = $this->faker->dateTimeBetween('-3 years','now'),
            'updated_at'=>$date,
            'tenant'=>'12232-2111-555',
        ];
    }
}
