
import EmptyIndex from "@/Shared/EmptyIndex";
import { usePage } from "@inertiajs/inertia-react"
import DonorsTable from "./DonorsTable";

export default function Index() {
    const { donors } = usePage().props;
    return (
        <>
            {donors.data.length === 0 ? (
                <EmptyIndex signular="donor" plural="donors" routeName="donors.create" />
            )
                : (
                    <div className="">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Donors</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the donors in your account including their name, title, email and role.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Add donor
                                </button>
                            </div>
                        </div>
                        <DonorsTable donors={donors} />
                    </div>
                )
            }
        </>
    )
}
