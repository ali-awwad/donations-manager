import EmptyIndex from "@/Shared/EmptyIndex";
import Pagination from "@/Shared/Pagination";
import { LinkIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { Link, usePage } from "@inertiajs/inertia-react"

export default function Users() {
    const { users, can } = usePage().props;
    return (
        <>
            {users.data.length === 0 ? (
                <EmptyIndex signular="user" plural="users" routeName="users.create" />
            )
                : (
                    <div className="">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the users in your account including their name, title, email and role.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <Link
                                    href={route('users.create')}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Add user
                                </Link>
                            </div>
                        </div>
                        {can.viewAny &&

                            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                            >
                                                Donor
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {users.data.map((person) => (
                                            <tr key={person.email}>
                                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                                    {person.name}
                                                    <dl className="font-normal lg:hidden">
                                                        <dt className="sr-only">Title</dt>
                                                        <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                                                        <dt className="sr-only sm:hidden">Email</dt>
                                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                                                    </dl>
                                                </td>
                                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
                                                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell truncate max-w-sm">
                                                    {person.donors ? person.donors.map((donor, index) =>
                                                        <span className="text-gray-700 mx-2" key={index} >{donor.name}</span>
                                                    ) : null}</td>
                                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    {person.can.view &&
                                                        <Link href={route('users.show', person.id)} className="btn btn-indigo mr-1">
                                                            <LinkIcon className="btn-icon" aria-hidden="true" />
                                                            View<span className="sr-only">, {person.name}</span>
                                                        </Link>
                                                    }
                                                    <Link href={route('users.edit', person.id)} className="btn btn-indigo mr-1">
                                                        <PencilIcon className="btn-icon" aria-hidden="true" />
                                                        Edit<span className="sr-only">, {person.name}</span>
                                                    </Link>
                                                    <Link as="button" method="DELETE" href={route('users.destroy', person.id)} className="btn btn-danger">
                                                        <TrashIcon className="btn-icon" aria-hidden="true" />
                                                        Delete<span className="sr-only">, {person.name}</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination meta={users.meta} links={users.links} />
                            </div>
                        }
                    </div>
                )
            }
        </>
    )
}
