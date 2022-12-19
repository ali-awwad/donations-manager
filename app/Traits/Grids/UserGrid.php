<?php

namespace App\Traits\Grids;

trait UserGrid
{
    private $baseRoute = 'users';
    public function gridSettings($orderBy = 'updated_at', $direction = 'desc')
    {
        $setting = [
            'initSearch' => request('search') ?? '',
            'order_by' => request('order_by') ?? $orderBy,
            'order_direction' => request('order_direction') ?? $direction,
            'filters' => request()->only(['search', 'per_page']),
        ];

        return array_merge($setting, ['columns' => $this->columns()], ['actions' => $this->actions()]);
    }

    public function columns()
    {
        return [
            ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
            ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
            // ['label' => 'Group Key', 'field' => 'tenant', 'data_type' => 'text'],
            ['label' => 'Email', 'field' => 'email', 'data_type' => 'text'],
            ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
        ];
    }

    public function actions()
    {
        $actions = [
            [
                'name' => 'destroy',
                'text' => __('Delete'),
                'route' => $this->baseRoute . '.destroy',
                'method' => getRouteMethod($this->baseRoute . '.destroy'),
                'require_selection' => true
            ],
            [
                'name' => 'fixTenant',
                'text' => __('Fix Tenants without UUID'),
                'route' => 'fixTenant',
                'method' => getRouteMethod('fixTenant'),
                'require_selection' => false
            ],

        ];

        return $actions;
    }
}
