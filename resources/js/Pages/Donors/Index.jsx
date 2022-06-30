
import EmptyIndex from "@/Shared/EmptyIndex";
import Forbidden from "@/Shared/Errors/Forbidden";
import Table from "@/Shared/Table/Table";
import { Link, usePage } from "@inertiajs/inertia-react"
import { useState } from "react";
import DonorsTable from "./DonorsTable";

export default function Index() {
    const { count, can } = usePage().props;
    const [selectedItems, setSelectedItems] = useState([])

    return (
        <div className="">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Donors</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the donors in your account including their name, title, email and role.
                    </p>
                </div>
                {can.create &&
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={route('donors.create')}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add Donor
                        </Link>
                        <Link href={route('fixCampaignCategoryCount')}
                            as="button"
                            type="button"
                            onBefore={()=>confirm('you are about to sync campaign and category count to all donors, proceed?')}
                            method="post"
                            className="ml-2 button button-danger"
                        >
                            Sync Count
                        </Link>
                    </div>
                }
            </div>
            {can.viewAny ?
                (
                    <>
                        {count > 0 && <Table baseRoute="donors" selectedItems={selectedItems} setSelectedItems={setSelectedItems} />}
                        {count === 0 && <EmptyIndex signular="donor" plural="donors" routeName="donors.create" />}
                    </>
                )
                :
                (<Forbidden />)
            }
        </div>
    )
}
