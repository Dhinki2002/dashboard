import { useState, useCallback } from "react";
import AddStudentsPopup from '../../components/AddStudentsPopup/AddStudentsPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.js';
import AdminHeader from '../../components/AdminHeader/AdminHeader.js';
import "./DashboardAdmin.css";
import GrowthAnalysis from '../../components/GrowthAnalysis/GrowthAnalysis.js';
import PieAnalysis from '../../components/PieAnalysis/PieAnalysis.js';
import Analyis from '../../components/Analyis/Analyis.js';
import { Helmet } from "react-helmet";



const DashboardAdmin = () => {
  const [isAddStudentsPopupOpen, setAddStudentsPopupOpen] = useState(false);

  const openAddStudentsPopup = useCallback(() => {
    setAddStudentsPopupOpen(true);
  }, []);

  const closeAddStudentsPopup = useCallback(() => {
    setAddStudentsPopupOpen(false);
  }, []);

  const counter = 0;

  return (
    <>
    <Helmet>
      <title>Admin Dashboard</title>
      <meta name="desc"
        content="Admin dashboard"/>
      </Helmet>
      <div className="dashboard-admin">
        <AdminNavbar counter={counter} />
        <AdminHeader />
        <div className="frame-parent38">
         <Analyis/>
          <button className="view-more-parent">
            <div className="view-more">View more</div>
            <img
              className="riarrow-drop-down-line-icon"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </button>

          <div className="frame-parent45">
            <GrowthAnalysis />
            <PieAnalysis />

          </div>
          <button
            className="icbaseline-plus-container"
            onClick={openAddStudentsPopup}
          >
            <img
              className="riarrow-drop-down-line-icon"
              alt=""
              src="/icbaselineplus1.svg"
            />
            <div className="add-students3">Add students</div>
          </button>
        </div>
      </div>
      {isAddStudentsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddStudentsPopup}
        >
          <AddStudentsPopup onClose={closeAddStudentsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardAdmin;