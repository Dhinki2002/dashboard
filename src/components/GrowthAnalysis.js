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
        data: [65, 59, 80, 81, 56,88,26,76,10,100,],
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
   
    <div className='root-div'>
    <div className="graph-chart-container">
          <div className="growth-analysis">Growth Analysis</div>
            {/* <div className="number3">
              <div className="parent25">
                <div className="div162">100</div>
                <div className="div163">80</div>
                <div className="div163">60</div>
                <div className="div163">40</div>
                <div className="div163">20</div>
                <div className="div167">0</div>
              </div>
            </div>
            <div className="line-parent10">
              <img className="line-icon3" alt="" src="/line3.svg" />
              <img className="vector-icon29" alt="" src="/vector22.svg" />
              <img className="vector-icon30" alt="" src="/vector23.svg" />
              <img className="elipes-icon3" alt="" src="/elipes3.svg" />
              <div className="tool-tip3">
                <img className="union-icon3" alt="" src="/union3.svg" />
                <div className="marks-parent1">
                  <div className="marks3">Marks</div>
                  <div className="div168">67</div>
                </div>
              </div>
              <div className="frame-child160" />
            </div>
            <div className="feb-21-parent1">
              <div className="feb-2112">Feb 21</div>
              <div className="feb-2112">Feb 22</div>
              <div className="feb-2112">Feb 23</div>
              <div className="feb-2112">Feb 21</div>
              <div className="feb-2112">Feb 21</div>
              <div className="feb-2112">Feb 21</div>
              <div className="feb-2112">Feb 21</div>
              <div className="feb-2112">Feb 21</div>
            </div> */}
           
            <Line data={data} options={options} />
          </div>
          </div>
          
    
  )
}

export default GrowthAnalysis