import { useState, useCallback } from "react";
import DreamStartTestPopup from "../components/DreamStartTestPopup";
import PortalPopup from "../components/PortalPopup";
import { Link } from "react-router-dom";
import ScheduleInterviewPopup from "../components/ScheduleInterviewPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./DreamCompanyCompany.css";

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

  const counter=3;

  return (
    <>
      <div className="dream-company-company">
        <Navbar counter={counter}/>
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
          <div className="topic-wise-analysis-frame">
            <div className="dream-company">Topic-wise Analysis</div>
          </div>
          <div className="frame-parent146">
            <div className="topic-container">
              <div className="dream-company">#</div>
              <div className="data-structures-container">
                <div className="dream-company">01</div>
                <div className="dream-company">02</div>
                <div className="dream-company">03</div>
                <div className="dream-company">05</div>
                <div className="dream-company">06</div>
                <div className="dream-company">07</div>
              </div>
            </div>
            <div className="topic-container">
              <div className="dream-company">Topic</div>
              <div className="data-structures-container">
                <div className="dream-company">Data Structures</div>
                <div className="dream-company">Databases</div>
                <div className="dream-company">Testing</div>
                <div className="dream-company">Debugging</div>
                <div className="dream-company">Coding languages</div>
                <div className="dream-company">Source Control</div>
              </div>
            </div>
            <div className="proficiency-container">
              <div className="dream-company">Proficiency</div>
              <div className="frame-parent147">
                <div className="rectangle-wrapper18">
                  <div className="frame-child112" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child113" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child114" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child115" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child116" />
                </div>
                <div className="rectangle-wrapper18">
                  <div className="frame-child112" />
                </div>
              </div>
            </div>
            <div className="topic-container">
              <div className="dream-company">Last score</div>
              <div className="data-structures-container">
                <div className="dream-company">72</div>
                <div className="dream-company">65</div>
                <div className="dream-company">22</div>
                <div className="dream-company">54</div>
                <div className="dream-company">56</div>
                <div className="dream-company">32</div>
              </div>
            </div>
          </div>
          <div className="line-parent7">
            <div className="frame-child118" />
            <div className="frame-child118" />
            <div className="frame-child118" />
            <div className="frame-child118" />
            <div className="frame-child118" />
            <div className="frame-child118" />
            <div className="frame-child118" />
          </div>
          <div className="view-more-parent3">
            <div className="dream-company">View more</div>
            <img
              className="riarrow-drop-down-line-icon5"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </div>
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
          <div className="my-go-score-for-amazon-parent">
            <div className="my-go-score">My Go Score for Amazon</div>
            <div className="ellipse-parent3">
              <div className="frame-child125" />
              <div className="frame-child126" />
              <div className="div118">76</div>
            </div>
            <div className="frame-parent150">
              <div className="topic-container">
                <div className="dream-company">Accuracy:</div>
                <div className="dream-company">Completion:</div>
                <div className="dream-company">Consistency:</div>
              </div>
              <div className="topic-container">
                <div className="dream-company">60%</div>
                <div className="dream-company">43%</div>
                <div className="dream-company">65%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent151">
          <div className="practice-tests-parent">
            <div className="my-go-score">Practice Tests</div>
            <div className="number-container">
              <div className="number2">
                <div className="parent20">
                  <div className="div122">80</div>
                  <div className="div122">60</div>
                  <div className="div122">40</div>
                  <div className="div122">20</div>
                  <div className="div126">0</div>
                </div>
              </div>
              <div className="line-parent8">
                <img className="line-icon2" alt="" src="/line2.svg" />
                <img className="vector-icon21" alt="" src="/vector17.svg" />
                <img className="vector-icon22" alt="" src="/vector18.svg" />
                <img className="elipes-icon2" alt="" src="/elipes2.svg" />
                <div className="tool-tip2">
                  <img className="union-icon2" alt="" src="/union2.svg" />
                  <div className="marks-container">
                    <div className="marks2">Marks</div>
                    <div className="div127">67</div>
                  </div>
                </div>
                <div className="frame-child127" />
              </div>
              <div className="feb-21-container">
                <div className="feb-219">Feb 21</div>
                <div className="feb-219">Feb 22</div>
                <div className="feb-219">Feb 23</div>
                <div className="feb-219">Feb 21</div>
                <div className="feb-219">Feb 21</div>
              </div>
            </div>
          </div>
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
