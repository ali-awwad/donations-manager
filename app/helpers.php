<?php

if(!function_exists('friendly_money')) {
    function friendly_money(int $intMoneyInFils)
    {
        return number_format((float)($intMoneyInFils / 100), 2, '.', '');
    }
}
