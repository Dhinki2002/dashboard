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
        fontSize: 14, 
        
      },
      angleLines:{
        lineWidth:1,
        color:'rgba(96, 91, 255, 0.5)',
      },
    },
    legend: {
      display: false, 
    },
    
  };
  return (
    <div className="parent2">
      <div className="pentagon-chart-container">
        <div className="overall-analysis ">Overall Analysis</div>
      
      <Radar data={data} options={options}/>
    
      </div>
    </div>
  );
};

export default OverallAnalysis;
