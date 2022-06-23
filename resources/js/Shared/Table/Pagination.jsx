import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from '@inertiajs/inertia-react'

export default function Pagination({ meta, links, fetchingData, setFetchingData }) {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <Link onFinish={()=> setFetchingData(false)} preserveScroll preserveState href={links.prev} className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${links.prev ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100'} text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link onFinish={()=> setFetchingData(false)} preserveScroll preserveState
                    href={links.next}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${links.next ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100'} text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{meta.from}</span> to <span className="font-medium">{meta.to}</span> of{' '}
                        <span className="font-medium">{meta.total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <Link onFinish={()=> setFetchingData(false)} preserveScroll preserveState href={links.prev} className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${links.prev ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100'} text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        {/*  */}
                        {meta.links.map((item, index) => !isNaN(item.label) ? (
                            <Link onFinish={()=> setFetchingData(false)} preserveScroll preserveState key={item.label} href={item.url} className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                            ${item.active
                                    ? 'z-10 bg-indigo-50 border-primary-400 text-primary-600'
                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}
                             ${ parseInt(item.label)>2 &&  parseInt(item.label)<(meta.last_page - 2) && meta.current_page!==parseInt(item.label) ? 'hidden xl:inline-flex' : '' }
                                    `
                            }>{item.label}</Link>
                        ) : (
                            item.label === '...' ? (<span key={index + item.label} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                            </span>) : null
                        )
                        )}
                        <Link onFinish={()=> setFetchingData(false)} preserveScroll preserveState
                            href={links.next}
                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${links.next ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100'} text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
