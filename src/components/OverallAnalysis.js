import "./OverallAnalysis.css";
import { Radar } from 'react-chartjs-2';

const OverallAnalysis = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
       
        backgroundColor: 'rgba(96, 91, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 1)',
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
        data: [100, 100, 100, 100, 100],

      },
      {
       
        backgroundColor: 'rgba(96, 91, 255, 0.6)',
        borderColor: 'rgba(96, 91, 255, 0.9)',
        pointBackgroundColor: 'rgba(96, 91, 255, 0.9)',
        pointBorderColor: 'rgba(96, 91, 255, 0.9)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(96, 91, 255, 0.9)',
        data: [65, 59, 90, 81, 56],
      },
    ],
  };

  const options = {

    scale: {
      
      ticks: {display: false,maxTicksLimit:9, },
      gridLines:{
        lineWidth:2,
        color: 'rgba(96, 91, 255, 0.4)',
      },
      radius:40,
      pointLabels: {
        fontSize: 14, // Adjust the font size as needed
        
      },
      angleLines:{
        lineWidth:1,
        color:'rgba(96, 91, 255, 0.5)',
      },
    },
    legend: {
      display: false, // Set this to false to hide the legend
    },
    
  };
  return (
    <div className="parent2">
      {/* <div className="div20">
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="numbers">
          <div className="div21">35</div>
          <div className="div21">30</div>
          <div className="div21">25</div>
          <div className="div21">20</div>
          <div className="div21">15</div>
          <div className="div21">10</div>
          <div className="div21">5</div>
        </div>
        <img className="radar-data-icon" alt="" src="/radar-data.svg" />
        <img className="points-icon" alt="" src="/points.svg" />
        <div className="text2">
          <div className="div28">类别名</div>
          <div className="div29">类别名</div>
          <div className="div30">类别名</div>
          <div className="div31">类别名</div>
          <div className="div32">类别名</div>
        </div>
      </div>
      <div className="overall-analysis">Overall Analysis</div>
      <div className="consistency-parent">
        <div className="consistency">Consistency</div>
        <div className="time-management">Time Management</div>
        <div className="communication">Communication</div>
        <div className="confidence">Confidence</div>
        <div className="knowledge">Knowledge</div>
      </div> */}
      <div className="pentagon-chart-container">
        <div className="overall-analysis ">Overall Analysis</div>
      
      <Radar data={data} options={options}/>
    
      </div>
    </div>
  );
};

export default OverallAnalysis;
