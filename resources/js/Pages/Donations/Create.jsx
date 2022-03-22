import AlertError from "@/Shared/AlertError";
import MyComboBox from "@/Shared/ComboBox";
import FormCancelButton from "@/Shared/FormCancelButton";
import FormSubmitButton from "@/Shared/FormSubmitButton";
import SearchInput from "@/Shared/SearchInput";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import DonorsTable from "../Donors/DonorsTable";
import FormSteps from "./FormSteps";
import SelectCampaignTable from "./SelectCampaignTable";
import SelectDonorTable from "./SelectDonorTable";

export default function Create() {
    const { errors, donors, campaigns, selected_campaign_id } = usePage().props
    const [selectedCampaign, setSelectedCampaign] = useState()
    const [searchCampaign, setSearchCampaign] = useState('init')
    const [searchDonor, setSearchDonor] = useState('init')
    const [selectedDonor, setSelectedDonor] = useState()
    const [values, setValues] = useState({
        donor_id: "",
        description: "",
        campaign_id: 0,
        donor_id: 0,
        amount: null,
    })

    const [currentStep, setCurrentStep] = useState('01');

    useEffect(() => {
        if (selected_campaign_id) {
            campaigns.data.filter((item) => {
                if (item.id === parseInt(selected_campaign_id)) {
                    setSelectedCampaign(item);
                }
            })
        }
    }, []) // todo add selected_campaign_id

    useEffect(() => {
        if (selectedCampaign) {
            setValues({ ...values, campaign_id: selectedCampaign });
        }
    }, [selectedCampaign])

    useEffect(() => {
        if(searchDonor=='init') {
            setSearchDonor('');
        }
        else {
            Inertia.reload({
                data:{donor_search:searchDonor},
                preserveState:true,
            })
        }
    }, [searchDonor])

    useEffect(() => {

        if(errors && (errors.description || errors.amount)) {
            setCurrentStep('01')
        }
        else if(errors && errors.donor_id) {
            setCurrentStep('02')
        }
        else if(errors && errors.campaign_id) {
            setCurrentStep('03')
        }
    },[errors])

    useEffect(() => {
        if(searchCampaign=='init') {
            setSearchCampaign('');
        }
        else {
            Inertia.reload({
                data:{campaign_search:searchCampaign},
                preserveState:true,
            })
        }
    }, [searchCampaign])

    useEffect(() => {
        if (selectedDonor) {
            setValues({ ...values, donor_id: selectedDonor });
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
                <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
                {currentStep === '01' &&
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


                    </div>
                }

                {currentStep === '02' &&
                    <div className="mt-8">
                        <h1 className="text-xl font-semibold text-gray-900">Select the donor</h1>
                        {errors.donor_id && <AlertError message={errors.donor_id} />}
                        <SearchInput setQuery={setSearchDonor} query={searchDonor} />
                        <div className="h-2"></div>
                        <SelectDonorTable donors={donors} setSelectedDonor={setSelectedDonor} />
                    </div>
                }
                {currentStep === '03' &&
                    <div className="mt-8">
                        <h1 className="text-xl font-semibold text-gray-900">Select the Campaign</h1>
                        {errors.campaign_id && <AlertError message={errors.campaign_id} />}
                        <SearchInput setQuery={setSearchCampaign} query={searchCampaign} />
                        <div className="h-2"></div>
                        <SelectCampaignTable campaigns={campaigns} setSelectedCampaign={setSelectedCampaign} />
                    </div>
                }
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
