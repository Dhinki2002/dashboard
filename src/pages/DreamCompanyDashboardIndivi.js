import { useState, useCallback } from "react";
import AddDreamCompanyPopup from "../components/AddDreamCompanyPopup";
import PortalPopup from "../components/PortalPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./DreamCompanyDashboardIndivi.css";
import { Helmet } from "react-helmet";

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

  const counter = 3;

  // Array of button data
  const buttonData = [
    {
      id: 1,
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo6.svg",
    },
    {
      id: 2,
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    // Add more objects for additional buttons
    {
      id: 3,
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo6.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    // Add more objects for additional buttons
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo6.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    // Add more objects for additional buttons
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo6.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    // Add more objects for additional buttons
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
    {
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    },
  ];

  return (
    <>
      <div className="dream-company-dashboard-indivi">
        <Helmet>
          <title>Dream Company Dashboard</title>
          <meta name="desc" content="Dream Company Dashboard Indvidual" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="frame-parent157">
          <div className="dream-companies-wrapper">
            <div className="dream-companies">Dream Companies</div>
          </div>
          <div className="frame-parent158">
            {/* Map over the button data and generate buttons */}
            {buttonData.map((button) => (
              <button className="vector-parent1" key={button.id}>
                <img className="vector-icon23" alt="" src={button.vectorIcon} />
                <img
                  className="company-logo-icon15"
                  alt=""
                  src={button.companyLogo}
                />
                <div className="interview-ready-parent">
                  <div className="interview-ready">Interview ready :</div>
                  <div className="rectangle-wrapper24">
                    <div className="frame-child128" />
                  </div>
                </div>
              </button>
            ))}
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