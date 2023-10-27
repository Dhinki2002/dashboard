import { useState, useCallback } from "react";
import TestRemarksPopUp from "../components/TestRemarksPopUp";
import PortalPopup from "../components/PortalPopup";
import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import { useNavigate } from "react-router-dom";
import "./DashboardInterviewer1.css";
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
  const counter=0;

  return (
    <>
    <Helmet>
      <title>Dashboard Interviewer Completed</title>
      <meta name="desc"
        content="Dashboard Interviewer Completed tab"/>
      </Helmet>
      <div className="dashboard-interviewer1">
        <InterviewerNavbar counter={counter}/>
        <InterviewerHeader/>
        <div className="dashboard-interviewer1-inner">
          <div className="frame-parent63">
            <div className="scheduled-interviews-container">
              <div className="upcoming">Scheduled interviews</div>
            </div>
            <div className="frame-wrapper33">
              <div className="frame-parent64">
                <div className="frame-parent65">
                  <button
                    className="today-wrapper"
                    onClick={onFrameButtonClick}
                  >
                    <div className="today">Upcoming</div>
                  </button>
                  {/* <div className="upcoming-wrapper">
                    <div className="upcoming">Upcoming</div>
                  </div> */}
                  <div className="completed-wrapper">
                    <div className="completed">Completed</div>
                  </div>
                </div>
                <div className="frame-parent66">
                  <button
                    className="frame-wrapper34"
                    onClick={openTestRemarksPopUp}
                  >
                    <div className="phdots-three-parent">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="sde-1-interview1">
                            SDE-1 Interview
                          </div>
                          <div className="div46">29-03-2023</div>
                        </div>
                        <div className="company-logo-group">
                          <img
                            className="company-logo-icon2"
                            alt=""
                            src="/company-logo2.svg"
                          />
                          <div className="view-analysis-wrapper">
                            <div className="view-analysis">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="frame-wrapper35">
                    <div className="phdots-three-group">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="upcoming">SDE-1 Interview</div>
                          <div className="div47">29-03-2023</div>
                        </div>
                        <div className="company-logo-container">
                          <img
                            className="company-logo-icon3"
                            alt=""
                            src="/company-logo3.svg"
                          />
                          <div className="view-analysis-container">
                            <div className="view-analysis1">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper35">
                    <div className="phdots-three-group">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="upcoming">SDE-1 Interview</div>
                          <div className="div47">29-03-2023</div>
                        </div>
                        <div className="company-logo-container">
                          <img
                            className="company-logo-icon3"
                            alt=""
                            src="/company-logo3.svg"
                          />
                          <div className="view-analysis-container">
                            <div className="view-analysis1">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper35">
                    <div className="phdots-three-parent">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="upcoming">SDE-1 Interview</div>
                          <div className="div47">29-03-2023</div>
                        </div>
                        <div className="company-logo-parent2">
                          <img
                            className="company-logo-icon2"
                            alt=""
                            src="/company-logo2.svg"
                          />
                          <div className="view-analysis-wrapper">
                            <div className="view-analysis1">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper35">
                    <div className="phdots-three-parent">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="upcoming">SDE-1 Interview</div>
                          <div className="div47">29-03-2023</div>
                        </div>
                        <div className="company-logo-parent2">
                          <img
                            className="company-logo-icon2"
                            alt=""
                            src="/company-logo2.svg"
                          />
                          <div className="view-analysis-wrapper">
                            <div className="view-analysis1">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper35">
                    <div className="phdots-three-group">
                      <img
                        className="phdots-three-icon"
                        alt=""
                        src="/phdotsthree.svg"
                      />
                      <div className="frame-parent67">
                        <div className="sde-1-interview-group">
                          <div className="upcoming">SDE-1 Interview</div>
                          <div className="div47">29-03-2023</div>
                        </div>
                        <div className="company-logo-container">
                          <img
                            className="company-logo-icon3"
                            alt=""
                            src="/company-logo3.svg"
                          />
                          <div className="view-analysis-container">
                            <div className="view-analysis1">View Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="uiwdate" onClick={onUiwdateClick}>
              <img className="vector-icon17" alt="" src="/vector14.svg" />
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
