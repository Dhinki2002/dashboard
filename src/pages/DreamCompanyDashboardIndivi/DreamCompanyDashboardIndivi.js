import { useState, useCallback } from "react";
import AddDreamCompanyPopup from '../../components/AddDreamCompanyPopup/AddDreamCompanyPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import { useNavigate } from "react-router-dom";
// import "./DreamCompanyDashboardIndivi.css";
import { Helmet } from "react-helmet";

const DreamCompanyDashboardIndivi = () => {
  const [isAddDreamCompanyPopupOpen, setAddDreamCompanyPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dream-company-company");
  }, [navigate]);

  const openAddDreamCompanyPopup = useCallback(() => {
    navigate("/add-dream-company");
  }, [navigate]);

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
      id: 4,
      vectorIcon: "/vector19.svg",
      companyLogo: "/company-logo7.svg",
    }
    
  ];

  return (
    <>
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]">
        <Helmet>
          <title>Dream Company Dashboard</title>
          <meta name="desc" content="Dream Company Dashboard Indvidual" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.7vw] left-[21.03vw] top-[9.13vw]">
          <div className="absolute flex flex-col items-start justify-start left-[1.59vw] top-[1.59vw]">
            <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Dream Companies</div>
          </div>
          <div className="absolute w-[73.41vw] flex flex-row flex-wrap items-start justify-start gap-[var(--gap-13xl)] max-h-[50vw] overflow-auto left-[1.59vw] top-[6.08vw]">
            {/* Map over the button data and generate buttons */}
            {buttonData.map((button) => (
              <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[22.2vw] h-[12.04vw] overflow-hidden shrink-0 ml-[0.08vw] mb-[0.49vw] p-0 border-0 top-[0.08vw]" key={button.id} onClick={onFrameButtonClick}>
                <img className="absolute h-[1.44%] w-[5.5%] max-w-full overflow-hidden max-h-full left-[86.56%] right-[7.94%] top-[20.16%] bottom-[78.4%]" alt="" src={button.vectorIcon} />
                <img
                  className="absolute left-[calc(50%_-_3.9vw)] w-[7.8vw] h-[3.44vw] overflow-hidden top-[3.97vw]"
                  alt=""
                  src={button.companyLogo}
                />
                <div className="absolute left-[calc(50%_-_8.73vw)] w-[17.46vw] flex flex-row items-center justify-start gap-[var(--gap-5xs)] top-[8.47vw]">
                  <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left">Interview ready :</div>
                  <div className="rounded-[var(--br-9xs)] h-[0.4vw]  relative bg-[color:var(--color-gainsboro-300)] w-[10.19vw] ">
                    <div className="rounded-[var(--br-9xs)] h-[0.4vw] absolute bg-[color:var(--color-mediumseagreen)] w-[7.34vw] left-0 top-0 " />
                  </div>
                </div>
              </button>
            ))}
          </div>
          <button
            className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-5xl)] pb-[var(--padding-xs)] pl-[var(--padding-5xl)] bg-[color:var(--purple)] absolute rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center gap-[var(--gap-7xs)] border-0 left-[59.79vw] top-[1.32vw]"
            onClick={openAddDreamCompanyPopup}
          >
            <img
              className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
              alt=""
              src="/icbaselineplus6.svg"
            />
            <div className="relative text-[1.05vw] text-[color:var(--white)] text-left font-[bold]">Add dream company</div>
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