# Donations Manager

## Overview

This a donation manager still in dev phase , 

## Features

- Dashboard and charts for donations and campaigns

- Managing the donors, campaigns, categories, and donations

- Multi Tenancy, at the registration you can choose if you are joining other tenant (Group Key) or create new one.

## Dependencies

- PHP 7.3 and up

- This app is based on Laravel 8 + Inertia JS + React JS + Tailwindcss 

- You need to run Composer , then NPM install 

## Insallation

 - clone the project
 
 - cd into the application
 
 - run `composer install`
 
 - `cp .env.example .env` and configure your .env with the right database name / user / password
 
 - Database must be MySQL
 
 - run `php artisan key:generate`
 
 - run `php artisan migrate:fresh --seed` , seed will give you some dummy data
 
 - the end point for login is `/login`
 
 - you can login with `admin@example.com` as email and `password` as passowrd

 ## Notes

 First user created will be the super admin, however, to change it to other user you must do it manually from the database.
 
