<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Campaign;
use App\Models\Donor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class DonationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'campaign_id'=>Campaign::inRandomOrder()->first()->id,
            'donor_id'=>Donor::inRandomOrder()->first()->id,
            'amount'=>$this->faker->randomDigitNotZero()*10000,
            'description'=>$this->faker->paragraph(4),
            'donation_date'=>$date = $this->faker->dateTimeBetween('-3 years','now'),
            'created_at'=>$date,
            'updated_at'=>$date,
            'uuid'=>Str::uuid()
        ];
    }
}
