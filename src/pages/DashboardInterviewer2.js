import { useCallback } from "react";
import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import { useNavigate } from "react-router-dom";
import "./DashboardInterviewer2.css";

const DashboardInterviewer2 = () => {
  const navigate = useNavigate();

  const onMdicardOutlineClick = useCallback(() => {
    navigate("/dashboardinterviewer");
  }, [navigate]);

  return (
    <div className="dashboard-interviewer2">
      <InterviewerNavbar />
      <InterviewerHeader />
      <div className="dashboard-interviewer2-inner">
        <div className="frame-parent46">
          <div className="scheduled-interviews-wrapper">
            <div className="scheduled-interviews">Scheduled interviews</div>
          </div>
          <button className="mdicard-outline" onClick={onMdicardOutlineClick}>
            <img className="vector-icon14" alt="" src="/vector13.svg" />
          </button>
          <div className="line-parent1">
            <div className="frame-child27" />
            <div className="frame-child28" />
            <div className="frame-child29" />
            <div className="frame-child30" />
            <div className="frame-child31" />
            <div className="frame-child32" />
            <div className="frame-child33" />
            <div className="frame-child34" />
            <div className="aug-parent">
              <div className="aug">31 Aug</div>
              <div className="scheduled-interviews">1 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
            </div>
            <div className="sept-parent">
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
            </div>
            <div className="sept-group">
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
            </div>
            <div className="sept-container">
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
              <div className="scheduled-interviews">2 Sept</div>
            </div>
            <div className="frame-parent47">
              <div className="pm-100-pm-wrapper">
                <div className="pm-100-pm">12:00 pm-1:00 pm</div>
              </div>
              <div className="pm-600-pm-wrapper">
                <div className="pm-100-pm">4:00 pm-6:00 pm</div>
              </div>
            </div>
            <div className="frame-parent48">
              <div className="pm-100-pm-container">
                <div className="pm-100-pm">12:00 pm-1:00 pm</div>
              </div>
              <div className="pm-600-pm-container">
                <div className="pm-100-pm">4:00 pm-6:00 pm</div>
              </div>
            </div>
          </div>
          <div className="oouinext-ltr-parent">
            <img className="oouinext-ltr-icon" alt="" src="/oouinextltr.svg" />
            <div className="scheduled-interviews">September</div>
            <img className="oouinext-ltr-icon" alt="" src="/oouinextltr1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInterviewer2;
