import { useState, useCallback } from "react";
import DreamStartTestPopup from '../../components/DreamStartTestPopup/DreamStartTestPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import { Link } from "react-router-dom";
import ScheduleInterviewPopup from '../../components/ScheduleInterviewPopup/ScheduleInterviewPopup.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import "./DreamCompanyCompany.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import GrowthAnalysis2 from '../../components/GrowthAnalysis2/GrowthAnalysis2.js';
import { Helmet } from "react-helmet";

const DreamCompanyCompany = () => {
  const [isDreamStartTestPopupOpen, setDreamStartTestPopupOpen] =
    useState(false);
  const [isScheduleInterviewPopupOpen, setScheduleInterviewPopupOpen] =
    useState(false);

  const openDreamStartTestPopup = useCallback(() => {
    setDreamStartTestPopupOpen(true);
  }, []);

  const closeDreamStartTestPopup = useCallback(() => {
    setDreamStartTestPopupOpen(false);
  }, []);

  const openScheduleInterviewPopup = useCallback(() => {
    setScheduleInterviewPopupOpen(true);
  }, []);

  const closeScheduleInterviewPopup = useCallback(() => {
    setScheduleInterviewPopupOpen(false);
  }, []);

  const counter = 3;
  const scheduleItems = [
    { day: "Tue", date: "16", event: "Test-1" },
    { day: "Wed", date: "17", event: "Test-2" },
    { day: "Thu", date: "17", event: "Interview-1" },
    // more schedule items...
  ];
  const upcomingInterviews = [
    { time: "4:00 pm", date: "24 September 2023" },
    // Add more upcoming interviews as needed
  ];

  return (
    <>
      <div className="dream-company-company">
        <Helmet>
          <title>Dream Company Companies</title>
          <meta name="desc"
            content="companies list" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="frame-parent144">
          <div className="dream-company-parent">
            <div className="dream-company">Dream Company</div>
            <div className="div104">/</div>
            <div className="dream-company">Amazon</div>
          </div>
          <img className="uiwdate-icon" alt="" src="/uiwdate.svg" />
        </div>
        <div className="frame-parent145">

          <TopicWiseAnalysis />

        </div>
        <div className="frame-parent148">
          <div className="frame-parent149">
            <button
              className="attempt-now-wrapper"
              onClick={openDreamStartTestPopup}
            >
              <div className="attempt-now">Attempt now</div>
            </button>
            <div className="students-took-test">
              1387+ students took test for Amazon
            </div>
          </div>
          <MyGoScore />
        </div>
        <div className="frame-parent151">
          <GrowthAnalysis2 />
          <div className="frame-parent152">
            <div className="frame-parent153">
              <div className="frame-parent154">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="frame-parent154">
                    <div className="dream-company">{item.day}</div>
                    <div className="div128">{item.date}</div>
                  </div>
                ))}
              </div>
              <div className="frame-parent155">
                {scheduleItems.map((item, index) => (
                  <div key={index} className={item.event.includes("Test") ? "test-1-wrapper" : "interview-1-wrapper"}>
                    <div className="test-1">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="schedule-parent">
              <div className="dream-company1">Schedule</div>
              <Link className="view-schedule" to="/schedule-iteration-1">
                View schedule
              </Link>
            </div>
          </div>
          <div className="frame-wrapper65">
            <div className="frame-wrapper66">
              <div className="frame-parent156">
              <div className="upcoming-interview-parent">
      <div className="upcoming-interview">Upcoming Interview:</div>
      {upcomingInterviews.map((interview, index) => (
        <div key={index} className="phclock-parent1">
          <div className="interview-detail">
            <div className="phclock-parent">
              <img className="uiwdate-icon1" alt="" src="/phclock.svg" />
              <div className="dream-company">{interview.time}</div>
            </div>
          </div>
          <div className="interview-detail">
            <div className="phclock-parent">
              <img
                className="uiwdate-icon"
                alt=""
                src="/solarcalendarlineduotone.svg"
              />
              <div className="dream-company">{interview.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
                <button
                  className="icbaseline-plus-parent12"
                  onClick={openScheduleInterviewPopup}
                >
                  <img
                    className="riarrow-drop-down-line-icon5"
                    alt=""
                    src="/icbaselineplus5.svg"
                  />
                  <div className="schedule-interview">Schedule interview</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDreamStartTestPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTestPopup}
        >
          <DreamStartTestPopup onClose={closeDreamStartTestPopup} />
        </PortalPopup>
      )}
      {isScheduleInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleInterviewPopup}
        >
          <ScheduleInterviewPopup onClose={closeScheduleInterviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DreamCompanyCompany;