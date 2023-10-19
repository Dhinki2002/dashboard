import { useState, useCallback } from "react";
import InterviewPopup from "./InterviewPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./StartInterviewPopup.css";

const StartInterviewPopup = ({ onClose }) => {
  const [isInterviewPopupOpen, setInterviewPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  const openInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(true);
  }, []);

  const closeInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(false);
  }, []);

  return (
    <>
      <div className="startinterviewpopup">
        <button className="basilcross-outline11" onClick={onClose}>
          <img className="vector-icon33" alt="" src="/vector3.svg" />
        </button>
        <div className="frame-parent220">
          <div className="frame-parent221">
            <div className="frame-parent221">
              <img
                className="company-logo-icon29"
                alt=""
                src="/company-logo1.svg"
              />
              <div className="sde-1-interview-parent22">
                <div className="sde-1-interview23">SDE-1 Interview</div>
                <div className="saturday-august-29-group">
                  <div className="sde-1-interview24">Saturday, August 29</div>
                  <div className="sde-1-interview24">02:00 pm-3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="frame-parent222">
              <div className="sde-1-interview-parent22">
                <div className="dos-group">
                  <button className="dos1">Do’s</button>
                  <button className="dos1">Don’ts</button>
                </div>
                <img className="frame-child169" alt="" src="/group-5911.svg" />
              </div>
              <div className="dress-professionally-to-make-a-container">
                <div className="dress-professionally-to-container1">
                  <ul className="dress-professionally-to-make-a1">
                    <li className="dress-professionally-to2">
                      Dress professionally to make a positive first impression.
                    </li>
                    <li className="dress-professionally-to2">
                      Dress professionally to make a positive first impression.
                    </li>
                    <li>
                      Dress professionally to make a positive first impression.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent224">
            <button className="start-now-group" onClick={onFrameButtonClick}>
              <div className="start-now1">Start Now</div>
              <img
                className="solarplay-bold-icon2"
                alt=""
                src="/solarplaybold.svg"
              />
            </button>
            <button
              className="reschedule-container"
              onClick={openInterviewPopup}
            >
              <div className="reschedule1">Reschedule</div>
            </button>
            <button className="cancel-frame" onClick={onClose}>
              <div className="cancel2">Cancel</div>
            </button>
          </div>
        </div>
      </div>
      {isInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInterviewPopup}
        >
          <InterviewPopup onClose={closeInterviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StartInterviewPopup;
