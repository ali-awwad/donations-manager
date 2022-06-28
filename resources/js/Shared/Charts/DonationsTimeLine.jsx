import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Donations timeline',
        },
    },
};

export function DonationsTimeLine() {
    const { donationsData } = usePage().props;
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const [tabs, setTabs] = useState([]);
    useEffect(() => {
        if (donationsData && donationsData.all && donationsData.all.length > 0) {
            updateLabels();
        }
    }, []);

    function updateLabels(year=null) {
        let currentLoopedYear = 0;
        let newTabs = tabs.length ? tabs : donationsData.all;
            const updatedTabs = newTabs.map((record) => {
                if (currentLoopedYear != record.year) {
                    currentLoopedYear = record.year;
                    return { year: record.year, current: year==record.year ? true : false };
                }
            })
            const finalTabs = updatedTabs.filter(tab => tab);
            if(!tabs.length) {
                setTabs((prev) => [...[{ year: 'Max', current: year ? false : true }], ...finalTabs]);
            }
            else {
                setTabs(finalTabs);
            }
    }

    const data = {
        labels: donationsData.all.map((record) => record.month + '-' + record.year),
        datasets: [
            {
                fill: true,
                label: donationsData.label,
                data: donationsData.all.map((record) => record.data),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            //   {
            //     fill: true,
            //     label: 'My Donations',
            //     data: donationsData.currentUserDonors.map((record)=> record.data),
            //     borderColor: 'rgb(255, 153, 0)',
            //     backgroundColor: 'rgba(255, 153, 0, 0.9)',
            //   },
        ],
    };

    function handleYearSelection(e) {
        Inertia.get(route(route().current(), route().params), { year: e.target ? e.target.value : e }, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
            onFinish:() => updateLabels(e.target ? e.target.value : e)
        });
    }

    return (
        <div>
            {tabs.length && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            Select a tab
                        </label>
                        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            defaultValue={tabs.find((tab) => tab.current).year}
                            onChange={handleYearSelection}
                        >
                            {tabs.map((tab) => (
                                <option key={tab.year}>{tab.year}</option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <nav className="flex space-x-4" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <button
                                    onClick={() => handleYearSelection(tab.year)}
                                    key={tab.year}
                                    className={classNames(
                                        tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                                        'px-3 py-2 font-medium text-sm rounded-md'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.year}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
            <Line options={options} data={data} />
        </div>
    )
}
