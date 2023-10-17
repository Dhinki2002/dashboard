import { useState, useCallback } from "react";
import AddStudentsPopup from "../components/AddStudentsPopup";
import PortalPopup from "../components/PortalPopup";
import AdminNavbar from "../components/AdminNavbar";
import AdminHeader from "../components/AdminHeader";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
  const [isAddStudentsPopupOpen, setAddStudentsPopupOpen] = useState(false);

  const openAddStudentsPopup = useCallback(() => {
    setAddStudentsPopupOpen(true);
  }, []);

  const closeAddStudentsPopup = useCallback(() => {
    setAddStudentsPopupOpen(false);
  }, []);

  const counter=0;

  return (
    <>
      <div className="dashboard-admin">
        <AdminNavbar counter={counter}/>
        <AdminHeader />
        <div className="frame-parent38">
          <div className="students-performance-wrapper">
            <div className="students-performance">Students Performance</div>
          </div>
          <div className="frame-parent39">
            <div className="container">
              <div className="students-performance">#</div>
              <div className="priyanshu-gupta-parent">
                <div className="students-performance">01</div>
                <div className="students-performance">02</div>
                <div className="students-performance">03</div>
                <div className="students-performance">05</div>
                <div className="students-performance">06</div>
                <div className="students-performance">07</div>
              </div>
            </div>
            <div className="container">
              <div className="students-performance">Name</div>
              <div className="priyanshu-gupta-parent">
                <div className="students-performance">Priyanshu Gupta</div>
                <div className="students-performance">Prakriti Aggarwal</div>
                <div className="students-performance">Ayanshu Gupta</div>
                <div className="students-performance">Priyanshu Gupta</div>
                <div className="students-performance">Prakhar Khatri</div>
                <div className="students-performance">Om Mishra</div>
              </div>
            </div>
            <div className="frame-parent40">
              <div className="performance-parent">
                <div className="performance">Performance</div>
                <img className="bxsort-icon" alt="" src="/bxsort.svg" />
              </div>
              <div className="frame-parent41">
                <div className="rectangle-wrapper">
                  <div className="rectangle-div" />
                </div>
                <div className="rectangle-wrapper">
                  <div className="frame-child13" />
                </div>
                <div className="rectangle-wrapper">
                  <div className="frame-child14" />
                </div>
                <div className="rectangle-wrapper">
                  <div className="frame-child14" />
                </div>
                <div className="rectangle-wrapper">
                  <div className="frame-child16" />
                </div>
                <div className="rectangle-wrapper">
                  <div className="frame-child17" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="students-performance">Average score</div>
              <div className="priyanshu-gupta-parent">
                <div className="students-performance">72</div>
                <div className="students-performance">65</div>
                <div className="students-performance">22</div>
                <div className="students-performance">54</div>
                <div className="students-performance">56</div>
                <div className="students-performance">32</div>
              </div>
            </div>
            <div className="container">
              <div className="last-score-parent">
                <div className="students-performance">Last score</div>
                <img className="bxsort-icon1" alt="" src="/bxsort.svg" />
              </div>
              <div className="priyanshu-gupta-parent">
                <div className="students-performance">72</div>
                <div className="students-performance">65</div>
                <div className="students-performance">22</div>
                <div className="students-performance">54</div>
                <div className="students-performance">56</div>
                <div className="students-performance">32</div>
              </div>
            </div>
            <div className="frame-parent43">
              <div className="frame-child18" />
              <div className="frame-parent40">
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
                <div className="remove-wrapper">
                  <div className="remove">Remove</div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-group">
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
          </div>
          <button className="view-more-parent">
            <div className="view-more">View more</div>
            <img
              className="riarrow-drop-down-line-icon"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </button>
          <div className="frame-parent45">
            <div className="students-average-growth-analys-parent">
              <div className="students-average-growth">
                Students Average Growth Analysis
              </div>
              <div className="number-parent">
                <div className="number">
                  <div className="parent4">
                    <div className="div24">80</div>
                    <div className="div24">60</div>
                    <div className="div24">40</div>
                    <div className="div24">20</div>
                    <div className="div28">0</div>
                  </div>
                </div>
                <div className="line-container">
                  <img className="line-icon" alt="" src="/line.svg" />
                  <img className="vector-icon12" alt="" src="/vector11.svg" />
                  <img className="vector-icon13" alt="" src="/vector12.svg" />
                  <img className="elipes-icon" alt="" src="/elipes.svg" />
                  <div className="tool-tip">
                    <img className="union-icon" alt="" src="/union.svg" />
                    <div className="tool-tip-inner">
                      <div className="marks-parent">
                        <div className="marks">Marks</div>
                        <div className="div29">67</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-child26" />
                </div>
                <div className="feb-21-parent">
                  <div className="remove">Feb 21</div>
                  <div className="remove">Feb 22</div>
                  <div className="remove">Feb 23</div>
                  <div className="remove">Feb 21</div>
                  <div className="remove">Feb 21</div>
                  <div className="remove">Feb 21</div>
                  <div className="remove">Feb 21</div>
                  <div className="remove">Feb 21</div>
                </div>
              </div>
            </div>
            <div className="job-wise-analysis-parent">
              <div className="students-average-growth">Job-wise analysis</div>
              <div className="chart-2-parent">
                <img className="chart-2-icon" alt="" src="/chart-2.svg" />
                <div className="legend-label-2-parent">
                  <div className="legend-label-2">
                    <div className="legend-indicator-1" />
                    <div className="product-design">SDE 1</div>
                  </div>
                  <div className="legend-label-2">
                    <div className="legend-indicator-11" />
                    <div className="product-design">Product design</div>
                  </div>
                  <div className="legend-label-2">
                    <div className="legend-indicator-12" />
                    <div className="product-design">Product design</div>
                  </div>
                  <div className="legend-label-2">
                    <div className="legend-indicator-13" />
                    <div className="product-design">Data Analyst</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="icbaseline-plus-container"
            onClick={openAddStudentsPopup}
          >
            <img
              className="riarrow-drop-down-line-icon"
              alt=""
              src="/icbaselineplus1.svg"
            />
            <div className="add-students3">Add students</div>
          </button>
        </div>
      </div>
      {isAddStudentsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddStudentsPopup}
        >
          <AddStudentsPopup onClose={closeAddStudentsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardAdmin;
