import EmptyIndex from '@/Shared/EmptyIndex';
import Table from '@/Shared/Table/Table';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import CampaignsTable from '../Campaigns/CampaignsTable';

export default function Show() {
    const { item, count, can } = usePage().props;
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Category Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Below info for {item.data.name}</p>
                    </div>
                    <div>
                    <div className="flex flex-nowrap px-4 py-5 sm:px-6">
                        {item.data.can.update &&
                            <Link href={route('categories.edit', item.data.id)} className="btn btn-normal btn-indigo mr-1">
                                <PencilIcon className="btn-icon" aria-hidden="true" />
                                <span className="hidden lg:inline">Edit</span>
                            </Link>
                        }
                        {item.data.can.delete &&
                            <Link as='button' method="DELETE" href={route('categories.destroy', item.data.id)} className="btn btn-normal btn-danger">
                                <TrashIcon className="btn-icon" aria-hidden="true" />
                                <span className="hidden lg:inline">Delete</span>
                            </Link>
                        }
                    </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Categroy</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.name}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Slug</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.slug}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Color</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold" style={{ color: item.data.color }}>{item.data.color}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Nuymber of Campaigns</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.campaigns_count}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {item.data.description}
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div className="mt-10">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Campaigns</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            This is a list of all campaigns under {item.data.name}
                        </p>
                    </div>
                    {(can.create_campaign && count > 0) &&
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <Link href={route('campaigns.create', { 'category_id': item.data.id })}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Create Campaign
                            </Link>
                        </div>
                    }
                </div>
                {count > 0 && <Table baseRoute="campaigns" selectedItems={selectedItems} setSelectedItems={setSelectedItems} />}
                {count == 0 && <EmptyIndex signular="campaign" plural="campaigns" routeName="campaigns.create" />}
            </div>
        </>
    )
}
