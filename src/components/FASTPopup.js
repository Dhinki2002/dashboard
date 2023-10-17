import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FASTPopup.css";

const FASTPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFASTPopupClick = useCallback(() => {
    navigate("/go-score-dashboardindividual");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  return (
    <div className="fastpopup" onClick={onFASTPopupClick}>
      <div className="fulcrum-assessment-test-parent">
        <div className="fulcrum-assessment-test">Fulcrum Assessment Test</div>
        <div className="frame-parent234">
          <div className="frame-parent235">
            <div className="frame-parent236">
              <div className="instructions-parent">
                <button className="instructions">Instructions</button>
                <button className="instructions">Tips</button>
              </div>
              <img className="frame-child176" alt="" src="/group-587.svg" />
            </div>
            <div className="please-ensure-that-container">
              <ul className="please-ensure-that-you-have-a">
                <li className="please-ensure-that">
                  Please ensure that you have a good and fast internet
                  connection
                </li>
                <li className="please-ensure-that">
                  This test is best taken on a laptop or PC.
                </li>
                <li className="please-ensure-that">Enable screensharing</li>
                <li>Give access to mic</li>
              </ul>
            </div>
          </div>
          <div className="frame-parent237">
            <div className="rectangle-parent5">
              <input className="rectangle-input" type="checkbox" />
              <a className="i-agree-to-container" target="_blank">
                <span>{`I agree to the `}</span>
                <span className="terms-and-conditions">
                  terms and conditions
                </span>
              </a>
            </div>
            <button
              className="start-now-container"
              onClick={onFrameButtonClick}
            >
              <div className="start-now2">Start Now</div>
              <img
                className="solarplay-bold-icon4"
                alt=""
                src="/solarplaybold2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <button className="basilcross-outline14" onClick={onClose}>
        <img className="vector-icon37" alt="" src="/vector25.svg" />
      </button>
    </div>
  );
};

export default FASTPopup;
