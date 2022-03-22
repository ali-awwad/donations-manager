import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import DonorsTable from '../Donors/DonorsTable';

export default function Show() {
    const { item, donors } = usePage().props;

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Below info for {item.data.name}</p>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <Link href={route('users.edit', item.data.id)} className="btn btn-normal btn-indigo mr-1">
                            <PencilIcon className="btn-icon" aria-hidden="true" />
                            Edit<span className="sr-only">, {item.data.name}</span>
                        </Link>
                        <Link as='button' method="DELETE" href={route('users.destroy', item.data.id)} className="btn btn-normal btn-danger">
                            <TrashIcon className="btn-icon" aria-hidden="true" />
                            Delete<span className="sr-only">, {item.data.name}</span>
                        </Link></div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.name}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.data.email}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Verified At</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">{item.data.verified_at}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-10">
                <div className="">
                    <h1 className="text-xl font-semibold text-gray-900">Linked to Donors</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        This is a list of all donors under {item.data.name}
                    </p>
                </div>
                <DonorsTable donors={donors}></DonorsTable>
            </div>
        </>
    )
}
