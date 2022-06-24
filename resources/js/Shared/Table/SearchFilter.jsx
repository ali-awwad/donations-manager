import { SearchCircleIcon } from '@heroicons/react/outline'
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';
import Actions from './Actions';
import PerPageFilter from './PerPageFilter';
import SearchCommand from './SearchCommand';

export default function SearchFilter({ fetchingData, setFetchingData, selectedItems, setSelectedItems, routeParams = [] }) {
    const { initSearch, actions } = usePage().props;
    const [search, setSearch] = useState(initSearch);
    const [searchCommandOpen, setSearchCommandOpen] = useState(true);


    function runSearch() {
        Inertia.reload({
            data: { search, page: 1 },
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

    }
    return (
        <div className='block lg:flex justify-between my-2 mx-5'>
            <div className="mb-2 lg:mb-0 relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete='off'
                    defaultValue={search}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            runSearch()
                        }
                    }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full max-w-xs pl-10 sm:text-sm border-gray-300 rounded-md h-full"
                    placeholder="Search ..."
                />

                {/* <SearchCommand
                    open={searchCommandOpen}
                    setOpen={setSearchCommandOpen}
                    query={search}
                    setQuery={setSearch}
                    runSearch={runSearch}
                /> */}


            </div>
            <div className='block space-y-2 lg:space-y-0 lg:flex'>
                {(actions && actions.length) &&
                    <Actions actions={actions} setFetchingData={setFetchingData} selectedItems={selectedItems} routeParams={routeParams} setSelectedItems={setSelectedItems} />
                }
                <PerPageFilter fetchingData={fetchingData} setFetchingData={setFetchingData} />
            </div>

        </div>
    )
}
