import { BanIcon, DownloadIcon, MinusIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function DataField({ column, item, routeParams = [], baseRoute }) {

    return (
        <div className='truncate'>
            {column.data_type ? (
                <>
                    {(column.data_type == 'boolean' && item[column.field] == true) && <CheckIcon className='w-6 h-6 text-green-500 fill-current inline-block' />}
                    {(column.data_type == 'boolean' && item[column.field] == false) && <BanIcon className='w-6 h-6 text-red-500 stroke-current inline-block' />}
                    {(column.data_type == 'text' && ((column.field != 'name' && column.field != 'title' && column.field != 'email') || !route().has(`${baseRoute}.show`, routeParams.concat([item.id])))) && item[column.field]}
                    {(column.data_type == 'text' && (column.field == 'name' || column.field == 'title' || column.field == 'email') && route().has(`${baseRoute}.show`, routeParams.concat([item.id]))) &&
                        <Link className='text-indigo-600 hover:text-indigo-800 font-semibold' href={route(`${baseRoute}.show`, routeParams.concat([item.id]))}>{item[column.field]}</Link>
                    }
                    {(column.data_type == 'number' && ((column.field != 'id') || !route().has(`${baseRoute}.show`, routeParams.concat([item.id])))) && item[column.field]}
                    {(column.data_type == 'number' && (column.field == 'id') && route().has(`${baseRoute}.show`, routeParams.concat([item.id]))) &&
                        <Link className='text-indigo-600 hover:text-indigo-800 font-semibold' href={route(`${baseRoute}.show`, routeParams.concat([item.id]))}>{item[column.field]}</Link>
                    }

                    {column.data_type == 'datetime' && item[column.field]}
                    {column.data_type == 'image' && <img src={item[column.field]} alt="image" className='rounded-full w-12 h-12' />}
                    {(column.data_type == 'media' && item[column.field] && item[column.field].is_image == true) && <img src={item[column.field].thumb ?? item[column.field].url} alt="image" className='rounded-full w-12 h-12' />}
                    {(column.data_type == 'media' && item[column.field] && item[column.field].is_image == false) &&
                        <>
                            <a className="a-link font-semibold" target="_blank" href={item[column.field].url}>
                                <DownloadIcon className="w-6 h-6 inline-block" />
                            </a>
                        </>}
                    {column.data_type == 'user' && <Link className='text-cyan-600 hover:text-cyan-800 font-semibold' href={route('users.show', item[column.field].id)}>{item[column.field].fullname}</Link>}
                    {(column.data_type == 'object' && column.object_data && item[column.field] && item[column.field][column.object_data.id]) &&
                        <>
                            {route().has(`${column.object_data.type}.show`, routeParams.concat([item[column.field][column.object_data.id]])) &&
                                <Link
                                    // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'user_types']
                                    className='text-cyan-600 hover:text-cyan-800 font-semibold'
                                    href={route(`${column.object_data.type}.show`, routeParams.concat([item[column.field][column.object_data.id]]))}
                                >
                                    {item[column.field][column.object_data.name]}
                                </Link>
                            }

                            {route().has(`${column.object_data.route}.show`, routeParams.concat([item[column.field][column.object_data.id]])) &&
                                <Link
                                    // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'event_exhibitors','route'=>'events.exhibitors']
                                    className='text-cyan-600 hover:text-cyan-800 font-semibold'
                                    href={route(`${column.object_data.route}.show`, routeParams.concat([item[column.field][column.object_data.id]]))}
                                >
                                    {item[column.field][column.object_data.name]}
                                </Link>
                            }

                            {(
                                route().has(`${column.object_data.type}.show`, routeParams.concat([item[column.field][column.object_data.id]]))==false &&
                                route().has(`${column.object_data.route}.show`, routeParams.concat([item[column.field][column.object_data.id]]))==false) &&
                                <span className='font-semibold'>
                                    {item[column.field][column.object_data.name]}
                                </span>
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
