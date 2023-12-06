// import "./MyGoScore.css";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const MyGoScore = () => {
  const progress = 75;
  
  return (
    <div className="relative bg-[#605bff] w-[24.34vw] h-[17.46vw] overflow-hidden shrink-0 text-left text-[1.59vw] text-white rounded-[1.06vw] ">
      <div className="absolute tracking-[-0.02em] leading-[2.78vw] left-[1.32vw] top-[1.32vw]">My Go Score</div>
      <div className="absolute w-[9.45vw] h-[9.39vw] left-[2.38vw] top-[5.69vw]">
      <div style={{ width: '9.45vw' }}>
      <CircularProgressbar
        strokeWidth={20}
        value={progress}
        text={`${progress}`}
        styles={buildStyles({
          
          pathColor: `#ffffff`,
          textColor: '#ffffff',
          trailColor: '#807CFF',
         
          strokeLinecap: 'butt',
        })}
        
      />
    </div>
      </div>
      <div className="flex items-start justify-start gap-[0.07vw] font-[bold] absolute flex-row gap-[0.53vw] text-[1.06vw] left-[13.36vw] top-[6.15vw]">
        <div className="flex flex-col items-start justify-start gap-[0.07vw] font-[bold]  font-[normal]  ">
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Accuracy:</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Completion:</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">Consistency:</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.07vw] font-[bold]  font-[normal]  1">
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">60%</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">43%</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw]">65%</div>
        </div>
      </div>
    </div>
  );
};

export default MyGoScore;
