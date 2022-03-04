import React from 'react'

import {Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



export default function ChartBar() {
  
 const options = {
 
 
     scales: {
       x: {
         stacked: true,
       },
       y: {
         stacked: true,
       },
     },
   
 };




 let data = {
   labels: [' Hold', 'Submitted', 'In Production', 'Shipped'],
   datasets: [
     {
       data: [1],
       backgroundColor: '#F2CC59',
     },
     {
       data: [1],
       backgroundColor: '#BA68C8',
     },
     {
       data: [1],
       backgroundColor: '#407BFF',
     },
   ],
 };
  return (
    <>
      <div>ChartBar</div>
      <Bar data={data} options={options} />
    </>
  );
}
