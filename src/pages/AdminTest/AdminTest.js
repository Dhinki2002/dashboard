import { useState, useCallback } from "react";
import ScheduleTestPopup from '../../components/ScheduleTestPopup/ScheduleTestPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.js';
import AdminHeader from '../../components/AdminHeader/AdminHeader.js';
// import "./AdminTest.css";
import { Helmet } from "react-helmet";

const AdminTest = () => {
  const [isScheduleTestPopupOpen, setScheduleTestPopupOpen] = useState(false);

  const openScheduleTestPopup = useCallback(() => {
    setScheduleTestPopupOpen(true);
  }, []);

  const closeScheduleTestPopup = useCallback(() => {
    setScheduleTestPopupOpen(false);
  }, []);

  const counter=1;
  const logos = [
    { 
      id:1,
      src: "/company-logo1.svg" 
    },
    { 
      id:2,
      src: "/company-logo2.svg" 
    },
    { 
      id:3,
      src: "/company-logo3.svg" 
    },
    { id:4,
      src: "/company-logo3.svg" 
    },

    // more logos...
  ];

  return (
    <>
      <Helmet>
      <title>Admin Test</title>
      <meta name="desc"
        content="Admin Test"/>
      </Helmet>
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]">
        <AdminNavbar counter={counter}/>
        <AdminHeader />
        <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.7vw] max-h-[50vw] left-[21.03vw] top-[9.13vw]">
          <div className="absolute flex flex-col items-start justify-start left-[1.59vw] top-[1.59vw]">
            <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Active tests</div>
          </div>
          <div className="absolute w-[74.41vw] flex flex-row flex-wrap items-start justify-start gap-[var(--gap-13xl)] overflow-auto max-h-[50vw] left-[1.59vw] top-[6.08vw]">
          {logos.map((logo) => (
      <button key={logo.id} className="relative rounded-[var(--br-base)] overflow-hidden shrink-0  cursor-pointer bg-[color:var(--white)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.1vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[22.2vw] h-[12.04vw] overflow-hidden shrink-0 ml-[0.08vw] mb-[1vw] p-0 border-0 top-[0.08vw]">
        <img className="absolute h-[1.44%] w-[5.5%] max-w-full overflow-hidden max-h-full left-[86.56%] right-[7.94%] top-[20.16%] bottom-[78.4%]" alt="" src="/vector7.svg" />
        <img className="absolute left-[calc(50%_-_3.9vw)] w-[7.8vw] h-[3.44vw] overflow-hidden top-[3.97vw]" alt="" src={logo.src} />
      </button>
    ))}
            
          </div>
          <button
            className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-5xl)] pb-[var(--padding-xs)] pl-[var(--padding-5xl)] bg-[color:var(--purple)] absolute rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center gap-[var(--gap-7xs)] border-0 left-[63.43vw] top-[1.32vw]"
            onClick={openScheduleTestPopup}
          >
            <img
              className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
              alt=""
              src="/icbaselineplus1.svg"
            />
            <div className="relative text-[1.05vw] text-[color:var(--white)] text-left font-[bold]">Add new test</div>
          </button>
        </div>
      </div>
      {isScheduleTestPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleTestPopup}
        >
          <ScheduleTestPopup onClose={closeScheduleTestPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminTest;
