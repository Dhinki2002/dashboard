import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import "./InteviewTestReport.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import ConfidenceMeter from '../../components/ConfidenceMeter/ConfidenceMeter.js';
import { Helmet } from "react-helmet";


const InteviewTestReport = () => {
  const counter=1;
  return (
    <div className="inteview-test-report">
       <Helmet>
      <title>Test Report</title>
      <meta name="desc"
        content="Test Report"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="inteview-test-report-inner">
        <div className="interviews-parent">
          <div className="interviews1">Interviews</div>
          <div className="div85">/</div>
          <div className="interviews1">Amazon-Report</div>
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