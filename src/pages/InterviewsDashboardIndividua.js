import { useState, useCallback } from "react";
import InterviewPopup from "../components/InterviewPopup";
import PortalPopup from "../components/PortalPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./InterviewsDashboardIndividua.css";
import { Helmet } from "react-helmet";

const InterviewsDashboardIndividua = () => {
  const [isInterviewPopupOpen, setInterviewPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/interviews-dashboardindividual");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/inteview-test-report");
  }, [navigate]);

  const openInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(true);
  }, []);

  const closeInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(false);
  }, []);

  const counter=1;

  return (
    <>
      <div className="interviews-dashboard-individua">
      <Helmet>
      <title>Dashboard Interviews</title>
      <meta name="desc"
        content="Dashboard Indvidual Interviews"/>
      </Helmet>
        <Navbar counter={counter}/>
        <Header />
        <div className="frame-parent167">
          <div className="interviews-wrapper">
            <div className="interviews1">Interviews</div>
          </div>
          <div className="frame-parent168">
            <button className="today-frame">
              <div className="today3">Today</div>
            </button>
            <button className="upcoming-frame" onClick={onFrameButton1Click}>
              <div className="upcoming2">Upcoming</div>
            </button>
            <button className="completed-frame">
              <div className="completed2">Completed</div>
            </button>
          </div>
          <div className="frame-parent169">
            <button className="frame-wrapper67" onClick={onFrameButton3Click}>
              <div className="phdots-three-parent10">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="sde-1-interview12">SDE-1 Interview</div>
                    <div className="div131">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent11">
                    <img
                      className="company-logo-icon21"
                      alt=""
                      src="/company-logo2.svg"
                    />
                    <div className="view-report-wrapper">
                      <div className="view-report">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <div className="frame-wrapper68">
              <div className="phdots-three-parent11">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="interviews1">SDE-1 Interview</div>
                    <div className="div132">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent12">
                    <img
                      className="company-logo-icon22"
                      alt=""
                      src="/company-logo3.svg"
                    />
                    <div className="view-report-container">
                      <div className="view-report1">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper68">
              <div className="phdots-three-parent10">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="interviews1">SDE-1 Interview</div>
                    <div className="div132">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent13">
                    <img
                      className="company-logo-icon23"
                      alt=""
                      src="/company-logo10.svg"
                    />
                    <div className="view-report-frame">
                      <div className="view-report1">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper68">
              <div className="phdots-three-parent10">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="interviews1">SDE-1 Interview</div>
                    <div className="div132">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent14">
                    <img
                      className="company-logo-icon21"
                      alt=""
                      src="/company-logo2.svg"
                    />
                    <div className="view-report-wrapper">
                      <div className="view-report1">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper68">
              <div className="phdots-three-parent10">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="interviews1">SDE-1 Interview</div>
                    <div className="div132">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent14">
                    <img
                      className="company-logo-icon21"
                      alt=""
                      src="/company-logo2.svg"
                    />
                    <div className="view-report-wrapper">
                      <div className="view-report1">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper68">
              <div className="phdots-three-parent10">
                <img
                  className="phdots-three-icon20"
                  alt=""
                  src="/phdotsthree.svg"
                />
                <div className="frame-parent170">
                  <div className="sde-1-interview-parent10">
                    <div className="interviews1">SDE-1 Interview</div>
                    <div className="div132">29-03-2023</div>
                  </div>
                  <div className="company-logo-parent14">
                    <img
                      className="company-logo-icon21"
                      alt=""
                      src="/company-logo2.svg"
                    />
                    <div className="view-report-wrapper">
                      <div className="view-report1">View Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="icbaseline-plus-parent15"
            onClick={openInterviewPopup}
          >
            <img
              className="icbaseline-plus-icon17"
              alt=""
              src="/icbaselineplus6.svg"
            />
            <div className="schedule-interview1">Schedule interview</div>
          </button>
          <div className="rectangle-parent1">
            <div className="frame-child134" />
            <div className="frame-child135" />
          </div>
        </div>
      </div>
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

export default InterviewsDashboardIndividua;
