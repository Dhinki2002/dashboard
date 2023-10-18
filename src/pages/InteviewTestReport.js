import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./InteviewTestReport.css";
import MyGoScore from "../components/MyGoScore";
import { TopicWiseAnalysis } from "../components/TopicWiseAnalysis";
import ConfidenceMeter from "../components/ConfidenceMeter";


const InteviewTestReport = () => {
  const counter=1;
  return (
    <div className="inteview-test-report">
      <Navbar counter={counter}/>
      <Header />
      <div className="inteview-test-report-inner">
        <div className="interviews-parent">
          <div className="interviews">Interviews</div>
          <div className="div85">/</div>
          <div className="interviews">Amazon-Report</div>
        </div>
      </div>
      <div className="remarks-group">
        <div className="my-interview-score">Remarks</div>
        <div className="frame-parent135">
          <div className="frame-wrapper61">
            <div className="technical-proficiency-container">
              <div className="interviews">Overall Impression:</div>
              <div className="they-were-able4">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="frame-wrapper61">
            <div className="technical-proficiency-container">
              <div className="interviews">Technical Proficiency:</div>
              <div className="they-were-able4">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="frame-wrapper61">
            <div className="technical-proficiency-container">
              <div className="interviews">Problem-Solving Skills:</div>
              <div className="they-were-able4">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="frame-wrapper61">
            <div className="technical-proficiency-container">
              <div className="interviews">Technical Proficiency:</div>
              <div className="they-were-able4">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent136">
        <div className="frame-parent137">
          <MyGoScore/>
          <ConfidenceMeter/>
        </div>
     <div className="frame-parent141">
        <TopicWiseAnalysis/>
        </div>
      </div>
    </div>
  );
};

export default InteviewTestReport;
