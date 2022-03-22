import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'


export default function Show() {
    const { donation } = usePage().props;

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Donation Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Below info for {donation.data.uuid}</p>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <Link href={route('donations.edit', donation.data.id)} className="btn btn-normal btn-indigo mr-1">
                            <PencilIcon className="btn-icon" aria-hidden="true" />
                            Edit<span className="sr-only">, {donation.data.uuid}</span>
                        </Link>
                        <Link as='button' method="DELETE" href={route('donations.destroy', donation.data.id)} className="btn btn-normal btn-danger">
                            <TrashIcon className="btn-icon" aria-hidden="true" />
                            Delete<span className="sr-only">, {donation.data.uuid}</span>
                        </Link></div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Donation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{donation.data.uuid}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Amount</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">AED {donation.data.amount}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Donor</dt>
                            {donation.data.donor.id &&
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Link href={route('donors.show', donation.data.donor.id)} className="text-blue-500">{donation.data.donor.name}</Link> </dd>
                            }
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Category</dt>
                            {donation.data.category.id &&
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold"><Link href={route('categories.show', donation.data.category.id)} className="text-blue-500">{donation.data.category.name}</Link> </dd>
                            }
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Campaign</dt>
                            {donation.data.campaign.id &&
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Link href={route('campaigns.show', donation.data.campaign.id)} className="text-blue-500">{donation.data.campaign.name}</Link> </dd>
                            }
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {donation.data.description}
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>

        </>
    )
}
