import "./MyGoScore.css";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const MyGoScore = () => {
  const progress = 75;
  
  return (
    <div className="my-go-score-parent">
      <div className="my-go-score1">My Go Score</div>
      <div className="ellipse-group">
      <div style={{ width: '9.45vw' }}>
      <CircularProgressbar
        strokeWidth={20}
        value={progress}
        text={`${progress}`}
        styles={buildStyles({
          // Customize the colors, sizes, and other styles here
          pathColor: `#ffffff`,
          textColor: '#ffffff',
          trailColor: '#807CFF',
         
          strokeLinecap: 'butt',
        })}
        
      />
    </div>
      </div>
      <div className="frame-parent17">
        <div className="accuracy-parent">
          <div className="accuracy">Accuracy:</div>
          <div className="accuracy">Completion:</div>
          <div className="accuracy">Consistency:</div>
        </div>
        <div className="accuracy-parent">
          <div className="accuracy">60%</div>
          <div className="accuracy">43%</div>
          <div className="accuracy">65%</div>
        </div>
      </div>
    </div>
  );
};

export default MyGoScore;
