import Pagination from "@/Shared/Pagination";
import { Link, usePage } from "@inertiajs/inertia-react"

export default function Index() {
    const { items } = usePage().props;

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        This list of categories
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Number of campaigns
                            </th>

                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {items.data.map((item) => (
                            <tr key={item.slug}>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <Link href={route('categories.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.name}</Link>
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only">Name</dt>
                                        <dd className="mt-1 truncate text-gray-700"><Link href={route('categories.show', item.id)} className="text-blue-400 hover:text-blue-600">{item.name}</Link></dd>
                                    </dl>
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500">{item.campaigns_count}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit<span className="sr-only">, {item.name}</span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination meta={items.meta} links={items.links} />
            </div>
        </div>
    )
}
