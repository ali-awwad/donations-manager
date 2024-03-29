import MyComboBox from "@/Shared/ComboBox";
import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Create() {
    const { categories, selected_category_id } = usePage().props
    const [selectedCategory, setSelectedCategory] = useState()
    const { data, setData, post, processing, errors, isDirty } = useForm({
        campaign_name: "",
        target: null,
        description: "",
        category_id: 0,
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
        if (selectedCategory) {
            setData('category_id',selectedCategory.id);
        }
    }, [selectedCategory])

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setData(key,value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        post(route('campaigns.store'), data);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Create Campaign{isDirty && <span className="sup text-red-500">*</span>}</h3>
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
                                defaultValue={data.description} onChange={handleChange}
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
                                defaultValue={data.campaign_name} onChange={handleChange}
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
                                defaultValue={data.target} onChange={handleChange}
                                type="number"
                                min={0}
                                name="target"
                                id="target"
                                placeholder="In Cents, like 100000 is 1000.00 Dollar"
                                autoComplete="target"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.target && <p className="mt-2 text-sm text-red-500">{errors.target}</p>}
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <FormCancelButton href={route('campaigns.index')} />
                    <FormSubmitButton loading={processing} isEdit={false} />
                </div>
            </div>
        </form>
    )
}
