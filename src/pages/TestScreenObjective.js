import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TestScreenObjective.css";
import { Helmet } from "react-helmet";

const TestScreenObjective = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/test-summary");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);

  return (
    <div className="test-screen-objective">
      <Helmet>
      <title>Test Screen</title>
      <meta name="desc"
        content="Test Screen"/>
      </Helmet>
      <div className="frame-parent246">
        <div className="frame-parent247">
          <button className="statement-wrapper">
            <div className="statement">Statement</div>
          </button>
          <button className="help">Help</button>
        </div>
        <div className="frame-parent248">
          <div className="multiple-choice-questions-parent">
            <div className="multiple-choice-questions">
              Multiple choice questions
            </div>
            <div className="q1-select-one-of-the-options-parent">
              <div className="multiple-choice-questions">
                Q.1 Select one of the options from below.
              </div>
              <div className="frame-parent249">
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" />
                    <div className="multiple-choice-questions">Option 1</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" />
                    <div className="multiple-choice-questions">Option 1</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" />
                    <div className="multiple-choice-questions">Option 1</div>
                  </div>
                </div>
                <div className="frame-wrapper93">
                  <div className="ellipse-parent5">
                    <input className="ellipse-input" type="radio" />
                    <div className="multiple-choice-questions">Option 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent250">
            <button className="submit-wrapper" onClick={onFrameButton1Click}>
              <div className="submit">Submit</div>
            </button>
            <button className="next-wrapper" onClick={onFrameButton2Click}>
              <div className="next">Next</div>
            </button>
          </div>
          <div className="time-remaining-parent">
            <div className="multiple-choice-questions">Time remaining:</div>
            <div className="div186">02:20:22</div>
          </div>
        </div>
        <div className="q1-problem-statement">Q.1 Problem statement</div>
      </div>
      <img
        className="test-screen-objective-child"
        alt=""
        src="/group-577.svg"
      />
      <div className="frame-parent251">
        <div className="frame-wrapper97">
          <div className="hi-priyanshu-parent">
            <div className="hi-priyanshu">Hi Priyanshu,</div>
            <div className="welcome-to-fulcrum">Welcome to Fulcrum!</div>
          </div>
        </div>
        <div className="frame-parent252">
          <div className="oouinext-ltr-group">
            <img className="oouinext-ltr-icon2" alt="" src="/oouinextltr.svg" />
            <div className="multiple-choice-questions">Prev problem</div>
          </div>
          <div className="frame-parent253">
            <div className="frame-child183" />
            <div className="frame-child184" />
            <div className="frame-child184" />
            <div className="frame-child184" />
            <div className="frame-child184" />
            <div className="frame-child184" />
          </div>
          <button className="next-problem-parent" onClick={onFrameButton3Click}>
            <div className="next-problem">Next problem</div>
            <img
              className="oouinext-ltr-icon2"
              alt=""
              src="/oouinextltr2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreenObjective;
