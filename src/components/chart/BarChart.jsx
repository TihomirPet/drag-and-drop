import React, { useEffect, useState } from 'react'

import {Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



export default function ChartBar() {

  const[feedback,setFeedback]=useState([])

useEffect(()=>{
  fetchFeedback()
},[])



  const fetchFeedback =async ()=>{


    const response = await fetch('http://localhost:5000/feedback');
    const data =await response.json()
  console.log(data);
    setFeedback(data);

    
  
  }
  
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
   labels: [' Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   datasets: [
     //  {
     //    data: [1],
     //    backgroundColor: '#F2CC59',
     //  },
     //  {
     //    data: [1],
     //    backgroundColor: '#BA68C8',
     //  },
     //  {
     //    data: [1],
     //    backgroundColor: '#407BFF',
     //  },

     { data: feedback.map((item) => item.parent), backgroundColor: '#126799' },
   ],
 };
  return (
    <>
      <div>ChartBar</div>
      <Bar data={data} options={options} />
    </>
  );
}
