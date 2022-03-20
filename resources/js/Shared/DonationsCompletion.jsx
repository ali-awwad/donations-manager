import { Link } from "@inertiajs/inertia-react";
import Pagination from "./Pagination";


export default function DonationsCompletion({data}) {

    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-indigo-500">Campaigns Performance</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {data.data.map((item) => (
                    <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-400 truncate">{item.created_at}</dt>
                        <dt className="font-medium text-gray-500 text-lg truncate"><Link className="text-blue-500" href={route('campaigns.show',item.id)}>{item.name}</Link></dt>
                        <dt className="text-sm font-medium text-gray-800 truncate">{item.donations_count} Donations</dt>
                        <dd className={'mt-1 text-3xl font-semibold ' + (item.percentage >=80 ? 'text-green-500' : (item.percentage >= 50 ? 'text-orange-500' : 'text-red-500'))}>{item.percentage} %</dd>
                    </div>
                ))}
            </dl>
            <div className="mt-4">
            <Pagination meta={data.meta} links={data.links} />
            </div>
        </div>
    )
}