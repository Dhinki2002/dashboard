import React from 'react'
// import "./GrowthAnalysis2.css"
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
   
    <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.6vw] h-[18.12vw] overflow-hidden shrink-0 text-[length:var(--font-size-5xl)]">
            <div className="absolute top-[-0.4vw] tracking-[-0.02em] leading-[2.78vw] font-[bold] mt-[1.7vw] left-[1.32vw]">Practice Tests</div>
            <div className="absolute w-[22.16vw] h-[15.26vw] text-right text-[length:var(--font-size-3xs-1)] text-[color:var(--black)] mt-[2vw] left-[1.19vw] top-[3.54vw]">
              <Line data={data} options={options} />
              </div>
          </div>
  )
}

export default GrowthAnalysis2