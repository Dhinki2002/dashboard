import React from 'react'
import "./GrowthAnalysis2.css"
import { Line } from 'react-chartjs-2';

const GrowthAnalysis2 = () => {
    const data = {
        labels: ['Jan', 'Feb', 'May','Jun','Jul'],
        datasets: [
          {
           
            fill: true,
            lineTension: 0.4,
            backgroundColor: 'rgba(96, 91, 255, 0.2)',
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
            data: [65, 59, 80, 81, 56],
          },
        ],
      };
    
      
      const options = {
        scales: {
          ticks: {display: false,maxTicksLimit:5, },
          y: {
            display:false,
            beginAtZero: true,
          },
        },
        legend: {
          display: false, 
        },
      };
  return (
   
    <div className="practice-tests-parent">
            <div className="my-go-score">Practice Tests</div>
            <div className="number-container">
              <Line data={data} options={options} />
              </div>
          </div>
  )
}

export default GrowthAnalysis2