import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import DonationsTable from '../Donations/DonationsTable';

export default function Show() {
    const { item, donations } = usePage().props;

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Campaign Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Below info for {item.data.name}</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Campaign</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.name}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Slug</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.slug}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Part of Category</dt>
                            {item.data.category_id &&
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Link href={route('categories.show', item.data.category_id)} className="text-blue-400 hover:text-blue-600">{item.data.category}</Link>
                            </dd>
                            }
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
                <h2 className="text-lg font-medium text-gray-900">Donations</h2>
                <DonationsTable items={donations} />
            </div>
        </>
    )
}
