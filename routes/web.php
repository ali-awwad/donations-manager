<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

require __DIR__ . '/auth.php';

Route::middleware('auth')->prefix('app')->group(function () {
    Route::get('/', function () {
        return redirect()->route('dashboard');
    })->name('home');
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
    Route::resource('users', UserController::class);
    Route::resource('campaigns', CampaignController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('donations', DonationController::class);
    Route::resource('donors', DonorController::class);
    Route::post('fix', [HomeController::class,'fixCampaignCategoryCount'])->name('fixCampaignCategoryCount');
    Route::post('fix-empty-tenant', [HomeController::class,'fixTenant'])->name('fixTenant');
});

Route::get('/', [HomeController::class, 'homePage'])->name('homePage');

