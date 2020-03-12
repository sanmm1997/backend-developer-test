<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        factory(App\User::class, 15)->create()->each(function($user) use ($faker) {
             DB::table('clients')->insert([
                 'address' => $faker->address,
                 'age' => $faker->numberBetween(0 , 99),
                 'telephone' => $faker->phoneNumber,
                 'user_id' => $user->id,
             ]);
         });
    }
}
