import { useState, useCallback } from "react";
import AddStudentsPopup from "../components/AddStudentsPopup";
import PortalPopup from "../components/PortalPopup";
import AdminNavbar from "../components/AdminNavbar";
import AdminHeader from "../components/AdminHeader";
import "./DashboardAdmin.css";
import GrowthAnalysis from "../components/GrowthAnalysis";
import PieAnalysis from "../components/PieAnalysis";


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
           <GrowthAnalysis/>
            <PieAnalysis/>
           
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
