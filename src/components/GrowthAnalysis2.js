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
    
      // Customize chart options (optional)
      const options = {
        scales: {
          ticks: {display: false,maxTicksLimit:5, },
          y: {
            display:false,
            beginAtZero: true,
          },
        },
        legend: {
          display: false, // Set this to false to hide the legend
        },
      };
  return (
   
    <div className="practice-tests-parent">
            <div className="my-go-score">Practice Tests</div>
            {/* <div className="number-container">
              <div className="number2">
                <div className="parent20">
                  <div className="div122">80</div>
                  <div className="div122">60</div>
                  <div className="div122">40</div>
                  <div className="div122">20</div>
                  <div className="div126">0</div>
                </div>
              </div>
              <div className="line-parent8">
                <img className="line-icon2" alt="" src="/line2.svg" />
                <img className="vector-icon21" alt="" src="/vector17.svg" />
                <img className="vector-icon22" alt="" src="/vector18.svg" />
                <img className="elipes-icon2" alt="" src="/elipes2.svg" />
                <div className="tool-tip2">
                  <img className="union-icon2" alt="" src="/union2.svg" />
                  <div className="marks-container">
                    <div className="marks2">Marks</div>
                    <div className="div127">67</div>
                  </div>
                </div>
                <div className="frame-child127" />
              </div>
              <div className="feb-21-container">
                <div className="feb-219">Feb 21</div>
                <div className="feb-219">Feb 22</div>
                <div className="feb-219">Feb 23</div>
                <div className="feb-219">Feb 21</div>
                <div className="feb-219">Feb 21</div>
              </div>
            </div> */}
            <div className="number-container">
              <Line data={data} options={options} />
              </div>
          </div>
  )
}

export default GrowthAnalysis2