<?php

namespace App\Traits;

trait GenericTableColumns
{
    public function settings($tableName,$orderBy='created_at',$direction='desc')
    {
        $setting = [
            'initSearch' => request('search') ?? '',
            'order_by' => request('order_by') ?? $orderBy,
            'order_direction' => request('order_direction') ?? $direction,
            'filters' => request()->only(['search', 'per_page']),
            'actions' => [
                [
                    'name' => 'destroy',
                    'text' => __('Delete'),
                    'route' => $tableName.'.destroy',
                    'method' => getRouteMethod($tableName.'.destroy'),
                    'require_selection' => true
                ],
            ],
        ];

        return array_merge($setting,['columns'=>$this->columns($tableName)]);
    }

    public function columns($table)
    {
        if($table=='users') {
            return [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => 'Email', 'field' => 'email', 'data_type' => 'text'],
                // ['label' => 'Donors', 'field' => 'donors', 'data_type' => 'text'],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ];
        }
        elseif ($table=='donations') {
            return [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'Amount', 'field' => 'amount', 'data_type' => 'text'],
                ['label' => 'Category', 'field' => 'category', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'categories']],
                ['label' => 'Campaign', 'field' => 'campaign', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'campaigns']],
                ['label' => 'Donor', 'field' => 'donor', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'donors']],
                ['label' => 'Date', 'field' => 'donation_date', 'data_type' => 'datetime'],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ];
        }
        elseif ($table=='donors') {
            return [
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => 'Alias', 'field' => 'alias', 'data_type' => 'text'],
                ['label' => 'Total Donations', 'field' => 'total_donations', 'data_type' => 'text'],
                ['label' => '# Of Donations', 'field' => 'donations_count', 'data_type' => 'text'],
                ['label' => '# of Campaigns', 'field' => 'campaigns_count', 'data_type' => 'text'],
                ['label' => '# of Categories', 'field' => 'categories_count', 'data_type' => 'text'],
            ];
        }
        elseif ($table=='categories') {
            return [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => '# of Campaigns', 'field' => 'campaigns_count', 'data_type' => 'number'],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ];
        }
        elseif ($table=='campaigns') {
            return [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => 'Category', 'field' => 'category', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'categories']],
                ['label' => 'Target', 'field' => 'target', 'data_type' => 'number'],
                ['label' => 'Percentage', 'field' => 'percentage', 'data_type' => 'number'],
                ['label' => 'Collected', 'field' => 'collected', 'data_type' => 'number'],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ];
        }
    }
}
