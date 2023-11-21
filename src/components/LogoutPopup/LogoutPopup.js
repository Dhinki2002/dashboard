import "./LogoutPopup.css";

const LogoutPopup = ({ onClose }) => {
  return (
    <div className="logoutpopup">
      <button className="basilcross-outline" onClick={onClose}>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </button>
      <div className="frame-parent1">
        <div className="are-you-sure-wrapper">
          <div className="are-you-sure-wrapper">
            <div className="are-you-sure">Are you sure?</div>
          </div>
        </div>
        <div className="frame-parent2">
          <button className="frame-button">
            <div className="log-out-wrapper">
              <div className="log-out">Log out</div>
            </div>
          </button>
          <button className="cancel-wrapper" onClick={onClose}>
            <div className="cancel">Cancel</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
