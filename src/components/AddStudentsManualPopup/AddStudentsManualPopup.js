import "./AddStudentsManualPopup.css";

const AddStudentsManualPopup = ({ onClose }) => {
  return (
    <div className="addstudentsmanualpopup">
      <div className="frame-parent23">
        <div className="frame-parent24">
          <div className="add-students-group">
            <div className="add-students-group">
              <div className="add-students1">Add students</div>
              <div className="upload-list-of1">
                Upload list of students or add manually
              </div>
            </div>
          </div>
          <div className="frame-wrapper14">
            <div className="frame-parent25">
              <div className="name-group">
                <div className="email">Name</div>
                <input
                  className="frame-input"
                  placeholder="Enter the name"
                  type="text"
                />
              </div>
              <div className="name-group">
                <div className="email">Email</div>
                <input
                  className="frame-input"
                  placeholder="Enter the email"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="frame-wrapper15">
          <div className="send-invite-wrapper">
            <div className="send-invite">Send invite</div>
          </div>
        </button>
      </div>
      <button className="basilcross-outline4" onClick={onClose}>
        <img className="vector-icon6" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default AddStudentsManualPopup;
