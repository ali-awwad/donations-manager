import Pagination from "@/Shared/Pagination";
import { Link, usePage } from "@inertiajs/inertia-react"
import { isObject } from "lodash";
import React from 'react'

export default function DonationsTable({items}) {
  return (
    <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                ID
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Amount
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                Category
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                Campaign
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                Donor
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                Created At
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {items.data.map((item) => (
                            <tr key={item.id}>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <Link href={route('donations.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.id}</Link>
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only">ID</dt>
                                        <dd className="mt-1 truncate text-gray-700"><Link href={route('donations.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.id}</Link></dd>
                                        <dt className="sr-only sm:hidden">Category</dt>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{isObject(item.category) ? item.category.name : item.category}</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">AED {item.amount}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{isObject(item.category) ? item.category.name : item.category}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{isObject(item.campaign) ? item.campaign.name : item.campaign}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{isObject(item.donor) ? item.donor.name : item.donor}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{item.created_at}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit<span className="sr-only"></span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination currentPage={items.current_page} from={items.from} to={items.to} first_page_url={items.first_page_url} last_page_url={items.last_page_url} prev_page_url={items.prev_page_url} next_page_url={items.next_page_url} links={items.links} total={items.total} />
            </div>
  )
}
