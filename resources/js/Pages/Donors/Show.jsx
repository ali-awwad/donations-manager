/* This example requires Tailwind CSS v2.0+ */
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link, usePage } from '@inertiajs/inertia-react'
import DonationsTable from '../Donations/DonationsTable';

export default function Show() {
    const { donor, items } = usePage().props;
    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Donor Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details for <strong>{donor.data.name}</strong>.</p>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <Link href={route('donors.edit', donor.data.id)} className="btn btn-normal btn-indigo mr-1">
                            <PencilIcon className="btn-icon" aria-hidden="true" />
                            Edit<span className="sr-only">, {donor.data.name}</span>
                        </Link>
                        <Link as='button' method="DELETE" href={route('donors.destroy', donor.data.id)} className="btn btn-normal btn-danger">
                            <TrashIcon className="btn-icon" aria-hidden="true" />
                            Delete<span className="sr-only">, {donor.data.name}</span>
                        </Link></div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.name}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Alias</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.alias}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Linked with user</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.user ? donor.data.user.name : null}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Total Donations</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.total_donations}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of donations</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.donations_count}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of campaigns participated in</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.campaigns_count}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500"># of categories participated in</dt>
                            <dd className="mt-1 text-sm text-gray-900">{donor.data.categories_count}</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {donor.data.remarks}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <DonationsTable items={items} />
        </>
    )
}
