import { useState, useCallback } from "react";
import DreamStartTestPopup from "../components/DreamStartTestPopup";
import PortalPopup from "../components/PortalPopup";
import { Link } from "react-router-dom";
import ScheduleInterviewPopup from "../components/ScheduleInterviewPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./DreamCompanyCompany.css";
import MyGoScore from "../components/MyGoScore";
import { TopicWiseAnalysis } from "../components/TopicWiseAnalysis";
import GrowthAnalysis2 from "../components/GrowthAnalysis2";

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

  return (
    <>
      <div className="dream-company-company">
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
          <GrowthAnalysis2/>
          <div className="frame-parent152">
            <div className="frame-parent153">
              <div className="frame-parent154">
                <div className="frame-parent154">
                  <div className="dream-company">Tue</div>
                  <div className="div128">16</div>
                </div>
                <div className="wed-parent">
                  <div className="dream-company">Wed</div>
                  <div className="div128">17</div>
                </div>
                <div className="wed-parent">
                  <div className="dream-company">Thu</div>
                  <div className="div128">17</div>
                </div>
              </div>
              <div className="frame-parent155">
                <div className="test-1-wrapper">
                  <div className="test-1">Test-1</div>
                </div>
                <div className="interview-1-wrapper">
                  <div className="test-1">Test-2</div>
                </div>
                <div className="interview-1-wrapper">
                  <div className="test-1">Interview-1</div>
                </div>
              </div>
            </div>
            <div className="schedule-parent">
              <div className="dream-company">Schedule</div>
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
                  <div className="phclock-parent">
                    <img className="uiwdate-icon" alt="" src="/phclock.svg" />
                    <div className="dream-company">4:00 pm</div>
                  </div>
                  <div className="phclock-parent">
                    <img
                      className="uiwdate-icon"
                      alt=""
                      src="/solarcalendarlineduotone.svg"
                    />
                    <div className="dream-company">24 September 2023</div>
                  </div>
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
