import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Pagination from "@/Shared/Pagination";
import { LinkIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

export default function DonorsTable({ donors }) {
    return (
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Alias
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Total Donations
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            # of donations
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            # of campaigns participated in
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            # of categories participated in
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {donors.data.map((donor) => (
                        <tr key={donor.name}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                <Link href={route('donors.show', donor.id)} className="text-blue-400 hover:text-blue-600">{donor.name}</Link>
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="mt-1 truncate text-gray-700"><Link href={route('donors.show', donor.id)} className="text-blue-400 hover:text-blue-600">{donor.name}</Link></dd>
                                    <dt className="sr-only sm:hidden">Alias</dt>
                                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{donor.alias}</dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{donor.alias}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{donor.total_donations}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{donor.donations_count}</td>
                            <td className="px-3 py-4 text-sm text-gray-500">{donor.campaigns_count}</td>
                            <td className="px-3 py-4 text-sm text-gray-500">{donor.categories_count}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                {donor.can.view &&
                                    <Link href={route('donors.show', donor.id)} className="btn btn-indigo mr-1">
                                        <LinkIcon className="btn-icon" aria-hidden="true" />
                                        View<span className="sr-only">, {donor.name}</span>
                                    </Link>
                                }
                                {donor.can.update &&
                                    <Link href={route('donors.edit', donor.id)} className="btn btn-indigo mr-1">
                                        <PencilIcon className="btn-icon" aria-hidden="true" />
                                        Edit<span className="sr-only">, {donor.name}</span>
                                    </Link>
                                }
                                {donor.can.delete &&
                                    <Link as="button" method="DELETE" href={route('donors.destroy', donor.id)} className="btn btn-danger">
                                        <TrashIcon className="btn-icon" aria-hidden="true" />
                                        Delete<span className="sr-only">, {donor.name}</span>
                                    </Link>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination meta={donors.meta} links={donors.links} />
        </div>
    )
}
