import { useState, useCallback } from "react";
import FASTPopup from '../../components/FASTPopup/FASTPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import "./GoScoreDashboardIndividual.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import GrowthAnalysis from '../../components/GrowthAnalysis/GrowthAnalysis.js';
import OverallAnalysis from '../../components/OverallAnalysis/OverallAnalysis.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import { Helmet } from "react-helmet";

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
      <Helmet>
      <title>Go Score Dashboard</title>
      <meta name="desc"
        content="Go Score Dashboard Indvidual"/>
      </Helmet>
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
