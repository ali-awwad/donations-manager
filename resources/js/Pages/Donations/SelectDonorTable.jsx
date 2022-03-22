import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Pagination from "@/Shared/Pagination";
import { CheckIcon } from '@heroicons/react/outline';

export default function SelectDonorTable({ donors, setSelectedDonor }) {
  return (
    <div className="-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
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
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Select</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {donors.data.map((donor) => (
                        <tr key={donor.name}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                {donor.name}
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="mt-1 truncate text-gray-700"><Link href={route('donors.show', donor.id)} className="text-blue-400 hover:text-blue-600">{donor.name}</Link></dd>
                                    <dt className="sr-only sm:hidden">Alias</dt>
                                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{donor.alias}</dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{donor.alias}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">AED {donor.total_donations}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <button type='button' onClick={() => setSelectedDonor(donor.id)} className="btn btn-default">
                                    <CheckIcon className='btn-icon' />
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination meta={donors.meta} links={donors.links} />
        </div>
  )
}
