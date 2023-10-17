import { useState, useRef, useCallback } from "react";
import NotificationPopup from "./NotificationPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  const claritynotificationLineRef = useRef(null);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/adminsettings");
  }, [navigate]);

  return (
    <>
      <div className="frame-parent284">
        <div className="hi-admin-container">
          <div className="hi-admin2">Hi Admin,</div>
          <div className="welcome-to-fulcrum6">Welcome to Fulcrum!</div>
        </div>
        <div className="frame-parent285">
          <div className="frame-wrapper121">
            <div className="frame-wrapper122">
              <div className="carbonsearch-parent2">
                <img
                  className="carbonsearch-icon4"
                  alt=""
                  src="/carbonsearch.svg"
                />
                <div className="search-by-anything4">Search by anything</div>
              </div>
            </div>
          </div>
          <div className="claritynotification-line-parent2">
            <button
              className="claritynotification-line"
              ref={claritynotificationLineRef}
              onClick={openNotificationPopup}
            >
              <img className="vector-icon42" alt="" src="/vector8.svg" />
              <img className="vector-icon43" alt="" src="/vector9.svg" />
            </button>
            <img
              className="fluentinfo-24-regular-icon3"
              alt=""
              src="/fluentinfo24regular.svg"
            />
            <button className="ellipse-parent13" onClick={onFrameButtonClick}>
              <div className="frame-child210" />
              <img className="images-5-icon5" alt="" src="/images-5@2x.png" />
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

export default AdminHeader;
