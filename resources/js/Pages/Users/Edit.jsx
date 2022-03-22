import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Edit() {
    const { errors, item } = usePage().props
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation:""
    })

    useEffect(() => {
        if (item.data) {
            setValues({
                name: item.data.name,
                email: item.data.email,
            })
        }
    }, [])

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
        Inertia.patch(`/users/${item.data.id}`, values)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{item.data.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Update user data
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">


                    <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.name} onChange={handleChange}
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.email} onChange={handleChange}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.password} onChange={handleChange}
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                            Confirmation
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.password_confirmation} onChange={handleChange}
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                autoComplete="password_confirmation"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.password_confirmation && <p className="mt-2 text-sm text-red-500">{errors.password_confirmation}</p>}
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <FormCancelButton href={route('users.index')} />
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
