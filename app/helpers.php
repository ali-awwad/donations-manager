<?php

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
