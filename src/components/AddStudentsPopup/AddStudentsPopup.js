import { useState, useCallback } from "react";
import AddStudents2Popup from "../AddStudents2Popup/AddStudents2Popup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import AddStudentsManualPopup from "../AddStudentsManualPopup/AddStudentsManualPopup.js";


const AddStudentsPopup = ({ onClose }) => {
  const [isAddStudents2PopupOpen, setAddStudents2PopupOpen] = useState(false);
  const [isAddStudentsManualPopupOpen, setAddStudentsManualPopupOpen] =
    useState(false);

  const openAddStudents2Popup = useCallback(() => {
    setAddStudents2PopupOpen(true);
  }, []);

  const closeAddStudents2Popup = useCallback(() => {
    setAddStudents2PopupOpen(false);
  }, []);

  const openAddStudentsManualPopup = useCallback(() => {
    setAddStudentsManualPopupOpen(true);
  }, []);

  const closeAddStudentsManualPopup = useCallback(() => {
    setAddStudentsManualPopupOpen(false);
  }, []);

  return (
    <>
      <div className="addstudentspopup">
        <div className="addstudentspopup-inner">
          <div className="frame-parent26">
            <div className="add-students-container">
              <div className="add-students-container">
                <div className="add-students2">Add students</div>
                <div className="upload-list-of2">
                  Upload list of students or add manually
                </div>
              </div>
            </div>
            <div className="frame-parent27">
              <button
                className="frame-wrapper17"
                onClick={openAddStudents2Popup}
              >
                <div className="frame-wrapper18">
                  <div className="frame-wrapper19">
                    <div className="frame-parent28">
                      <div className="upload-list-of-students-parent">
                        <div className="upload-list-of3">
                          Upload list of students
                        </div>
                        <img
                          className="biupload-icon"
                          alt=""
                          src="/biupload.svg"
                        />
                      </div>
                      <div className="add-manually-wrapper">
                        <div className="csv-xlsx-json-file-are-allow-wrapper">
                          <div className="csv-xlsx-json">
                            (csv, xlsx, json file are allowed)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div className="line-parent">
                <div className="line-div" />
                <div className="or">or</div>
                <div className="line-div" />
              </div>
              <button
                className="frame-wrapper21"
                onClick={openAddStudentsManualPopup}
              >
                <div className="icbaseline-plus-parent">
                  <img
                    className="icbaseline-plus-icon"
                    alt=""
                    src="/icbaselineplus.svg"
                  />
                  <div className="add-manually-wrapper">
                    <div className="add-manually">Add manually</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <button className="basilcross-outline5" onClick={onClose}>
          <img className="vector-icon7" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isAddStudents2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddStudents2Popup}
        >
          <AddStudents2Popup onClose={closeAddStudents2Popup} />
        </PortalPopup>
      )}
      {isAddStudentsManualPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddStudentsManualPopup}
        >
          <AddStudentsManualPopup onClose={closeAddStudentsManualPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddStudentsPopup;
