import { useState, useCallback } from "react";
import DashboardInterviewerCardPopup from '../../components/DashboardInterviewerCardPopup/DashboardInterviewerCardPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import InterviewerNavbar from '../../components/InterviewerNavbar/InterviewerNavbar.js';
import InterviewerHeader from '../../components/InterviewerHeader/InterviewerHeader.js';
import { useNavigate } from "react-router-dom";
// import "./DashboardInterviewer.css";
import { Helmet } from "react-helmet";

const DashboardInterviewer = () => {
  const [
    isDashboardInterviewerCardPopupOpen,
    setDashboardInterviewerCardPopupOpen,
  ] = useState(false);
  const navigate = useNavigate();

  const onFrameButton7Click = useCallback(() => {
    navigate("/dashboardinterviewer1");
  }, [navigate]);

  const openDashboardInterviewerCardPopup = useCallback(() => {
    setDashboardInterviewerCardPopupOpen(true);
  }, []);

  const closeDashboardInterviewerCardPopup = useCallback(() => {
    setDashboardInterviewerCardPopupOpen(false);
  }, []);

  const onUiwdateClick = useCallback(() => {
    navigate("/dashboardinterviewer2");
  }, [navigate]);

  const interviews = [
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:2,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:3,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:4,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },

   
    // more interviews...
  ];

  const counter = 0;

  return (
    <>

      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-6xl)] text-[color:var(--color-darkslategray-200)]">
        <Helmet>
          <title>Dashboard Interviewer</title>
          <meta name="desc"
            content="Interviewer dashboard" />
        </Helmet>
        <InterviewerNavbar counter={counter} />
        <InterviewerHeader />
        <div className="absolute h-[53.17vw] overflow-hidden flex flex-col items-start justify-start left-[21.03vw] top-[9.13vw]">
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.17vw]">
            <div className="absolute flex flex-col items-start justify-start font-[bold] left-[1.32vw] top-[1.32vw]">
              <div className="relative tracking-[-0.02em] leading-[2.78vw]">Scheduled interviews</div>
            </div>
            <div className="flex items-start justify-start  flex-col absolute text-[length:var(--font-size-5xl)] text-[color:var(--black)] left-[1.65vw] top-[6.22vw]">
              <div className="flex items-start justify-start  max-h-[46vw] gap-[var(--gap-xl)] w-[72.82vw] flex-row flex-wrap gap-[var(--gap-5xl)] text-[length:var(--font-size-xl)] max-h-[49vw] overflow-auto ">
                <div className="rounded-[var(--br-4xs)] flex flex-row items-start justify-start box-border  w-[16.33vw] pt-[var(--padding-9xs)] pr-[var(--padding-base)] pb-[var(--padding-9xs)] pl-[var(--padding-9xs)] gap-[var(--gap-5xl)]">
                  <button className="cursor-pointer border-[color:var(--purple)] bg-[color:var(--color-gray-400)] relative rounded-[var(--br-4xs)] box-border w-[7.08vw] h-[2.51vw] p-0 border-[0.08vw] border-solid">
                    <div className="absolute top-[-0.1vw] text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--purple)] font-[bold] left-[0.5vw]">Upcoming</div>
                  </button>
                  {/* <button className="upcoming-container">
                    <div className="upcoming1">Upcoming</div>
                  </button> */}
                  <button
                    className="rounded-[var(--br-4xs)] flex flex-row items-start justify-start box-border  cursor-pointer pr-[var(--padding-base)] pl-[var(--padding-base)] bg-transparent h-[2.51vw] py-0 border-0"
                    onClick={onFrameButton7Click}
                  >
                    <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left">Completed</div>
                  </button>
                </div>
                <div className="flex flex-row items-center justify-start gap-[var(--gap-xl)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Today</div>
                  <div className="relative border-t-[color:var(--icon-grey)] box-border w-[67vw] h-[0.07vw] opacity-50 border-t-[0.07vw] border-solid" />
                </div>
                <div className="flex items-start justify-start  w-[72.82vw] flex-row flex-wrap gap-[var(--gap-5xl)] text-[length:var(--font-size-xl)] max-h-[49vw] overflow-auto">
                  {interviews.map((interview) => (
                    <button
                      key={interview.id}
                      className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[22.2vw] h-[12.04vw] overflow-hidden shrink-0 ml-[0.08vw] mb-[0.25vw] p-0 border-0 top-[0.08vw]"
                      onClick={openDashboardInterviewerCardPopup}
                    >
                      <div className="absolute w-[18.39vw] h-[8.6vw] left-[1.32vw] top-[1.59vw]">
                        <img
                          className="absolute top-[-0.07vw] w-[1.85vw] h-[1.85vw] overflow-hidden left-[18.72vw]"
                          alt=""
                          src="/phdotsthree.svg"
                        />
                        <div className="frame-parent77">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative text-[length:var(--font-size-xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">
                              {interview.title}
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)] mt-[-0.26vw]">
                              <img
                                className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
                                alt=""
                                src="/carbontime.svg"
                              />
                              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left">{interview.time}</div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[var(--gap-83xl)]">
                            <img
                              className="relative w-[5.75vw] h-[2.51vw] overflow-hidden shrink-0"
                              alt=""
                              src={interview.companyLogo}
                            />
                            <div className="rounded-[var(--br-9xs)] bg-[color:var(--color-mediumslateblue-100)] border-[color:var(--purple)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-5xs)] pr-[var(--padding-base)] pb-[var(--padding-5xs)] pl-[var(--padding-base)] w-[5.9vw] border-[0.07vw] border-solid">
                              <div className="relative text-[length:var(--font-size-sm)] text-[color:var(--purple)] text-left font-[bold]">View Test</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}

                 
                </div>
              </div>
            </div>
            <button className="cursor-pointer bg-transparent absolute w-[1.59vw] h-[1.59vw] overflow-hidden p-0 border-0 left-[72.88vw] top-[2.12vw]" onClick={onUiwdateClick}>
              <img className="absolute top-[calc(50%_-_0.73vw)] left-[calc(50%_-_0.73vw)] w-[1.43vw] h-[1.43vw]" alt="" src="/vector14.svg" />
            </button>
          </div>
        </div>
      </div>
      {isDashboardInterviewerCardPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDashboardInterviewerCardPopup}
        >
          <DashboardInterviewerCardPopup
            onClose={closeDashboardInterviewerCardPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardInterviewer;
