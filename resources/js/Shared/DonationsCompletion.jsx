import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { Link } from "@inertiajs/inertia-react";
import Pagination from "./Pagination";


export default function DonationsCompletion({ data }) {

    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-indigo-500">Campaigns Performance</h3>
            <div className="">
                <div className="flex overflow-hidden overflow-x-scroll py-3">
                    <dl className="space-x-4 flex flex-nowrap">
                        {data.data.map((item) => (
                            <div key={item.name} className="w-1/3 inline-block px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                                <dt className="text-sm font-medium text-gray-400 truncate">{item.created_at}</dt>
                                <dt className="font-medium text-gray-500 text-lg truncate"><Link className="text-blue-500" href={route('campaigns.show', item.id)}>{item.name}</Link></dt>
                                <dt className="text-sm font-medium text-gray-800 truncate">{item.donations_count} Donations</dt>
                                <dd className={'mt-1 text-3xl font-semibold ' + (item.percentage.slice(1) >= 80 ? 'text-green-500' : (item.percentage.slice(1) >= 50 ? 'text-yellow-500' : 'text-red-500'))}>{item.percentage}</dd>
                            </div>
                        ))}
                        <div className="w-1/3 inline-block px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="font-medium text-gray-500 text-lg truncate">
                                <Link className="text-blue-500" href={route('campaigns.index')}>
                                    <ChevronDoubleRightIcon className="w-10 h-10 stroke-current" />
                                    All Campaigns
                                </Link>
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-4">
                {/* <Pagination meta={data.meta} links={data.links} /> */}
            </div>
        </div>
    )
}
