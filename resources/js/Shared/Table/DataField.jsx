import { MinusIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function DataField({ column, item, routeParams=[] }) {
    return (
        <div>
            {column.data_type ? (
                <>
                    {(column.data_type == 'boolean' && item[column.field] == true) && <CheckIcon className='w-6 h-6 text-green-500 fill-current inline-block' />}
                    {(column.data_type == 'boolean' && item[column.field] == false) && <MinusIcon className='w-6 h-6 text-red-500 fill-current inline-block' />}
                    {column.data_type == 'text' && item[column.field]}
                    {column.data_type == 'number' && item[column.field]}
                    {column.data_type == 'datetime' && item[column.field]}
                    {column.data_type == 'image' && <img src={item[column.field]} alt="image" className='rounded-full w-12 h-12' />}
                    {column.data_type == 'user' && <Link className='text-indigo-600 hover:text-indigo-800 font-semibold' href={route('users.show', item[column.field].id)}>{item[column.field].fullname}</Link>}
                    {(column.data_type == 'object' && column.object_data && item[column.field] && item[column.field][column.object_data.id]) &&
                    <>
                        {route().has(`${column.object_data.type}.show`, routeParams.concat([item[column.field][column.object_data.id]])) &&
                        <Link
                        // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'user_types']
                            className='text-indigo-600 hover:text-indigo-800 font-semibold'
                            href={route(`${column.object_data.type}.show`, routeParams.concat([item[column.field][column.object_data.id]]))}
                        >
                            {item[column.field][column.object_data.name]}
                        </Link>
                        }

                        {route().has(`${column.object_data.route}.show`, routeParams.concat([item[column.field][column.object_data.id]])) &&
                        <Link
                        // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'event_exhibitors','route'=>'events.exhibitors']
                            className='text-indigo-600 hover:text-indigo-800 font-semibold'
                            href={route(`${column.object_data.route}.show`, routeParams.concat([item[column.field][column.object_data.id]]))}
                        >
                            {item[column.field][column.object_data.name]}
                        </Link>
                        }
                    </>
                    }
                </>
            ) : (
                <>
                    {item[column.field]}
                </>
            )}

        </div>
    )
}
