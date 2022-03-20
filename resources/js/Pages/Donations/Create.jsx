import MyComboBox from "@/Shared/ComboBox";
import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Create() {
    const { errors, donors, campaigns, categories, selected_campaign_id } = usePage().props
    const [selectedCampaign, setSelectedCampaign] = useState()
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedDonor, setSelectedDonor] = useState()
    const [values, setValues] = useState({
        donor_id: "",
        description: "",
        campaign_id: 0,
        donor_id: 0,
        amount:null,
    })

    useEffect(() => {
        if (selected_campaign_id) {
            campaigns.data.filter((item) => {
                if (item.id === parseInt(selected_campaign_id)) {
                    setSelectedCampaign(item);
                }
            })
        }
    }, []) // todo add selected_campaign_id§

    useEffect(() => {
        if (selectedCampaign) {
            setValues({ ...values, campaign_id: selectedCampaign.id });
        }
    }, [selectedCampaign])

    useEffect(() => {
        // todo refresh do filter for campaign
    }, [selectedCategory])

    useEffect(() => {
        if (selectedDonor) {
            setValues({ ...values, donor_id: selectedDonor.id });
        }
    }, [selectedDonor])

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
        Inertia.post('/donations', values)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add new Donation</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Its great to make change and leave a good mark.
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
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about this donation.</p>
                        {errors.description && <p className="mt-2 text-sm text-red-500">{errors.description}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="donor_id" className="block text-sm font-medium text-gray-700">
                            Donor
                        </label>
                        <div className="mt-1">
                            <MyComboBox items={donors.data} selectedItem={selectedDonor} setSelectedItem={setSelectedDonor} />
                        </div>
                        {errors.donor_id && <p className="mt-2 text-sm text-red-500">{errors.donor_id}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="target" className="block text-sm font-medium text-gray-700">
                            Amount (in cents or fils)
                        </label>
                        <div className="mt-1">
                            <input
                                defaultValue={values.amount} onChange={handleChange}
                                type="number"
                                placeholder="1000 will be stored as 10.00"
                                min={0}
                                name="amount"
                                id="amount"
                                autoComplete="amount"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.amount && <p className="mt-2 text-sm text-red-500">{errors.amount}</p>}
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <div className="mt-1">
                            <MyComboBox items={categories.data} selectedItem={selectedCategory} setSelectedItem={setSelectedCategory} />
                        </div>
                        {errors.category_id && <p className="mt-2 text-sm text-red-500">{errors.category_id}</p>}
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="campaign_id" className="block text-sm font-medium text-gray-700">
                            Campaign
                        </label>
                        <div className="mt-1">
                            <MyComboBox items={campaigns.data} selectedItem={selectedCampaign} setSelectedItem={setSelectedCampaign} />
                        </div>
                        {errors.campaign_id && <p className="mt-2 text-sm text-red-500">{errors.campaign_id}</p>}
                    </div>

                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <FormCancelButton href={route('donations.index')} />
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}
