import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TestScreenObjective.css";
import { Helmet } from "react-helmet";
import Objective from "../../components/Objective/Objective";

const TestScreenObjective = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('statement');

  const onFrameButton1Click = useCallback(() => {
    navigate("/test-summary");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);
  const [currentStep, setCurrentStep] = useState(0);

  const onPrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNextClick = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };
  const [timeRemaining, setTimeRemaining] = useState(10800); // 3 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          // Timer has reached 0
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="test-screen-objective">
      <Helmet>
        <title>Test Screen</title>
        <meta name="desc"
          content="Test Screen" />
      </Helmet>
      <div className="frame-parent246">
        <div className="frame-parent247">
          <button
            className={`tab-button ${activeTab === 'statement' ? 'active' : ''}`}
            onClick={() => setActiveTab('statement')}
          >
            <div className="statement">Statement</div>
          </button>
          <button
            className={`tab-button ${activeTab === 'help' ? 'active' : ''}`}
            onClick={() => setActiveTab('help')}
          >
            <div className="help">Help</div>
          </button>
          {activeTab === 'statement' && (

            <div className="q1-problem-statement">"The problem statement"</div>

          )}
          {activeTab === 'help' && (

            <div className="q1-problem-statement">"I am here for tips to be given"</div>

          )}

        </div>

        <Objective/>
        <div className="left-wrapper">
        <div className="multiple-choice-questions">
          Multiple choice questions
        </div>
        </div>
        <div className="time-remaining-parent">
          <div className="multiple-choice-questions">Time remaining:</div>
          <div className="div186">{formatTime(timeRemaining)}</div>
        </div>

      </div>
      {/* <img
        className="test-screen-objective-child"
        alt=""
        src="/group-577.svg"
      /> */}
      <div className="frame-parent251">
        <div className="frame-wrapper97">
          <div className="hi-priyanshu-parent">
            <div className="hi-priyanshu">Hi Priyanshu,</div>
            <div className="welcome-to-fulcrum">Welcome to Fulcrum!</div>
          </div>
        </div>
        <div className="frame-parent252">
          <div className="oouinext-ltr-group" onClick={onPrevClick}>
            <img className="oouinext-ltr-icon2" alt="" src="/oouinextltr.svg" />
            <div className="multiple-choice-questions">Prev problem</div>
          </div>
          <div className="frame-parent253">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`progress-bar ${index <= currentStep ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="next-problem-parent" onClick={onNextClick}>
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
