<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CauseController;
use App\Http\Controllers\DonationController;
use App\Models\Category;
use App\Models\Donation;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::middleware('auth')->group(function ()
{
    Route::get('/', function () {
        return redirect()->route('dashboard');
    })->name('home');
    Route::get('/dashboard', function () {
        return Inertia::render('Home', [
            'title' => 'Home and Dashboard Page'
        ]);
    })->name('dashboard');
    Route::get('/users', function () {
        return Inertia::render('Users', [
            'title' => 'Users Page',
            'users'=>User::orderByDesc('created_at')->paginate(10)->through(function ($user)
            {
                $categories = Donation::where('user_id',$user->id)->pluck('category_id')->toArray();
                $causes = Donation::where('user_id',$user->id)->pluck('cause_id')->toArray();

                return [
                    'email'=>$user->email,
                    'name'=>$user->name,
                    'categories_count'=>Category::whereIn('id',$categories)->count(),
                    'causes_count'=>Category::whereIn('id',$causes)->count(),
                    'donations_count'=>$user->donations_count,
                    'role'=>$user->verified_at ? 'Admin' : 'Member',
                ];
            })
        ]);
    })->name('users');

    Route::resource('causes',CauseController::class);
    Route::resource('categories',CategoryController::class);
    Route::resource('donations',DonationController::class);

});
