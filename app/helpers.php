<?php

use Illuminate\Support\Facades\App;

if(!function_exists('friendly_money')) {
    function friendly_money(int $intMoneyInFils)
    {
        return number_format((float)($intMoneyInFils / 100), 2, '.', '');
    }
}
if(!function_exists('completion_ratio')) {
    function completion_ratio(int $collected, int $target)
    {
        return round(number_format(($collected / $target), 4, '.', '') * 100);
    }
}
if(!function_exists('error_message')) {
    function error_message(string $message)
    {
        if(App::isProduction()) {
            return 'Something Went Wrong, please try again later';
        }
        else return $message;
    }
}

if (!function_exists('getRouteMethod')) {
    function getRouteMethod($namedRoute)
    {
        $routeCollection = Route::getRoutes();
        if($routeCollection->hasNamedRoute($namedRoute))
        {
            $route = $routeCollection->getByName($namedRoute);
            return $route->methods[0];
        }
    }
}
