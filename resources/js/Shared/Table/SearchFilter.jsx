import { SearchCircleIcon, XIcon } from '@heroicons/react/outline'
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import Filters from './Filters';

export default function SearchFilter({ fetchingData, setFetchingData, selectedItems, setSelectedItems, routeParams = [] }) {
    const { initSearch } = usePage().props;
    const [search, setSearch] = useState(initSearch);

    const debouncedSave = useRef(debounce(nextValue => runSearch(nextValue), 500))
        .current;

    function runSearch(value) {
        Inertia.reload({
            data: { search: value, page: 1 },
            only: ['items'],
            replace: true,
            preserveState: true,
            onFinish: () => setFetchingData(false)
        });
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setSearch(value);
        debouncedSave(value);

    }
    return (
        <div className='flex justify-between mx-5 py-1'>
            <div className="mb-2 lg:mb-0 relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                {search &&
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <XIcon onClick={()=>{setSearch(''); debouncedSave('');}} className="h-5 w-5 text-gray-400 cursor-pointer" aria-hidden="true" />
                    </div>
                }
                <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete='off'
                    value={search}
                    onChange={handleChange}
                    // onKeyDown={(event) => {
                    //     if (event.key === 'Enter') {
                    //         runSearch()
                    //     }
                    // }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full max-w-xs pl-10 sm:text-sm border-gray-300 rounded-md h-full"
                    placeholder="Search ..."
                />


            </div>
            <div className='block space-y-2 lg:space-y-0 lg:flex'>
                <Filters fetchingData={fetchingData} setFetchingData={setFetchingData} selectedItems={selectedItems} setSelectedItems={setSelectedItems} routeParams={routeParams} />
            </div>

        </div>
    )
}
