import { useState, useCallback } from "react";
import ScheduleTestPopup from "../components/ScheduleTestPopup";
import PortalPopup from "../components/PortalPopup";
import AdminNavbar from "../components/AdminNavbar";
import AdminHeader from "../components/AdminHeader";
import "./AdminTest.css";

const AdminTest = () => {
  const [isScheduleTestPopupOpen, setScheduleTestPopupOpen] = useState(false);

  const openScheduleTestPopup = useCallback(() => {
    setScheduleTestPopupOpen(true);
  }, []);

  const closeScheduleTestPopup = useCallback(() => {
    setScheduleTestPopupOpen(false);
  }, []);

  const counter=1;

  return (
    <>
      <div className="admintest">
        <AdminNavbar counter={counter}/>
        <AdminHeader />
        <div className="frame-parent36">
          <div className="active-tests-wrapper">
            <div className="active-tests">Active tests</div>
          </div>
          <div className="frame-parent37">
            <button className="vector-group">
              <img className="vector-icon11" alt="" src="/vector7.svg" />
              <img
                className="company-logo-icon"
                alt=""
                src="/company-logo.svg"
              />
            </button>
            <img className="frame-icon" alt="" src="/frame-1182.svg" />
            <img className="frame-icon" alt="" src="/frame-1183.svg" />
            <img className="frame-icon" alt="" src="/frame-1182.svg" />
            <img className="frame-icon" alt="" src="/frame-1189.svg" />
            <img className="frame-icon" alt="" src="/frame-1183.svg" />
          </div>
          <button
            className="icbaseline-plus-group"
            onClick={openScheduleTestPopup}
          >
            <img
              className="icbaseline-plus-icon1"
              alt=""
              src="/icbaselineplus1.svg"
            />
            <div className="add-new-test1">Add new test</div>
          </button>
        </div>
      </div>
      {isScheduleTestPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleTestPopup}
        >
          <ScheduleTestPopup onClose={closeScheduleTestPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminTest;
