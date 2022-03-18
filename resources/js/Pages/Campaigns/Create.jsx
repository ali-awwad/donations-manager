import MyComboBox from "@/Shared/ComboBox";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Create() {
    const { errors, categories, selected_category_id } = usePage().props
    const [selectedCategory, setSelectedCategory] = useState()
    const [values, setValues] = useState({
        campaign_name: "",
        target: 1000,
        description: "",
        category_id:0,
    })

    useEffect(() => {
        if (selected_category_id) {
            categories.data.filter((item) => {
                if (item.id === parseInt(selected_category_id)) {
                    setSelectedCategory(item);
                }
            })
        }
    }, [])

    useEffect(() => {
        if(selectedCategory) {
            setValues({...values,category_id:selectedCategory.id});
        }
    },[selectedCategory])

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
        Inertia.post('/campaigns', values)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Create Campaign</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            In a campaign you can set the target to reach, assign it to a category, then add donations after you create it.
                        </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                About
                            </label>
                            <div className="mt-1">
                                <textarea
                                    defaultValue={values.description} onChange={handleChange}
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"

                                />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Write a few sentences about this campaign.</p>
                            {errors.description && <p className="mt-2 text-sm text-red-500">{errors.description}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="campaign_name" className="block text-sm font-medium text-gray-700">
                                Campaign Name
                            </label>
                            <div className="mt-1">
                                <input
                                    defaultValue={values.campaign_name} onChange={handleChange}
                                    type="text"
                                    name="campaign_name"
                                    id="campaign_name"
                                    autoComplete="campaign_name"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            {errors.campaign_name && <p className="mt-2 text-sm text-red-500">{errors.campaign_name}</p>}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
                                Campaign Name
                            </label>
                            <div className="mt-1">
                                <MyComboBox items={categories.data} selectedItem={selectedCategory} setSelectedItem={setSelectedCategory} />
                            </div>
                            {errors.category_id && <p className="mt-2 text-sm text-red-500">{errors.category_id}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="target" className="block text-sm font-medium text-gray-700">
                                Target
                            </label>
                            <div className="mt-1">
                                <input
                                    defaultValue={values.target} onChange={handleChange}
                                    type="number"
                                    min={0}
                                    name="target"
                                    id="target"
                                    autoComplete="target"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            {errors.target && <p className="mt-2 text-sm text-red-500">{errors.target}</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
