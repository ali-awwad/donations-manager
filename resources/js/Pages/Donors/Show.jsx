/* This example requires Tailwind CSS v2.0+ */
import EmptyIndex from '@/Shared/EmptyIndex';
import Table from '@/Shared/Table/Table';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link, usePage } from '@inertiajs/inertia-react'
import { useState } from 'react';

export default function Show() {
    const { item, count, can } = usePage().props;
    const [selectedItems, setSelectedItems] = useState([]);
    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Donor Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details for <strong>{item.data.name}</strong>.</p>
                    </div>
                    <div>
                    <div className="flex flex-nowrap px-4 py-5 sm:px-6">
                        <Link href={route('donors.edit', item.data.id)} className="btn btn-normal btn-indigo mr-1">
                            <PencilIcon className="btn-icon" aria-hidden="true" />
                            <span className="hidden lg:inline">Edit</span>
                        </Link>
                        <Link as='button' method="DELETE" href={route('donors.destroy', item.data.id)} className="btn btn-normal btn-danger">
                            <TrashIcon className="btn-icon" aria-hidden="true" />
                            <span className="hidden lg:inline">Delete</span>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.name}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Alias</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.alias}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Linked with user</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.user ? item.data.user.name : null}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Total Donations</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.total_donations}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of donations</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.donations_count}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of campaigns participated in</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.campaigns_count}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of categories participated in</dt>
                            <dd className="mt-1 text-sm text-gray-900">{item.data.categories_count}</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {item.data.remarks}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-10">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Donations</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            This is a list of all donations under {item.data.name}
                        </p>
                    </div>
                    {can.create_donation &&
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <Link href={route('donations.create', { 'donor_id': item.data.id })}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Create Donation
                            </Link>
                        </div>
                    }
                </div>
                {count > 0 && <Table baseRoute="donations" selectedItems={selectedItems} setSelectedItems={setSelectedItems} />}
                {count == 0 && <EmptyIndex signular="donation" plural="donations" routeName="donations.create" />}
            </div>
        </>
    )
}
