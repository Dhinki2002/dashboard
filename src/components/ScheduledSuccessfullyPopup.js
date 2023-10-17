import "./ScheduledSuccessfullyPopup.css";

const ScheduledSuccessfullyPopup = ({ onClose }) => {
  return (
    <div className="scheduledsuccessfullypopup">
      <div className="scheduledsuccessfullypopup-inner">
        <div className="vector-parent6">
          <img className="vector-icon35" alt="" src="/vector4.svg" />
          <div className="frame-parent233">
            <div className="interview-scheduled-succesfull-wrapper">
              <div className="interview-scheduled-succesfull">
                Interview scheduled succesfully!
              </div>
            </div>
            <div className="sit-back-and">Sit back and relax.</div>
          </div>
        </div>
      </div>
      <button className="basilcross-outline13" onClick={onClose}>
        <img className="vector-icon36" alt="" src="/vector24.svg" />
      </button>
    </div>
  );
};

export default ScheduledSuccessfullyPopup;
