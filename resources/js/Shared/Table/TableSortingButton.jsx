import { ChevronDownIcon } from '@heroicons/react/outline';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TableSortingButton({ field, label, dataType, objectData, sortingBy, setSortingBy, setFetchingData, setSelectedItems }) {
    const { order_direction } = usePage().props;
    const [isOrderDesc, setIsOrderDesc] = useState(true);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (order_direction === 'desc') {
            setIsOrderDesc(true);
        }
        else {
            setIsOrderDesc(false);
        }
    }, [])

    useEffect(() => {
        if (count > 0) {
            let orderByField = field;
            if (field == 'updator') {
                orderByField = 'last_update_by';
            }
            else if (field == 'creator') {
                orderByField = 'created_by';
            }
            else if(objectData && objectData.type && dataType && dataType=='object') {
                orderByField = `${objectData.type}.${objectData.name}`
            }
            Inertia.get(
                route(route().current(), route().params),
                { order_by: orderByField, page: 1, order_direction: (isOrderDesc ? 'desc' : 'asc') },
                {
                    preserveState: true,
                    preserveScroll:true,
                    only: ['items'],
                    onFinish: () => {
                        setFetchingData(false);
                        setSelectedItems([]);
                    }
                }
            );
        }
    }, [isOrderDesc])

    function titleCase(str) {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    function doSorting(event) {
        event.preventDefault();
        // if (objectData && objectData.type && dataType && dataType == 'object') {
        //     return;
        // }
        setSortingBy(field);
        setCount(count + 1);
        setIsOrderDesc(prev => !prev)
    }

    return (
        <button onClick={(event) => doSorting(event)} className="group inline-flex">
            {label ?? titleCase(field)}
            <span className={classNames(
                sortingBy === field
                    ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-300'
                    : 'text-gray-400 invisible group-focus:visible'
                ,
                'ml-2 flex-none rounded'
            )}>
                {(dataType != 'objects') &&
                    <>
                        {isOrderDesc && <ChevronDownIcon className={`${field === sortingBy ? '' : 'invisible text-gray-400'} h-5 w-5 flex-none rounded  group-hover:visible group-focus:visible`} aria-hidden="true" />}
                        {!isOrderDesc && <ChevronUpIcon className={`${field === sortingBy ? '' : 'invisible text-gray-400'} h-5 w-5 flex-none rounded group-hover:visible group-focus:visible`} aria-hidden="true" />}
                    </>
                }
            </span>
        </button>
    )
}
