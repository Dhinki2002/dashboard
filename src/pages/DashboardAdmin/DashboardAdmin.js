import { useState, useCallback } from "react";
import AddStudentsPopup from '../../components/AddStudentsPopup/AddStudentsPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.js';
import AdminHeader from '../../components/AdminHeader/AdminHeader.js';
// import "./DashboardAdmin.css";
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
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--color-darkslategray-200)]">
        <AdminNavbar counter={counter} />
        <AdminHeader />
        <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[31.55vw] left-[21.03vw] top-[9.13vw]">
         <Analyis/>
          <button className="cursor-pointer bg-transparent absolute left-[calc(50%_-_2.98vw)] flex flex-row items-center justify-start gap-[var(--gap-9xs)] p-0 border-0 top-[28.04vw]">
            <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left">View more</div>
            <img
              className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
              alt=""
              src="/riarrowdropdownline.svg"
            />
          </button>

          <div className="absolute flex flex-row items-start justify-start gap-[var(--gap-xl)] left-0 top-[31.54vw]">
            <GrowthAnalysis />
            <PieAnalysis />

          </div>
          <button
            className="icbaseline-plus-container"
            onClick={openAddStudentsPopup}
          >
            <img
              className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
              alt=""
              src="/icbaselineplus1.svg"
            />
            <div className="relative text-[1.05vw] text-[color:var(--white)] text-left font-[bold]">Add students</div>
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
