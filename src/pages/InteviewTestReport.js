import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./InteviewTestReport.css";

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
          <div className="my-interview-score-parent">
            <div className="my-interview-score">My Interview Score</div>
            <div className="frame-parent138">
              <div />
              <div />
            </div>
            <div className="frame-parent139">
              <div className="ellipse-parent2">
                <div className="frame-child97" />
                <div className="frame-child98" />
                <div className="div86">65</div>
              </div>
              <div className="frame-parent140">
                <div className="accuracy-container">
                  <div className="interviews">Accuracy:</div>
                  <div className="interviews">Completion:</div>
                  <div className="interviews">Consistency:</div>
                </div>
                <div className="accuracy-container">
                  <div className="interviews">60%</div>
                  <div className="interviews">43%</div>
                  <div className="interviews">65%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="confidence-meter-parent">
            <div className="my-interview-score">Confidence Meter</div>
            <div className="mask-group">
              <img className="circle-icon" alt="" src="/circle.svg" />
              <img className="mask-group-child" alt="" src="/ellipse-59.svg" />
              <div className="unit-score-parent">
                <div className="unit-score">Unit Score</div>
                <div className="div90">92</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent141">
          <div className="topic-wise-analysis-container">
            <div className="interviews">Topic-wise Analysis</div>
          </div>
          <div className="frame-parent142">
            <div className="accuracy-container">
              <div className="interviews">#</div>
              <div className="data-structures-group">
                <div className="interviews">01</div>
                <div className="interviews">02</div>
                <div className="interviews">03</div>
                <div className="interviews">05</div>
                <div className="interviews">06</div>
                <div className="interviews">07</div>
              </div>
            </div>
            <div className="accuracy-container">
              <div className="interviews">Topic</div>
              <div className="data-structures-group">
                <div className="interviews">Data Structures</div>
                <div className="interviews">Databases</div>
                <div className="interviews">Testing</div>
                <div className="interviews">Debugging</div>
                <div className="interviews">Coding languages</div>
                <div className="interviews">Source Control</div>
              </div>
            </div>
            <div className="proficiency-group">
              <div className="interviews">Proficiency</div>
              <div className="frame-parent143">
                <div className="rectangle-wrapper12">
                  <div className="frame-child99" />
                </div>
                <div className="rectangle-wrapper12">
                  <div className="frame-child100" />
                </div>
                <div className="rectangle-wrapper12">
                  <div className="frame-child101" />
                </div>
                <div className="rectangle-wrapper12">
                  <div className="frame-child102" />
                </div>
                <div className="rectangle-wrapper12">
                  <div className="frame-child103" />
                </div>
                <div className="rectangle-wrapper12">
                  <div className="frame-child99" />
                </div>
              </div>
            </div>
            <div className="accuracy-container">
              <div className="interviews">Last score</div>
              <div className="data-structures-group">
                <div className="interviews">72</div>
                <div className="interviews">65</div>
                <div className="interviews">22</div>
                <div className="interviews">54</div>
                <div className="interviews">56</div>
                <div className="interviews">32</div>
              </div>
            </div>
          </div>
          <div className="line-parent6">
            <div className="frame-child105" />
            <div className="frame-child105" />
            <div className="frame-child105" />
            <div className="frame-child105" />
            <div className="frame-child105" />
            <div className="frame-child105" />
            <div className="frame-child105" />
          </div>
          <div className="view-more-parent2">
            <div className="interviews">View more</div>
            <img
              className="riarrow-drop-down-line-icon4"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteviewTestReport;
