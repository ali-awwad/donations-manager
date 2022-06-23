import Forbidden from "@/Shared/Errors/Forbidden";
import Table from "@/Shared/Table/Table";
import { Link, usePage } from "@inertiajs/inertia-react"
import { useState } from "react";

export default function Users() {
    const { count, can } = usePage().props;
    const [selectedItems, setSelectedItems] = useState([])
    return (
        <div className="">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                {can.create &&
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            href={route('users.create')}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add user
                        </Link>
                    </div>
                }
            </div>
            {can.viewAny ?
                (
                    <>
                        {count > 0 && <Table baseRoute="users" selectedItems={selectedItems} setSelectedItems={setSelectedItems} />}
                        {count === 0 && <EmptyIndex signular="user" plural="users" routeName="users.create" />}
                    </>
                )
                :
                (<Forbidden />)
            }
        </div>

    )
}
