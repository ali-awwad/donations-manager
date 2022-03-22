import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function SearchInput({ query, setQuery }) {
    function handleChange(event) {
        setQuery(event.target.value);
    }
    return (
        <div>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="search"
                    name="search"
                    autoComplete='off'
                    value={query}
                    onChange={handleChange}
                    id="search"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search"
                />
            </div>
        </div>
    )
}
