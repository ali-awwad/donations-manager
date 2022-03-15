import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2'
import { usePage } from '@inertiajs/inertia-react';
import { DonationsPerCampaignChart } from '@/Shared/DonationsPerCampaignChart';
import DonationsCompletion from '@/Shared/DonationsCompletion';
import StartingPoint from '@/Shared/StartingPoint';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
    const { categories, campaigns, campaigns_completion } = usePage().props;
    const data = {
        labels: categories.labels,
        datasets: [
            {
                label: '# of Votes',
                data: categories.values,
                backgroundColor: categories.colors,
                borderColor: categories.colors,
                borderWidth: 1,
            },
        ],
    }

    return (
        <div>
            <StartingPoint />
            <div className="my-4">
                <DonationsCompletion data={campaigns_completion}  />
            </div>
            <div className="mt-10 flex flex-wrap">
                <div className="w-full lg:w-1/4">
                    <div className="max-w-md">
                        <h3 className='text-xl text-center text-indigo-500'>Campains per Category Share</h3>
                        <Doughnut data={data} />
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="">
                        <h3 className='text-xl text-center text-indigo-500'>Donations per Campaign</h3>
                        <DonationsPerCampaignChart labels={campaigns.labels} dsData={campaigns.values} />
                    </div>
                </div>
            </div>

        </div>
    )
}
