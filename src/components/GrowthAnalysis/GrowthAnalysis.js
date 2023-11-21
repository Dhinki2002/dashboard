import React from 'react'
import { Line } from 'react-chartjs-2';
import "./GrowthAnalysis.css"
const GrowthAnalysis = () => {
  const data = {
    labels: ['Jan', 'Feb', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
       
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(96 , 91, 255, 0.2)',
        borderColor: 'rgba(96, 91, 255, 0.9)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(96, 91, 255, 0.9)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(96, 91, 255, 0.9)',
        pointHoverBorderColor: 'rgba(96, 91, 255, 0.9)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56,88,26,76,10,100,],
      },
    ],
  };

  
  const options = {
    scales: {
      scales: {
        x: {
          ticks: {
            font: {
              size: '12vw', // Set the desired font size here
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: '12vw', // Set the desired font size here
            },
          },
        },
      },
      ticks: {display: false,maxTicksLimit:5, },
      y: {
        display:false,
        beginAtZero: true,
      },
    },
    legend: {
      display: false, 
    },
    responsive:true,
    
   
   
  };



  return (
   
    <div className='root-div'>
    <div className="graph-chart-container">
          <div className="growth-analysis">Growth Analysis</div>
          
            <Line data={data} options={options} />
          
          </div>
          </div>
          
    
  )
}

export default GrowthAnalysis