
import { DocumentDuplicateIcon, PencilIcon, RefreshIcon, TrashIcon, ZoomInIcon } from '@heroicons/react/outline'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import DataField from './DataField'

import Pagination from './Pagination'
import SearchFilter from './SearchFilter'
import TableSortingButton from './TableSortingButton'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Table({ baseRoute, selectedItems, setSelectedItems, routeParams = [] }) {
    const { items, order_by, columns, count } = usePage().props
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [deleting, setDeleting] = useState(0);
    const [replicating, setReplicating] = useState(0);
    const [sortingBy, setSortingBy] = useState(order_by);
    const [fetchingData, setFetchingData] = useState(false);

    useEffect(() => {
        setFetchingData(false);
        return Inertia.on('start', () => setFetchingData(true))
    }, [])

    useLayoutEffect(() => {
        const isIndeterminate = selectedItems.length > 0 && selectedItems.length < items.data.length
        setChecked(selectedItems.length === items.data.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedItems])

    function toggleAll() {
        setSelectedItems(checked || indeterminate ? [] : items.data.map(p => p.id))
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    function handleDelete(event, id, nice_name) {
        event.preventDefault();
        Inertia.delete(
            route(`${baseRoute}.destroy`, routeParams.concat([id])),
            {
                onBefore: () => confirm(`you are about to delete ${nice_name ?? 'this'} item?`),
                onStart: () => setDeleting(id),
                onFinish: () => {
                    setDeleting(0)
                    setFetchingData(false);
                    setSelectedItems(selectedItems.filter((p) => p !== id))
                }
            }
        )
    }
    function handleReplicate(event, id, nice_name) {
        event.preventDefault();
        Inertia.post(
            route(`${baseRoute}.replicate`, routeParams.concat([id])), {},
            {
                onBefore: () => confirm(`you are about to replicate ${nice_name ?? 'this'} item?`),
                onStart: () => setReplicating(id),
                onFinish: () => {
                    setFetchingData(false);
                    setReplicating(0)
                }
            }
        )
    }

    return (
        <div className={`mt-8 flex flex-col ${count > 0 ? '' : 'hidden'}`}>
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="bg-gray-50 relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <SearchFilter routeParams={routeParams} fetchingData={fetchingData} setFetchingData={setFetchingData} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                        <div className='relative'>
                            <div className="overflow-hidden overflow-x-auto relative">
                                <table className={`min-w-full table-fixed divide-y divide-gray-300`}>
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                <input
                                                    type="checkbox"
                                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                    ref={checkbox}
                                                    checked={checked}
                                                    onChange={toggleAll}
                                                />
                                            </th>
                                            {columns.map((col, index) =>
                                                <th key={col.label} scope={col.field} className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900`}>
                                                    <TableSortingButton dataType={col.data_type} objectData={col.object_data} setFetchingData={setFetchingData} setSelectedItems={setSelectedItems} key={col.label} field={col.field} label={col.label} sortingBy={sortingBy} setSortingBy={setSortingBy} />
                                                </th>
                                            )}

                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${fetchingData ? 'animate-pulse' : ''} divide-y divide-gray-200 bg-white`}>
                                        {items.data.map((item, index) => (
                                            <tr key={index} className={selectedItems.includes(item.id) ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                                                <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                    {selectedItems.includes(item.id) && (
                                                        <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                                    )}
                                                    <input
                                                        type="checkbox"
                                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                        value={item.id}
                                                        checked={selectedItems.includes(item.id)}
                                                        onChange={(e) =>
                                                            setSelectedItems(
                                                                e.target.checked
                                                                    ? [...selectedItems, item.id]
                                                                    : selectedItems.filter((p) => p !== item.id)
                                                            )
                                                        }
                                                    />
                                                </td>



                                                {columns.map((col, index) =>
                                                    <td key={index} className={classNames(
                                                        index === 0 ? 'font-medium text-gray-900' : '',
                                                        'whitespace-nowrap py-4 pr-3 text-sm max-w-xs truncate',
                                                        (index === 0 && selectedItems.includes(item.id)) ? 'text-indigo-600' : ''
                                                    )}>
                                                        <DataField column={col} item={item} routeParams={routeParams} />
                                                    </td>
                                                )}

                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <div className="flex justify-end w-full">
                                                        {(item.can.view && route().has(`${baseRoute}.show`, routeParams.concat([item.id]))) &&
                                                            <Link title='View' href={route(`${baseRoute}.show`, routeParams.concat([item.id]))} className="btn-table-xs mr-1">
                                                                <ZoomInIcon className="w-6 h-6" aria-hidden="true" />
                                                                <span className="sr-only">View</span>
                                                            </Link>
                                                        }
                                                        {(item.can.delete && route().has(`${baseRoute}.replicate`, routeParams.concat([item.id]))) &&
                                                            <button title='Replicate' onClick={(event) => handleReplicate(event, item.id, item.nice_name)} className="btn-table-xs warning" disabled={deleting === item.id}>
                                                                {(replicating === 0 || replicating !== item.id) &&
                                                                    <DocumentDuplicateIcon className="w-6 h-6" aria-hidden="true" />
                                                                }
                                                                {replicating === item.id &&
                                                                    <RefreshIcon className="animate-spin w-6 h-6" aria-hidden="true" />
                                                                }
                                                                <span className="sr-only">Delete</span>
                                                            </button>
                                                        }
                                                        {(item.can.update && route().has(`${baseRoute}.edit`, routeParams.concat([item.id]))) &&
                                                            <Link title='Edit' href={route(`${baseRoute}.edit`, routeParams.concat([item.id]))} className="btn-table-xs info mr-1">
                                                                <PencilIcon className="w-6 h-6" aria-hidden="true" />
                                                                <span className="sr-only">Edit</span>
                                                            </Link>
                                                        }
                                                        {(item.can.delete && route().has(`${baseRoute}.destroy`, routeParams)) &&
                                                            <button title='Delete' onClick={(event) => handleDelete(event, item.id, item.nice_name)} className="btn-table-xs danger" disabled={deleting === item.id}>
                                                                {(deleting === 0 || deleting !== item.id) &&
                                                                    <TrashIcon className="w-6 h-6" aria-hidden="true" />
                                                                }
                                                                {deleting === item.id &&
                                                                    <RefreshIcon className="animate-spin w-6 h-6" aria-hidden="true" />
                                                                }
                                                                <span className="sr-only">Delete</span>
                                                            </button>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination meta={items.meta} links={items.links} fetchingData={fetchingData} setFetchingData={setFetchingData} />
                    </div>
                </div>
            </div>
            { }
        </div>
    )
}
