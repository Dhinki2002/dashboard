import { useState, useCallback } from "react";
import FASTPopup from "../components/FASTPopup";
import PortalPopup from "../components/PortalPopup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./GoScoreDashboardIndividual.css";
import MyGoScore from "../components/MyGoScore";
import GrowthAnalysis from "../components/GrowthAnalysis";
import OverallAnalysis from "../components/OverallAnalysis";
import { TopicWiseAnalysis } from "../components/TopicWiseAnalysis";

const GoScoreDashboardIndividual = () => {
  const [isFASTPopupOpen, setFASTPopupOpen] = useState(false);

  const openFASTPopup = useCallback(() => {
    setFASTPopupOpen(true);
  }, []);

  const closeFASTPopup = useCallback(() => {
    setFASTPopupOpen(false);
  }, []);

  const counter = 0;

  const data = [72, 65, 22, 54, 56, 32]

  return (
    <div>
      <div className="go-score-dashboard-individual">
        <Navbar counter={counter} />
        <Header />
        <TopicWiseAnalysis/>
        <div className="frame-parent205">
          <GrowthAnalysis />
          <OverallAnalysis />
        </div>
        <div className="frame-parent206">
          <div className="frame-parent207">
            <button className="attempt-now-container" onClick={openFASTPopup}>
              <div className="attempt-now1">Attempt now</div>
            </button>
            <div className="students-took-fulcrum-container">
              <p className="students-took">{`1387+ students took `}</p>
              <p className="students-took">{`Fulcrum Assessment Skill Test `}</p>
            </div>
          </div>
          <MyGoScore />

        </div>
      </div>
      {isFASTPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFASTPopup}
        >
          <FASTPopup onClose={closeFASTPopup} />
        </PortalPopup>
      )}
      </div>
  );
};

export default GoScoreDashboardIndividual;
