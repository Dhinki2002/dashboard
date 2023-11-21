import { useState, useCallback } from "react";
import ScheduledSuccessfullyPopup from "../ScheduledSuccessfullyPopup/ScheduledSuccessfullyPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import "./ScheduleInterviewPopup.css";

const ScheduleInterviewPopup = ({ onClose }) => {
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
      <div className="scheduleinterviewpopup">
        <div className="popup">
        <div className="frame-parent230">
          <div className="frame-parent231">
            <div className="schedule-an-interview-group">
              <div className="schedule-an-interview1">
                Schedule an Interview
              </div>
              <div className="fill-in-the3">
                Fill in the details to schedule your interview
              </div>
            </div>
            <div className="frame-wrapper90">
              <div className="frame-parent232">
                <div className="select-interview-date-container">
                  <div className="select-interview-date2">
                    Select interview date
                  </div>
                  <input
                    className="frame-child174"
                    placeholder="Select date"
                    type="date"
                  />
                </div>
                <div className="select-interview-date-container">
                  <div className="select-interview-date2">
                    Select interview time
                  </div>
                  <input
                    className="frame-child174"
                    placeholder="Select time"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="frame-wrapper91"
            onClick={openScheduledSuccessfullyPopup}
          >
            <div className="schedule-interview-group">
              <div className="schedule-interview4">Schedule Interview</div>
              <img
                className="solarplay-bold-icon3"
                alt=""
                src="/solarplaybold1.svg"
              />
            </div>
          </button>
        </div>
        <button className="basilcross-outline12" onClick={onClose}>
          <img className="vector-icon34" alt="" src="/vector3.svg" />
        </button>
        </div>
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

export default ScheduleInterviewPopup;
