import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default function BarChart() {

       const data = {
         labels: ['Case on Hold', 'Submitted', 'In Production', 'Shipped'],
         datasets: [
           {
             label: '# of Votes',
             data: [12, 19, 3, 5],
             backgroundColor: ['#F2CC59', '#BA68C8', '#407BFF', '#E6E5E6'],
             borderColor: ['#F2CC59', '#BA68C8', '#407BFF', '#E6E5E6'],
             borderWidth: 1,
           },
         ],
         options: {
           scales: {
             y: {
               beginAtZero: true,
             },
           },
         },
       };
  return (
    <div>
      <div>Chart</div>
      <Bar data={data} />
    </div>
  );
}
