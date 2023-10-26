import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TestScreenCode.css";
import { Helmet } from "react-helmet";

const TestScreenCode = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  return (
    <div className="test-screen-code">
      <Helmet>
      <title>Test Screen</title>
      <meta name="desc"
        content="Test Screen"/>
      </Helmet>
      <div className="frame-parent254">
        <div className="frame-parent255">
          <div className="statement-container">
            <div className="code-snippet">Statement</div>
          </div>
          <div className="code-snippet">Help</div>
        </div>
        <div className="frame-parent256">
          <div className="frame-parent257">
            <div className="code-snippet-parent">
              <div className="code-snippet">Code Snippet</div>
              <div className="time-spent-parent">
                <div className="code-snippet">Time spent:</div>
                <div className="div187">02:20:22</div>
              </div>
            </div>
            <div className="frame-parent258">
              <select className="frame-child189" />
              <div className="icoutline-refresh-parent">
                <button className="icoutline-refresh">
                  <img className="vector-icon40" alt="" src="/vector26.svg" />
                </button>
                <button className="icoutline-refresh">
                  <img className="vector-icon41" alt="" src="/vector27.svg" />
                </button>
              </div>
            </div>
            <div className="write-your-code-here-wrapper">
              <div className="write-your-code">#1 Write your code here</div>
            </div>
            <div className="test-cases-parent">
              <div className="code-snippet">Test cases</div>
              <div className="sub-task-parent">
                <div className="sub-task">Sub-Task</div>
                <div className="div188">
                  <p className="p">1</p>
                  <p className="p">2</p>
                  <p className="p">3</p>
                  <p className="p">4</p>
                  <p className="p">5</p>
                </div>
                <div className="div189">
                  <p className="p">1</p>
                  <p className="p">2</p>
                  <p className="p">3</p>
                  <p className="p">4</p>
                  <p className="p">5</p>
                </div>
                <div className="task">Task</div>
                <div className="result">Result</div>
                <div className="line-parent12">
                  <div className="frame-child190" />
                  <div className="frame-child190" />
                </div>
              </div>
            </div>
          </div>
          <button className="frame-parent259">
            <div className="run-code-wrapper">
              <div className="run-code">Run code</div>
            </div>
            <button className="next-container" onClick={onFrameButton1Click}>
              <div className="next1">Next</div>
            </button>
          </button>
        </div>
        <div className="q1-problem-statement1">Q.1 Problem statement</div>
      </div>
      <img className="test-screen-code-child" alt="" src="/group-577.svg" />
      <div className="frame-parent260">
        <div className="frame-wrapper98">
          <div className="statement-container">
            <div className="hi-priyanshu1">Hi Priyanshu,</div>
            <div className="welcome-to-fulcrum1">Welcome to Fulcrum!</div>
          </div>
        </div>
        <div className="frame-parent261">
          <div className="oouinext-ltr-container">
            <img className="oouinext-ltr-icon4" alt="" src="/oouinextltr.svg" />
            <div className="code-snippet">Prev problem</div>
          </div>
          <div className="frame-parent262">
            <div className="frame-child192" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
            <div className="frame-child193" />
          </div>
          <button className="next-problem-group" onClick={onFrameButton2Click}>
            <div className="next-problem1">Next problem</div>
            <img
              className="oouinext-ltr-icon4"
              alt=""
              src="/oouinextltr2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreenCode;
