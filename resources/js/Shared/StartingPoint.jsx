import {
    CurrencyDollarIcon,
    GiftIcon,
    TagIcon,
    UsersIcon,
} from '@heroicons/react/outline'
import { Link } from '@inertiajs/inertia-react'

export default function StartingPoint({ can }) {
    const items = [
        {
            title: 'Create a Donation',
            description: 'Start a new donation, you can choose donors and assign to campains.',
            icon: CurrencyDollarIcon,
            background: 'bg-pink-500',
            href: route('donations.create'),
            enabled: can.donations.create
        },
        {
            title: 'Create a Campaign',
            description: 'start a new campaign and assign its target and choose its category.',
            icon: GiftIcon,
            background: 'bg-yellow-500',
            href: route('campaigns.create'),
            enabled: can.campaigns.create
        },
        {
            title: 'Create a Category',
            description: 'Create a category, such as Education, Health, Food ... etc.',
            icon: TagIcon,
            background: 'bg-indigo-500',
            href: route('categories.create'),
            enabled: can.categories.create
        },
        {
            title: 'Create a Donor',
            description: 'Create the donor accounts.',
            icon: UsersIcon,
            background: 'bg-green-500',
            href: route('donors.create'),
            enabled: can.donors.create
        },

    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            {(can.campaigns.create || can.donations.create) &&
                <div>
                    <h2 className="text-lg font-medium text-gray-900">Quick Start</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Use below actions to quickly start a process.
                    </p>
                    <ul role="list" className="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {items.map((item, itemIdx) => (
                            <div key={itemIdx}>
                                {item.enabled &&
                                    <li className="flow-root">
                                        <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
                                            <div
                                                className={classNames(
                                                    item.background,
                                                    'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                                                )}
                                            >
                                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    <Link href={item.href} className="focus:outline-none">
                                                        <span className="absolute inset-0" aria-hidden="true" />
                                                        {item.title}
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </Link>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                }
                            </div>
                        ))}
                    </ul>

                </div>
            }
        </>
    )
}
