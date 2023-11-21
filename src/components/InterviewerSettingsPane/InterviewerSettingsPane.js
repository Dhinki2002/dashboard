import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import "../SettingsPane/SettingsPane.css"


const InterviewerSettingsPane = ({settingsCounter}) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/Interviewersettings");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/Interviewersettings1");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/Interviewersettings2");
  }, [navigate]);
  return <div className="frame-child250" >
    <div className="frame-parent194">
      <div className="frame-parent195">
          <button className={settingsCounter===0 ? "my-profile-wrapper1": "password-wrapper1"} onClick={onFrameButtonClick}>
            <div className={settingsCounter===0 ? "my-profile6": "password5"}>My Profile</div>
          </button>
            <button className={settingsCounter===1 ? "my-profile-wrapper1": "password-wrapper1"} onClick={onFrameButton1Click}>
              <div className={settingsCounter===1 ? "my-profile6": "password5"}>Password</div>
            </button>
            <button className={settingsCounter===2 ? "my-profile-wrapper1": "password-wrapper1"} onClick={onFrameButton2Click}>
              <div className={settingsCounter===2 ? "my-profile6": "password5"}>Billing</div>
            </button>
          </div>
        </div>
    </div>;
};

export default InterviewerSettingsPane;
