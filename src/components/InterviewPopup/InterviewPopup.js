import { useState, useCallback } from "react";
import ScheduledSuccessfullyPopup from "../ScheduledSuccessfullyPopup/ScheduledSuccessfullyPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import "./InterviewPopup.css";

const InterviewPopup = ({ onClose }) => {
  const [isScheduledSuccessfullyPopupOpen, setScheduledSuccessfullyPopupOpen] =
    useState(false);

  const openScheduledSuccessfullyPopup = useCallback(() => {
    setScheduledSuccessfullyPopupOpen(true);
  }, []);

  const closeScheduledSuccessfullyPopup = useCallback(() => {
    setScheduledSuccessfullyPopupOpen(false);
  }, []);

  return (
    <>
      <div className="interviewpopup">
        <div className="frame-parent215">
          <div className="frame-parent216">
            <div className="schedule-an-interview-parent">
              <div className="schedule-an-interview">Schedule an Interview</div>
              <div className="fill-in-the1">
                Fill in the details to schedule your interview
              </div>
            </div>
            <div className="frame-parent217">
              <div className="frame-parent218">
                <div className="job-profile-group">
                  <div className="select-interview-date">Job Profile</div>
                  <input
                    className="frame-child165"
                    placeholder="Enter the job"
                    type="text"
                  />
                </div>
                <div className="job-profile-group">
                  <div className="select-interview-date">Dream company</div>
                  <input
                    className="frame-child165"
                    placeholder="Enter your dream company"
                    type="text"
                  />
                </div>
              </div>
              <div className="frame-parent218">
                <div className="job-profile-group">
                  <div className="select-interview-date">
                    Select interview date
                  </div>
                  <input
                    className="frame-child167"
                    placeholder="Select date"
                    type="date"
                  />
                </div>
                <div className="job-profile-group">
                  <div className="select-interview-date">
                    Select interview time
                  </div>
                  <input
                    className="frame-child167"
                    placeholder="Select time"
                    type="time"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="frame-wrapper88">
            <div
              className="schedule-interview-parent"
              onClick={openScheduledSuccessfullyPopup}
            >
              <div className="schedule-interview3">Schedule Interview</div>
              <img
                className="solarplay-bold-icon1"
                alt=""
                src="/solarplaybold1.svg"
              />
            </div>
          </button>
        </div>
        <button className="basilcross-outline10" onClick={onClose}>
          <img className="vector-icon32" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isScheduledSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduledSuccessfullyPopup}
        >
          <ScheduledSuccessfullyPopup
            onClose={closeScheduledSuccessfullyPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewPopup;