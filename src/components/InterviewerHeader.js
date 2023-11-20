import { useState, useRef, useCallback } from "react";
import NotificationPopup from "./NotificationPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./InterviewerHeader.css";

const InterviewerHeader = () => {
  const claritynotificationLineRef = useRef(null);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const onFrameButton4Click = useCallback(() => {
    navigate("/settingsinterviewer");
  }, [navigate]);

  return (
    <>
      <div className="frame-parent297">
        <div className="hi-interviewer-parent2">
          <div className="hi-interviewer4">Hi Interviewer,</div>
          <div className="welcome-to-fulcrum10">Welcome to Fulcrum!</div>
        </div>
        <div className="frame-parent298">
          <div className="frame-wrapper141">

          </div>
          <div className="claritynotification-line-parent6">
            <button
              className="claritynotification-line1"
              ref={claritynotificationLineRef}
              onClick={openNotificationPopup}
            >
              <img className="vector-icon45" alt="" src="/vector8.svg" />
              <img className="vector-icon46" alt="" src="/vector9.svg" />
            </button>
            <div className="icround-star-parent2">
              <img
                className="icround-star-icon4"
                alt=""
                src="/icroundstar.svg"
              />
              <div className="div194">4.9</div>
            </div>
            <button className="ellipse-parent17" onClick={onFrameButton4Click}>
              <div className="frame-child218" />
              <img className="images-5-icon9" alt="" src="/images-5@2x.png" />
            </button>
          </div>
        </div>
      </div>
      {isNotificationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-340}
          left={-250}
          relativeLayerRef={claritynotificationLineRef}
          onOutsideClick={closeNotificationPopup}
        >
          <NotificationPopup onClose={closeNotificationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewerHeader;
