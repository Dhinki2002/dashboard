import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import "./TestSummary.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import GrowthAnalysis2 from '../../components/GrowthAnalysis2/GrowthAnalysis2.js';
import { Helmet } from "react-helmet";

const TestSummary = () => {
  const counter =3
  return (
    <div className="test-summary">
      <Helmet>
      <title>Test Summary</title>
      <meta name="desc"
        content="Test Summary"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="test-summary-inner">
        <div className="amazon-test-wrapper">
          <div className="amazon-test">Amazon Test</div>
        </div>
      </div>
     <div className="root">
      <TopicWiseAnalysis/>
      </div>
      <div className="frame-parent82">
        
        <div className="frame-parent86">
         <MyGoScore/>
          <div className="frame-parent89">
            <div className="frame-parent90">
              <div className="no-of-correct-answers-parent">
                <div className="no-of-correct">No. of Correct Answers:</div>
                <div className="div69">28</div>
              </div>
              <div className="no-of-correct-answers-parent">
                <div className="no-of-correct">No. of Questions Attempted:</div>
                <div className="div69">36</div>
              </div>
            </div>
            <div className="view-all">View all</div>
          </div>
        </div>
      </div>
      <div className="frame-parent91">
       
        <GrowthAnalysis2/>
        
        <div className="frame-parent92">
          <div className="strengths-parent">
            <div className="your-score">Strengths</div>
            <div className="coding-languages-data">
              Coding languages, Data structures
            </div>
          </div>
          <div className="strengths-parent">
            <div className="your-score">Weakness</div>
            <div className="coding-languages-data">
              Coding languages, Data structures
            </div>
          </div>
        </div>
        <div className="suggestions-parent">
          <div className="your-score">Suggestions</div>
          <div className="frame-wrapper46">
            <div className="frame-wrapper47">
              <div className="accuracy-group">
                <div className="amazon-test">Accuracy</div>
                <div className="they-were-able">
                  They were able to choose appropriate data structures for
                  various problems and implemented algorithms efficiently.They
                  were able to choose appropriate data structures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSummary;
