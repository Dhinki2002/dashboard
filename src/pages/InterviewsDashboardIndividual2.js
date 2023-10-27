import { useState, useCallback } from "react";
import StartInterviewPopup from "../components/StartInterviewPopup";
import PortalPopup from "../components/PortalPopup";
import InterviewPopup from "../components/InterviewPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./InterviewsDashboardIndividual2.css";
import { Helmet } from "react-helmet";

const InterviewsDashboardIndividual2 = () => {
  const [isStartInterviewPopupOpen, setStartInterviewPopupOpen] =
    useState(false);
  const [isInterviewPopupOpen, setInterviewPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButton2Click = useCallback(() => {
    navigate("/interviews-dashboardindividual1");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/interviews-dashboardindividual");
  }, [navigate]);

  const openStartInterviewPopup = useCallback(() => {
    setStartInterviewPopupOpen(true);
  }, []);

  const closeStartInterviewPopup = useCallback(() => {
    setStartInterviewPopupOpen(false);
  }, []);

  const openInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(true);
  }, []);

  const closeInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(false);
  }, []);

  const counter = 1;

  const interviews = [
    {
      id: 1,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 2,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 3,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 4,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 1,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 2,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 3,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 4,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 1,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 2,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 3,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 4,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 1,
      title: "SDE-1 Interview",
      date: "29-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 2,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 3,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    {
      id: 4,
      title: "SDE-1 Interview",
      date: "30-03-2023",
      logo: "/company-logo11.svg",
    },
    // Add more interview objects as needed
  ];

  return (
    <>
      <div className="interviews-dashboard-individua1">
        <Helmet>
          <title>Interview Individual Tab2</title>
          <meta name="desc"
            content="Interview Individual Tab2" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="frame-parent176">
          <div className="interviews-container">
            <div className="tomorrow">Interviews</div>
          </div>
          <div className="frame-parent177">
            <button className="upcoming-wrapper1">
              <div className="upcoming3">Today</div>
            </button>
            <button className="completed-wrapper1" onClick={onFrameButtonClick}>
              <div className="completed3">Upcoming</div>
            </button>
            <button
              className="completed-wrapper1"
              onClick={onFrameButton2Click}
            >
              <div className="completed3">Completed</div>
            </button>
          </div>
          <div className="frame-parent178">
            {interviews.map((interview) => (
              <button
                key={interview.id}
                className="frame-wrapper73"
                onClick={openStartInterviewPopup}
              >
                <div className="phdots-three-parent16">
                  <img
                    className="phdots-three-icon26"
                    alt=""
                    src="/phdotsthree.svg"
                  />
                  <div className="frame-parent179">
                    <div className="sde-1-interview-parent16">
                      <div className="sde-1-interview18">
                        {interview.title}
                      </div>
                      <div className="div137">{interview.date}</div>
                    </div>
                    <div className="company-logo-wrapper">
                      <img
                        className="company-logo-icon27"
                        alt=""
                        src={interview.logo}
                      />
                    </div>
                  </div>
                </div>
              </button>
            ))}            
            {/* <div className="frame-wrapper74">
              <div className="phdots-three-parent17">
                <img
                  className="phdots-three-icon26"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent179">
                  <div className="sde-1-interview-parent16">
                    <div className="tomorrow">SDE-1 Interview</div>
                    <div className="div138">29-03-2023</div>
                  </div>
                  <img
                    className="frame-child136"
                    alt=""
                    src="/frame-1220.svg"
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="frame-wrapper74">
              <div className="phdots-three-parent16">
                <img
                  className="phdots-three-icon26"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent179">
                  <div className="sde-1-interview-parent16">
                    <div className="tomorrow">SDE-1 Interview</div>
                    <div className="div138">29-03-2023</div>
                  </div>
                  <img
                    className="frame-child136"
                    alt=""
                    src="/frame-12201.svg"
                  />
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="frame-parent182">
            <div className="frame-wrapper74">
              <div className="phdots-three-parent16">
                <img
                  className="phdots-three-icon26"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent179">
                  <div className="sde-1-interview-parent16">
                    <div className="tomorrow">SDE-1 Interview</div>
                    <div className="div138">29-03-2023</div>
                  </div>
                  <div className="company-logo-wrapper">
                    <img
                      className="company-logo-icon27"
                      alt=""
                      src="/company-logo11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper74">
              <div className="phdots-three-parent17">
                <img
                  className="phdots-three-icon26"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent179">
                  <div className="sde-1-interview-parent16">
                    <div className="tomorrow">SDE-1 Interview</div>
                    <div className="div138">29-03-2023</div>
                  </div>
                  <img
                    className="frame-child136"
                    alt=""
                    src="/frame-1220.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-wrapper74">
              <div className="phdots-three-parent16">
                <img
                  className="phdots-three-icon26"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent179">
                  <div className="sde-1-interview-parent16">
                    <div className="tomorrow">SDE-1 Interview</div>
                    <div className="div138">29-03-2023</div>
                  </div>
                  <img
                    className="frame-child136"
                    alt=""
                    src="/frame-12201.svg"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <button
            className="icbaseline-plus-parent16"
            onClick={openInterviewPopup}
          >
            <img
              className="icbaseline-plus-icon18"
              alt=""
              src="/icbaselineplus6.svg"
            />
            <div className="schedule-interview2">Schedule interview</div>
          </button>
          {/* <div className="today-group">
            <div className="tomorrow1">Today</div>
            <div className="frame-child140" />
          </div> */}
          {/* <div className="tomorrow-parent">
            <div className="tomorrow1">Tomorrow</div>
            <div className="frame-child141" />
          </div> */}
          {/* <div className="rectangle-parent2">
            <div className="frame-child142" />
            <div className="frame-child143" />
          </div> */}
        </div>
      </div>
      {isStartInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStartInterviewPopup}
        >
          <StartInterviewPopup onClose={closeStartInterviewPopup} />
        </PortalPopup>
      )}
      {isInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInterviewPopup}
        >
          <InterviewPopup onClose={closeInterviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewsDashboardIndividual2;
