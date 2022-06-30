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

export function CategoryByTargetAndCollected({labels, targetData, collectedData}) {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Categories by Target and Actually Collected',
          },
        },
      };

    const data = {
        labels,
        datasets: [
          {
            label: 'Target',
            data: targetData,
            backgroundColor: '#ef4444',
          },
          {
            label: 'Collected',
            data: collectedData,
            backgroundColor: '#22c55e',
          }
        ],
      };
  return <Bar options={options} data={data} />;
}
