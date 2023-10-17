import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DreamStartTest2Popup.css";

const DreamStartTest2Popup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  return (
    <div className="dreamstarttest2popup">
      <div className="frame-parent241">
        <div className="frame-parent242">
          <div className="some-more-questions-parent">
            <div className="some-more-questions">Some more questions</div>
            <div className="answer-the-following">
              Answer the following to help us setup the test
            </div>
          </div>
          <div className="frame-parent243">
            <div className="frame-parent244">
              <div className="language-parent">
                <div className="language">Language</div>
                <select className="frame-select" />
              </div>
              <div className="language-parent">
                <div className="language">No. of questions</div>
                <input
                  className="frame-child177"
                  placeholder="Enter no. of questions"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-parent244">
              <div className="language-parent">
                <div className="language">Difficulty level</div>
                <select className="frame-select" />
              </div>
              <div className="language-parent">
                <div className="language">Type of questions</div>
                <select className="frame-select" />
              </div>
            </div>
          </div>
        </div>
        <button className="frame-wrapper92" onClick={onFrameButtonClick}>
          <div className="start-test-parent">
            <div className="start-test">Start test</div>
            <img
              className="solarplay-bold-icon5"
              alt=""
              src="/solarplaybold3.svg"
            />
          </div>
        </button>
      </div>
      <button className="basilcross-outline16" onClick={onClose}>
        <img className="vector-icon39" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default DreamStartTest2Popup;
