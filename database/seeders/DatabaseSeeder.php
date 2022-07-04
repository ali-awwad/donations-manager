<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create(
            [
                'name'=>'Demo Account',
                'email'=>'admin@example.com',
                'user_type'=>'superAdmin',
            ]
        );
        \App\Models\User::factory(3)->create();
        \App\Models\Category::factory(1)->create(['name'=>'Health']);
        \App\Models\Category::factory(1)->create(['name'=>'Education']);
        \App\Models\Category::factory(1)->create(['name'=>'Food']);
        \App\Models\Campaign::factory(7)->create();
        \App\Models\Donor::factory(15)->create();
        \App\Models\Donation::factory(130)->create();


    }
}
