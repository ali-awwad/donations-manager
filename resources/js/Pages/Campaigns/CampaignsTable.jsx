import Pagination from '@/Shared/Pagination'
import { LinkIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function CampaignsTable({ items }) {
    return (
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Target
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Collected
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            %
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Category
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {items.data.map((item) => (
                        <tr key={item.slug}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                <Link href={route('campaigns.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.name}</Link>
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Name</dt>
                                    <dd className="mt-1 truncate text-gray-700"><Link href={route('campaigns.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.name}</Link></dd>
                                    <dt className="sr-only sm:hidden">Category</dt>
                                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{item.slug}</dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">AED {item.target}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">AED {item.collected}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{item.percentage}%</td>
                            <td className="px-3 py-4 text-sm text-gray-500">{item.category}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex">
                                {item.can.view &&
                                    <Link href={route('campaigns.show', item.id)} className="btn btn-indigo mr-1">
                                        <LinkIcon className="btn-icon" aria-hidden="true" />
                                        View<span className="sr-only">, {item.name}</span>
                                    </Link>
                                }
                                {item.can.update &&
                                    <Link href={route('campaigns.edit', item.id)} className="btn btn-indigo mr-1">
                                        <PencilIcon className="btn-icon" aria-hidden="true" />
                                        Edit<span className="sr-only">, {item.name}</span>
                                    </Link>
                                }
                                {item.can.delete &&
                                    <Link as="button" method="DELETE" href={route('campaigns.destroy', item.id)} className="btn btn-danger">
                                        <TrashIcon className="btn-icon" aria-hidden="true" />
                                        Delete<span className="sr-only">, {item.name}</span>
                                    </Link>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination meta={items.meta} links={items.links} />
        </div>
    )
}
