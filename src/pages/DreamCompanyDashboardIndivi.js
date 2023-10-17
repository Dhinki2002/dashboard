import { useState, useCallback } from "react";
import AddDreamCompanyPopup from "../components/AddDreamCompanyPopup";
import PortalPopup from "../components/PortalPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./DreamCompanyDashboardIndivi.css";

const DreamCompanyDashboardIndivi = () => {
  const [isAddDreamCompanyPopupOpen, setAddDreamCompanyPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dream-company-company");
  }, [navigate]);

  const openAddDreamCompanyPopup = useCallback(() => {
    setAddDreamCompanyPopupOpen(true);
  }, []);

  const closeAddDreamCompanyPopup = useCallback(() => {
    setAddDreamCompanyPopupOpen(false);
  }, []);

  const counter=3;

  return (
    <>
      <div className="dream-company-dashboard-indivi">
        <Navbar counter={counter}/>
        <Header />
        <div className="frame-parent157">
          <div className="dream-companies-wrapper">
            <div className="dream-companies">Dream Companies</div>
          </div>
          <div className="frame-parent158">
            <button className="vector-container" onClick={onFrameButtonClick}>
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon15"
                alt=""
                src="/company-logo6.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
            <button className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon16"
                alt=""
                src="/company-logo7.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
            <button className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon17"
                alt=""
                src="/company-logo8.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
            <button className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon16"
                alt=""
                src="/company-logo7.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
            <button className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon19"
                alt=""
                src="/company-logo9.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
            <button className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector19.svg" />
              <img
                className="company-logo-icon17"
                alt=""
                src="/company-logo8.svg"
              />
              <div className="interview-ready-parent">
                <div className="interview-ready">Interview ready :</div>
                <div className="rectangle-wrapper24">
                  <div className="frame-child128" />
                </div>
              </div>
            </button>
          </div>
          <button
            className="icbaseline-plus-parent13"
            onClick={openAddDreamCompanyPopup}
          >
            <img
              className="icbaseline-plus-icon15"
              alt=""
              src="/icbaselineplus6.svg"
            />
            <div className="add-dream-company">Add dream company</div>
          </button>
        </div>
      </div>
      {isAddDreamCompanyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddDreamCompanyPopup}
        >
          <AddDreamCompanyPopup onClose={closeAddDreamCompanyPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DreamCompanyDashboardIndivi;
