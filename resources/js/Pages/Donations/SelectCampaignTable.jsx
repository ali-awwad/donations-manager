import React from 'react'
import Pagination from "@/Shared/Pagination";
import { CheckIcon } from '@heroicons/react/outline';

export default function SelectCampaignTable({ campaigns, selectedCampaign, setSelectedCampaign }) {
  return (
    <div className="-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
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
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Select</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {campaigns.data.map((item, index) => (
                        <tr key={index} className={`${selectedCampaign===item.id ? 'bg-green-50 hover:bg-green-100' : ''} hover:bg-gray-50`}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                {item.name}

                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">AED {item.target}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">AED {item.collected}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <button type='button' onClick={() => setSelectedCampaign(item.id)} className={`btn btn-default ${selectedCampaign===item.id ? 'border-green-600 bg-green-600 text-white' : ''}`}>
                                    <CheckIcon className='btn-icon' />
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination meta={campaigns.meta} links={campaigns.links} />
        </div>
  )
}
