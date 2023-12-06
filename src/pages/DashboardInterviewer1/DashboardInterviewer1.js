import { useState, useCallback } from "react";
import TestRemarksPopUp from '../../components/TestRemarksPopUp/TestRemarksPopUp.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import InterviewerNavbar from '../../components/InterviewerNavbar/InterviewerNavbar.js';
import InterviewerHeader from '../../components/InterviewerHeader/InterviewerHeader.js';
import { useNavigate } from "react-router-dom";
// import "./DashboardInterviewer1.css";
import { Helmet } from "react-helmet";

const DashboardInterviewer1 = () => {
  const [isTestRemarksPopUpOpen, setTestRemarksPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboardinterviewer");
  }, [navigate]);

  const openTestRemarksPopUp = useCallback(() => {
    setTestRemarksPopUpOpen(true);
  }, []);

  const closeTestRemarksPopUp = useCallback(() => {
    setTestRemarksPopUpOpen(false);
  }, []);

  const onUiwdateClick = useCallback(() => {
    navigate("/dashboardinterviewer2");
  }, [navigate]);
  const counter = 0;
  const interviews = [
    {
      id:1,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:2,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:3,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:4,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      companyLogo: "/company-logo2.svg",
    },

    // more interviews...
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard Interviewer Completed</title>
        <meta name="desc"
          content="Dashboard Interviewer Completed tab" />
      </Helmet>
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-6xl)] text-[color:var(--color-darkslategray-200)]">
        <InterviewerNavbar counter={counter} />
        <InterviewerHeader />
        <div className="absolute h-[53.17vw] overflow-hidden flex flex-col items-start justify-start left-[21.03vw] top-[9.13vw]">
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.17vw]">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[1.32vw]">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Scheduled interviews</div>
            </div>
            <div className="flex items-start justify-start  flex-col  absolute text-[length:var(--font-size-base)] text-[color:var(--black)] left-[1.65vw] top-[6.22vw]">
              <div className="flex items-start justify-start   flex-col  gap-[var(--gap-xl)] max-h-[46vw] ">
                <div className="rounded-[var(--br-4xs)] box-border  w-[16.33vw] flex flex-row items-start justify-start pt-[var(--padding-9xs)] pr-[var(--padding-base)] pb-[var(--padding-9xs)] pl-[var(--padding-9xs)] gap-[var(--gap-5xl)]">
                  <button
                    className="cursor-pointer bg-transparent relative rounded-[var(--br-4xs)] w-[7.08vw] h-[2.51vw] p-0 border-0"
                    onClick={onFrameButtonClick}
                  >
                    <div className="absolute top-[-0.07vw] text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] left-[1.2vw] left-[0.5vw]">Upcoming</div>
                  </button>

                  <div className="rounded-[var(--br-4xs)] box-border  relative bg-[color:var(--color-gray-400)] border-[color:var(--purple)] w-[7.08vw] h-[2.51vw] text-[color:var(--purple)] border-[0.08vw] border-solid">
                    <div className="absolute top-[-0.07vw] left-[calc(50%_-_2.68vw)] tracking-[-0.02em] leading-[2.78vw] font-[bold]">Completed</div>
                  </div>
                </div>
                <div className="flex items-start justify-start  w-[73.41vw] flex-row flex-wrap gap-[var(--gap-5xl)] text-[length:var(--font-size-5xl)] overflow-auto max-h-[50vw]">
                  {interviews.map((interview) => (
                    <button
                      key={interview.id}
                      className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[22.7vw] h-[12.04vw] overflow-hidden shrink-0 ml-[0.08vw] mb-[0.49vw] p-0 border-0 top-[0.08vw]"
                      onClick={openTestRemarksPopUp}
                    >
                      <div className="absolute w-[18.39vw] h-[8.6vw] left-[1.32vw] top-[1.59vw]">
                        <img
                          className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[18.72vw] top-0"
                          alt=""
                          src="/phdotsthree.svg"
                        />
                        <div className="absolute flex-col items-start gap-[var(--gap-9xs)] left-0 top-0">
                          <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)]">
                            <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">
                              {interview.title}
                            </div>
                            <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left text-[length:var(--font-size-sm)]">{interview.date}</div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[var(--gap-91xl)]">
                            <img
                              className="relative w-[5.75vw] h-[2.51vw] overflow-hidden shrink-0"
                              alt=""
                              src={interview.companyLogo}
                            />
                            <div className="rounded-[var(--br-9xs)] bg-[color:var(--color-mediumslateblue-100)] border-[color:var(--purple)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-5xs)] pr-[var(--padding-base)] pb-[var(--padding-5xs)] pl-[var(--padding-base)] w-[6vw] border-[0.07vw] border-solid">
                              <div className="relative text-[length:var(--font-size-sm)] text-[color:var(--purple)] text-left font-[bold]">Add Remarks</div>
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
      {isTestRemarksPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTestRemarksPopUp}
        >
          <TestRemarksPopUp onClose={closeTestRemarksPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardInterviewer1;
