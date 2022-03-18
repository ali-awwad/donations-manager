import EmptyIndex from '@/Shared/EmptyIndex';
import Pagination from '@/Shared/Pagination';
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import CampaignsTable from './CampaignsTable';

export default function Index() {
    const { items } = usePage().props;
    return (
        <>
            {items.data.length === 0 ? (
                <EmptyIndex signular="campaign" plural="campaigns" routeName="campaigns.create" />
            )
                : (
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Campaigns</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    This is a list of all campaigns
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <Link href={route('campaigns.create')}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Create Campaign
                                </Link>
                            </div>
                        </div>
                        <CampaignsTable items={items}></CampaignsTable>
                    </div>
                )
            }
        </>
    )
}
