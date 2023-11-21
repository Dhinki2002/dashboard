import "./StudentsAddedSuccessfullyPopup.css";

const StudentsAddedSuccessfullyPopup = ({ onClose }) => {
  return (
    <div className="studentsaddedsuccessfullypopup">
      <div className="studentsaddedsuccessfullypopup-inner">
        <div className="vector-parent">
          <img className="vector-icon4" alt="" src="/vector4.svg" />
          <div className="frame-parent22">
            <div className="students-added-succesfully-wrapper">
              <div className="students-added-succesfully">
                Students added succesfully
              </div>
            </div>
            <div className="monitor-their-progress">
              Monitor their progress with ease!
            </div>
          </div>
        </div>
      </div>
      <button className="basilcross-outline3" onClick={onClose}>
        <img className="vector-icon5" alt="" src="/vector5.svg" />
      </button>
    </div>
  );
};

export default StudentsAddedSuccessfullyPopup;
