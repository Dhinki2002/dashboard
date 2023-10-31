import { useState, useCallback } from "react";
import DashboardInterviewerCardPopup from "../components/DashboardInterviewerCardPopup";
import PortalPopup from "../components/PortalPopup";
import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import { useNavigate } from "react-router-dom";
import "./DashboardInterviewer.css";
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
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    {
      id:1,
      title: "SDE-1 Interview",
      time: "4:00 pm",
      companyLogo: "/company-logo2.svg",
    },
    // more interviews...
  ];

  const counter = 0;

  return (
    <>

      <div className="dashboard-interviewer">
        <Helmet>
          <title>Dashboard Interviewer</title>
          <meta name="desc"
            content="Interviewer dashboard" />
        </Helmet>
        <InterviewerNavbar counter={counter} />
        <InterviewerHeader />
        <div className="dashboard-interviewer-inner">
          <div className="frame-parent73">
            <div className="scheduled-interviews-frame">
              <div className="scheduled-interviews2">Scheduled interviews</div>
            </div>
            <div className="frame-wrapper40">
              <div className="frame-parent74">
                <div className="frame-parent75">
                  <button className="today-container">
                    <div className="today1">Upcoming</div>
                  </button>
                  {/* <button className="upcoming-container">
                    <div className="upcoming1">Upcoming</div>
                  </button> */}
                  <button
                    className="completed-container"
                    onClick={onFrameButton7Click}
                  >
                    <div className="completed1">Completed</div>
                  </button>
                </div>
                <div className="today-parent">
                  <div className="scheduled-interviews2">Today</div>
                  <div className="frame-child45" />
                </div>
                <div className="frame-parent76">
                  {interviews.map((interview) => (
                    <button
                      key={interview.id}
                      className="frame-wrapper41"
                      onClick={openDashboardInterviewerCardPopup}
                    >
                      <div className="phdots-three-parent4">
                        <img
                          className="phdots-three-icon6"
                          alt=""
                          src="/phdotsthree.svg"
                        />
                        <div className="frame-parent77">
                          <div className="sde-1-interview-parent5">
                            <div className="sde-1-interview7">
                              {interview.title}
                            </div>
                            <div className="carbontime-parent">
                              <img
                                className="carbontime-icon"
                                alt=""
                                src="/carbontime.svg"
                              />
                              <div className="pm">{interview.time}</div>
                            </div>
                          </div>
                          <div className="company-logo-parent5">
                            <img
                              className="company-logo-icon8"
                              alt=""
                              src={interview.companyLogo}
                            />
                            <div className="view-resume-wrapper">
                              <div className="view-resume">View Resume</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}

                 
                </div>
              </div>
            </div>
            <button className="uiwdate1" onClick={onUiwdateClick}>
              <img className="vector-icon18" alt="" src="/vector14.svg" />
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
