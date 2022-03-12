<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Campaign;
use App\Models\User;
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
            'category_id'=>Category::inRandomOrder()->first()->id,
            'campaign_id'=>Campaign::inRandomOrder()->first()->id,
            'user_id'=>User::inRandomOrder()->first()->id,
            'amount'=>rand(100,70000),
            'uuid'=>Str::uuid()
        ];
    }
}
