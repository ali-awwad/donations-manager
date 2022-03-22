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
        \App\Models\User::factory(3)->create();
        \App\Models\User::factory(1)->create(
            [
                'name'=>'Ali Awwad',
                'email'=>'a.awwad@test.com'
            ]
        );
        \App\Models\Category::factory(3)->create();
        \App\Models\Campaign::factory(7)->create();
        \App\Models\Donor::factory(15)->create();
        \App\Models\Donation::factory(40)->create();


    }
}
