import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { PaperAirplaneIcon, RefreshIcon } from '@heroicons/react/outline';
import { useForm } from '@inertiajs/inertia-react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Actions({ actions, selectedItems, setSelectedItems, setFetchingData, routeParams = [] }) {
    const [selected, setSelected] = useState({ name: 'none', method: '', route: '', text: '-- Select Action --' });
    const [newActions, setNewActions] = useState([]);
    const { data, setData, get, post, delete:destroy, processing } = useForm({

        button: '',
    })

    useEffect(() => {
        setNewActions([{ name: 'none', method: '', route: '', text: '-- Select Action --' }, ...actions])
    }, [])

    useEffect(() => {
        setData('button', selected.name)
    }, [selected])


    function handleClick(event) {
        event.preventDefault();

        if (selected.method === 'GET') {
            get(route(`${selected.route}`))
        }

        else if (selected.method === 'POST') {
            let warningMsg = '';
            if (selected.name === 'reset') {
                warningMsg = `you are about to delete all items and replace them with the default. Proceed?`;
            }
            else {
                warningMsg = `This action with affect the selected [${selectedItems.length}] item(s). Proceed?`
            }

            post(route(`${selected.route}`, routeParams.concat(selectedItems.toString())), {
                preserveState: true,
                preserveScroll: true,
                onBefore: () => confirm(warningMsg),
                onSuccess: () => {
                    setFetchingData(false);
                    setSelectedItems([]);
                }
            });
        }
        else if (selected.method === 'DELETE') {
            destroy(route(`${selected.route}`, routeParams.concat(selectedItems.toString())), {
                preserveState: true,
                preserveScroll: true,
                onBefore: () => confirm(`you are about to delete [${selectedItems.length}] item(s)?`),
                onSuccess: () => {
                    setFetchingData(false);
                    setSelectedItems([]);
                }
            });
        }
    }

    return (
        <div className='flex'>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative flex-grow">
                            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected.text}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {newActions.filter(act => route().has(`${act.route}`)).map((action) => (
                                        <Listbox.Option
                                            key={action.name}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-8 pr-4 w-full'
                                                )
                                            }
                                            value={action}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                        {action.text}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>

                    </>
                )}
            </Listbox>
            <button
                onClick={(event) => handleClick(event)}
                disabled={(!route().has(`${selected.route}`) || processing || (selectedItems.length === 0 && selected.require_selection == true))}
                className={`flex items-center rounded border ${processing ? 'bg-gray-200 text-gray-300 border-gray-400' : 'border-blue-600 bg-blue-500 text-white'} ml-1 px-2 text-sm`}
            >
                {processing && <RefreshIcon className={`animate-spin w-4 h-4 stroke-current inline`} />}
                {!processing && <PaperAirplaneIcon className='inline w-4 h-4 rotate-90 stroke-current' />}
            </button>
        </div>
    )
}
