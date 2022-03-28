import MyComboBox from "@/Shared/ComboBox";
import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Create() {
    const { errors, users, selected_user_id } = usePage().props
    const [selectedUser, setSelectedUser] = useState()
    const [values, setValues] = useState({
        donor_name: "",
        alias: "",
        remarks: "",
        user_id: null,
    })

    useEffect(() => {
        if (selected_user_id) {
            users.data.filter((item) => {
                if (item.id === parseInt(selected_user_id)) {
                    setSelectedUser(item);
                }
            })
        }
    }, [])

    useEffect(() => {
        if (selectedUser) {
            setValues({ ...values, user_id: selectedUser.id });
        }
    }, [selectedUser])

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/donors', values)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Create Donor</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        In a donor you can set the alias to reach, assign it to a category, then add donations after you create it.
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
                            About
                        </label>
                        <div className="mt-1">
                            <textarea
                                defaultValue={values.remarks} onChange={handleChange}
                                id="remarks"
                                name="remarks"
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"

                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about this donor.</p>
                        {errors.remarks && <p className="mt-2 text-sm text-red-500">{errors.remarks}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="donor_name" className="block text-sm font-medium text-gray-700">
                            Donor Name
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.donor_name} onChange={handleChange}
                                type="text"
                                name="donor_name"
                                id="donor_name"
                                autoComplete="donor_name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.donor_name && <p className="mt-2 text-sm text-red-500">{errors.donor_name}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                            Linked to User (optional)
                        </label>
                        <div className="mt-1">
                            <MyComboBox items={users.data} selectedItem={selectedUser} setSelectedItem={setSelectedUser} />
                        </div>
                        {errors.user_id && <p className="mt-2 text-sm text-red-500">{errors.user_id}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="alias" className="block text-sm font-medium text-gray-700">
                            Alias
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.alias} onChange={handleChange}
                                type="text"
                                name="alias"
                                id="alias"
                                autoComplete="alias"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.alias && <p className="mt-2 text-sm text-red-500">{errors.alias}</p>}
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <FormCancelButton href={route('donors.index')} />
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
