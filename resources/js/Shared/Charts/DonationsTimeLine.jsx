import React from 'react';
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
import { usePage } from '@inertiajs/inertia-react';

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
    const {donationsData } = usePage().props;
    const data = {
        labels: donationsData.all.map((record)=> record.month + '-' + record.year),
        datasets: [
          {
            fill: true,
            label: 'Total Donations',
            data: donationsData.all.map((record)=> record.data),
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
  return <Line options={options} data={data} />;
}
