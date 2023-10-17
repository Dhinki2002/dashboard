import "./NotificationPopup.css";

const NotificationPopup = ({ onClose }) => {
  return (
    <div className="notificationpopup">
      <div className="frame-parent3">
        <div className="frame-wrapper2">
          <div className="text-parent">
            <div className="text" />
            <div className="test-scheduled-at">
              Test scheduled at 12 pm today.
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="text-parent">
            <div className="text" />
            <div className="test-scheduled-at">
              Test scheduled at 12 pm today.
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="frame-wrapper4">
          <div className="test-scheduled-at-12-pm-today-wrapper">
            <div className="text">Test scheduled at 12 pm today.</div>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="test-scheduled-at-12-pm-today-wrapper">
            <div className="text">Test scheduled at 12 pm today.</div>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="test-scheduled-at-12-pm-today-wrapper">
            <div className="text">Test scheduled at 12 pm today.</div>
          </div>
        </div>
      </div>
      <button className="basilcross-outline1" onClick={onClose}>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </button>
      <div className="notifications">Notifications</div>
      <div className="older-notifications">Older notifications</div>
    </div>
  );
};

export default NotificationPopup;
