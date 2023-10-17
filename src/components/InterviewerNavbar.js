import { useState, useCallback } from "react";
import LogoutPopup from "./LogoutPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./InterviewerNavbar.css";

const InterviewerNavbar = ({counter}) => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboardinterviewer");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/transactionsinterviewer");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/settingsinterviewer");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="cantileverlogoblack-2-parent6">
        <img
          className="cantileverlogoblack-2-icon8"
          alt=""
          src="/1644088580619-cantileverlogoblack-2@2x.png"
        />
        <div className="frame-parent296">
          <button className="rectangle-parent9" onClick={onFrameButtonClick}>
            {counter===0&&<div className="frame-child217" />}
            <div className="teenyiconshome-solid-container">
              <img
                className="teenyiconshome-solid2"
                alt=""
                src="/teenyiconshomesolid.svg"
              />
              <div className={counter===0 ? "home7": "transaction5"}>Home</div>
            </div>
          </button>
          <button className="rectangle-parent9" onClick={onFrameButton1Click}>
          {counter===1&&<div className="frame-child217" />}
            <div className="teenyiconshome-solid-container">
              <img
                className="grommet-iconstransaction4"
                alt=""
                src="/grommeticonstransaction.svg"
              />
              <div className={counter===1 ? "home7": "transaction5"}>Transactions</div>
            </div>
          </button>
          <button className="rectangle-parent9" onClick={onFrameButton2Click}>
          {counter===2&&<div className="frame-child217" />}
            <div className="teenyiconshome-solid-container">
              <img
                className="grommet-iconstransaction4"
                alt=""
                src="/antdesignsettingoutlined1.svg"
              />
              <div className={counter===2 ? "home7": "transaction5"}>Settings</div>
            </div>
          </button>
        </div>
        <button className="frame-wrapper140" onClick={openLogoutPopup}>
          <div className="teenyiconshome-solid-container">
            <img
              className="grommet-iconstransaction4"
              alt=""
              src="/mdilogout.svg"
            />
            <div className={counter===0 ? "home7": "transaction5"}>Log out</div>
          </div>
        </button>
      </div>
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <LogoutPopup onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewerNavbar;
