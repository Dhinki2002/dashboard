import { useState, useCallback } from "react";
import StudentsAddedSuccessfullyPopup from "./StudentsAddedSuccessfullyPopup";
import PortalPopup from "./PortalPopup";
import "./AddStudents2Popup.css";

const AddStudents2Popup = ({ onClose }) => {
  const [
    isStudentsAddedSuccessfullyPopupOpen,
    setStudentsAddedSuccessfullyPopupOpen,
  ] = useState(false);

  const openStudentsAddedSuccessfullyPopup = useCallback(() => {
    setStudentsAddedSuccessfullyPopupOpen(true);
  }, []);

  const closeStudentsAddedSuccessfullyPopup = useCallback(() => {
    setStudentsAddedSuccessfullyPopupOpen(false);
  }, []);

  return (
    <>
      <div className="addstudents2popup">
        <div className="addstudents2popup-inner">
          <div className="frame-parent18">
            <div className="add-students-parent">
              <div className="add-students-parent">
                <div className="add-students">Add students</div>
                <div className="upload-list-of">
                  Upload list of students or add manually
                </div>
              </div>
            </div>
            <div className="frame-parent19">
              <div className="frame-wrapper10">
                <div className="frame-wrapper11">
                  <div className="frame-wrapper12">
                    <div className="frame-parent20">
                      <div className="phfile-csv-duotone-parent">
                        <img
                          className="phfile-csv-duotone-icon"
                          alt=""
                          src="/phfilecsvduotone.svg"
                        />
                        <div className="frame-parent21">
                          <div className="studentcsv-wrapper">
                            <div className="studentcsv">student.csv</div>
                          </div>
                          <img
                            className="vector-icon2"
                            alt=""
                            src="/vector2.svg"
                          />
                        </div>
                      </div>
                      <div className="students-detected">
                        1200 students detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="pay-for1200-students-wrapper"
                onClick={openStudentsAddedSuccessfullyPopup}
              >
                <div className="pay-for1200-students">Pay for1200 students</div>
              </button>
            </div>
          </div>
        </div>
        <button className="basilcross-outline2" onClick={onClose}>
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isStudentsAddedSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStudentsAddedSuccessfullyPopup}
        >
          <StudentsAddedSuccessfullyPopup
            onClose={closeStudentsAddedSuccessfullyPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default AddStudents2Popup;
