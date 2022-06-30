import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { usePage } from '@inertiajs/inertia-react';
import Actions from './Actions';
import PerPageFilter from './PerPageFilter';
import { FilterIcon } from '@heroicons/react/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Filters({fetchingData, setFetchingData, selectedItems, setSelectedItems, routeParams = []}) {
    const {actions} = usePage().props;
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md p-2 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                    >
                        <FilterIcon
                            className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'h-5 w-5 group-hover:text-gray-500')}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 right-0 transform mt-3 px-2 w-screen max-w-xs sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-2 bg-white px-2 py-2">
                                    <div>
                                        {(actions && actions.length) &&
                                            <Actions actions={actions} setFetchingData={setFetchingData} selectedItems={selectedItems} routeParams={routeParams} setSelectedItems={setSelectedItems} />
                                        }
                                    </div>
                                    <div>
                                        <PerPageFilter fetchingData={fetchingData} setFetchingData={setFetchingData} />
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
