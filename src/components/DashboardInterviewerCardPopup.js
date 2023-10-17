import "./DashboardInterviewerCardPopup.css";

const DashboardInterviewerCardPopup = ({ onClose }) => {
  return (
    <div className="dashboardinterviewercardpopup">
      <div className="frame-parent51">
        <div className="company-logo-parent">
          <div className="company-logo-parent">
            <img
              className="company-logo-icon1"
              alt=""
              src="/company-logo1.svg"
            />
            <div className="sde-1-interview-parent">
              <div className="sde-1-interview">SDE-1 Interview</div>
              <div className="saturday-august-29-parent">
                <div className="sde-1-interview">Saturday, August 29</div>
                <div className="sde-1-interview">02:00 pm-3:00 pm</div>
              </div>
            </div>
          </div>
          <div className="frame-parent53">
            <div className="sde-1-interview-parent">
              <div className="dos-parent">
                <button className="dos">Do’s</button>
                <button className="dos">Don’ts</button>
              </div>
              <img className="group-icon" alt="" src="/group-591.svg" />
            </div>
            <div className="dress-professionally-to-make-a-wrapper">
              <div className="dress-professionally-to-container">
                <ul className="dress-professionally-to-make-a">
                  <li className="dress-professionally-to">
                    Dress professionally to make a positive first impression.
                  </li>
                  <li className="dress-professionally-to">
                    Dress professionally to make a positive first impression.
                  </li>
                  <li>
                    Dress professionally to make a positive first impression.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent55">
          <button className="start-now-parent">
            <div className="start-now">Start Now</div>
            <img
              className="solarplay-bold-icon"
              alt=""
              src="/solarplaybold.svg"
            />
          </button>
          <button className="reschedule-wrapper">
            <div className="reschedule">Reschedule</div>
          </button>
          <button className="cancel-container" onClick={onClose}>
            <div className="cancel1">Cancel</div>
          </button>
        </div>
      </div>
      <button className="basilcross-outline8" onClick={onClose}>
        <img className="vector-icon16" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default DashboardInterviewerCardPopup;
