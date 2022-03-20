import MyComboBox from "@/Shared/ComboBox";
import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Edit() {
    const { errors, categories, item } = usePage().props
    const [selectedCategory, setSelectedCategory] = useState()
    const [values, setValues] = useState({
        campaign_name: "",
        target: 1000,
        description: "",
        category_id: 0,
    })

    useEffect(() => {
        if (item.data) {
            setValues({
                campaign_name: item.data.name,
                target: item.data.target,
                description: item.data.description,
                category_id: item.data.category_id,
            })

            categories.data.filter((category) => {
                if (category.id === parseInt(item.data.category_id)) {
                    setSelectedCategory(category);
                }
            })
        }
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            setValues({ ...values, category_id: selectedCategory.id });
        }
    }, [selectedCategory])

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
        Inertia.patch(`/campaigns/${item.data.id}`, values)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit: {item.data.name}</h3>
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
                                Category
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
                    <FormCancelButton href={route('campaigns.index')} />
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
