import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./TestSummary.css";
import MyGoScore from "../components/MyGoScore";
import { TopicWiseAnalysis } from "../components/TopicWiseAnalysis";

const TestSummary = () => {
  return (
    <div className="test-summary">
      <Navbar />
      <Header />
      <div className="test-summary-inner">
        <div className="amazon-test-wrapper">
          <div className="amazon-test">Amazon Test</div>
        </div>
      </div>
      <div className="parent">
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
        <div className="time-taken-analysis-parent">
          <div className="your-score">Time taken Analysis</div>
          <div className="number-group">
            <div className="number1">
              <div className="parent11">
                <div className="div71">80</div>
                <div className="div71">60</div>
                <div className="div71">40</div>
                <div className="div71">20</div>
                <div className="div75">0</div>
              </div>
            </div>
            <div className="line-parent4">
              <img className="line-icon1" alt="" src="/line1.svg" />
              <img className="vector-icon19" alt="" src="/vector15.svg" />
              <img className="vector-icon20" alt="" src="/vector16.svg" />
              <img className="elipes-icon1" alt="" src="/elipes1.svg" />
              <div className="tool-tip1">
                <img className="union-icon1" alt="" src="/union1.svg" />
                <div className="marks-group">
                  <div className="no-of-correct">Marks</div>
                  <div className="div76">67</div>
                </div>
              </div>
              <div className="frame-child60" />
            </div>
            <div className="feb-21-group">
              <div className="feb-216">Feb 21</div>
              <div className="feb-216">Feb 22</div>
              <div className="feb-216">Feb 23</div>
              <div className="feb-216">Feb 21</div>
              <div className="feb-216">Feb 21</div>
            </div>
          </div>
        </div>
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
