import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function DonationsPerCampaignChart({ labels, dsData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Number of Donations per Campaign',
            },
        },
        scales: {
            x: {
              ticks: {
                callback: function(val, index) {
                  return this.getLabelForValue(val).substring(0,10);
                }
              }
            }
          }
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Donations',
                data: dsData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return <Bar options={options} data={data} />;
}
