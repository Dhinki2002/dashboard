import { useState, useRef, useCallback } from "react";
import NotificationPopup from "../NotificationPopup/NotificationPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
    navigate("/settings");
  }, [navigate]);

  return (
    <>
      <div className="frame-parent363">
        <div className="hi-priyanshu-parent12">
          <div className="hi-priyanshu14">Hi Priyanshu,</div>
          <div className="welcome-to-fulcrum19">Welcome to Fulcrum!</div>
        </div>
        <div className="frame-parent364">
          <div className="frame-wrapper219">
            {/* <div className="frame-wrapper220"> */}
              {/* <div className="carbonsearch-parent18">
                <img
                  className="carbonsearch-icon20"
                  alt=""
                  src="/carbonsearch.svg"
                />
                <div className="search-by-anything20">Search by anything</div>
              </div> */}
            {/* </div> */}
          </div>
          <div className="claritynotification-line-parent18">
            <button
              className="fluentinfo-24-regular"
              ref={claritynotificationLineRef}
              onClick={openNotificationPopup}
            >
              <img className="vector-icon48" alt="" src="/vector8.svg" />
              <img className="vector-icon49" alt="" src="/vector20.svg" />
            </button>
            <button className="fluentinfo-24-regular">
              <img className="vector-icon51" alt="" src="/vector21.svg" />
            </button>
            <button className="ellipse-parent29" onClick={onFrameButtonClick}>
              <div className="frame-child249" />
              <img className="images-5-icon21" alt="" src="/images-5@2x.png" />
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

export default Header;
