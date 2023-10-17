import { useState, useCallback } from "react";
import DreamStartTest2Popup from "./DreamStartTest2Popup";
import PortalPopup from "./PortalPopup";
import "./DreamStartTestPopup.css";

const DreamStartTestPopup = ({ onClose }) => {
  const [isDreamStartTest2PopupOpen, setDreamStartTest2PopupOpen] =
    useState(false);
  const [isDreamStartTest2Popup1Open, setDreamStartTest2Popup1Open] =
    useState(false);
  const [isDreamStartTest2Popup2Open, setDreamStartTest2Popup2Open] =
    useState(false);
  const [isDreamStartTest2Popup3Open, setDreamStartTest2Popup3Open] =
    useState(false);
  const [isDreamStartTest2Popup4Open, setDreamStartTest2Popup4Open] =
    useState(false);
  const [isDreamStartTest2Popup5Open, setDreamStartTest2Popup5Open] =
    useState(false);

  const openDreamStartTest2Popup = useCallback(() => {
    setDreamStartTest2PopupOpen(true);
  }, []);

  const closeDreamStartTest2Popup = useCallback(() => {
    setDreamStartTest2PopupOpen(false);
  }, []);

  const openDreamStartTest2Popup1 = useCallback(() => {
    setDreamStartTest2Popup1Open(true);
  }, []);

  const closeDreamStartTest2Popup1 = useCallback(() => {
    setDreamStartTest2Popup1Open(false);
  }, []);

  const openDreamStartTest2Popup2 = useCallback(() => {
    setDreamStartTest2Popup2Open(true);
  }, []);

  const closeDreamStartTest2Popup2 = useCallback(() => {
    setDreamStartTest2Popup2Open(false);
  }, []);

  const openDreamStartTest2Popup3 = useCallback(() => {
    setDreamStartTest2Popup3Open(true);
  }, []);

  const closeDreamStartTest2Popup3 = useCallback(() => {
    setDreamStartTest2Popup3Open(false);
  }, []);

  const openDreamStartTest2Popup4 = useCallback(() => {
    setDreamStartTest2Popup4Open(true);
  }, []);

  const closeDreamStartTest2Popup4 = useCallback(() => {
    setDreamStartTest2Popup4Open(false);
  }, []);

  const openDreamStartTest2Popup5 = useCallback(() => {
    setDreamStartTest2Popup5Open(true);
  }, []);

  const closeDreamStartTest2Popup5 = useCallback(() => {
    setDreamStartTest2Popup5Open(false);
  }, []);

  return (
    <>
      <div className="dreamstarttestpopup">
        <div className="dreamstarttestpopup-inner">
          <div className="frame-parent238">
            <div className="choose-your-dream-company-parent">
              <div className="choose-your-dream">Choose your dream company</div>
              <div className="select-a-company">
                Select a company for which you want to prepare
              </div>
            </div>
            <div className="frame-parent239">
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup1}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup2}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
            </div>
            <div className="frame-parent239">
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup3}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup4}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
              <button
                className="company-logo-wrapper1"
                onClick={openDreamStartTest2Popup5}
              >
                <img
                  className="company-logo-icon30"
                  alt=""
                  src="/company-logo12.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <button className="basilcross-outline15" onClick={onClose}>
          <img className="vector-icon38" alt="" src="/vector.svg" />
        </button>
      </div>
      {isDreamStartTest2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup} />
        </PortalPopup>
      )}
      {isDreamStartTest2Popup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup1}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup1} />
        </PortalPopup>
      )}
      {isDreamStartTest2Popup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup2}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup2} />
        </PortalPopup>
      )}
      {isDreamStartTest2Popup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup3}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup3} />
        </PortalPopup>
      )}
      {isDreamStartTest2Popup4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup4}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup4} />
        </PortalPopup>
      )}
      {isDreamStartTest2Popup5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTest2Popup5}
        >
          <DreamStartTest2Popup onClose={closeDreamStartTest2Popup5} />
        </PortalPopup>
      )}
    </>
  );
};

export default DreamStartTestPopup;
