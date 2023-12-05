import { useState, useCallback } from "react";
import FASTPopup from '../../components/FASTPopup/FASTPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
// import "./GoScoreDashboardIndividual.css";
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
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--icon-grey)];
    font-family: var(--font-avenir-lt-std)">
      <Helmet>
      <title>Go Score Dashboard</title>
      <meta name="desc"
        content="Go Score Dashboard Indvidual"/>
      </Helmet>
        <Navbar counter={counter} />
        <Header />
        <TopicWiseAnalysis/>
        <div className="absolute flex flex-row items-start justify-start gap-[var(--gap-xl)] text-right text-[length:var(--en-regular-size)] text-[color:var(--black)] left-[21.03vw] top-[39.55vw]">
          <GrowthAnalysis />
          <OverallAnalysis />
        </div>
        <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-xl)] text-[length:var(--font-size-lg)] text-[color:var(--text)] left-[73.28vw] top-[9.13vw]">
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.34vw] h-[10.32vw] overflow-hidden shrink-0">
            <button className="cursor-pointer border-[color:var(--purple)] pt-[var(--padding-sm)] pr-[var(--padding-98xl)] pb-[var(--padding-sm)] pl-[var(--padding-98xl)] bg-[color:var(--color-mediumslateblue-100)] absolute left-[calc(50%_-_10.98vw)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-[0.07vw] border-solid top-[6.15vw]" onClick={openFASTPopup}>
              <div className=" font-family: var(--font-avenir-lt-std)">Attempt now</div>
            </button>
            <div className="absolute inline-block w-[16.07vw] opacity-80 left-[1.59vw] top-[1.59vw]">
              <p className=" @apply m-0">{`1387+ students took `}</p>
              <p className="m-0;">{`Fulcrum Assessment Skill Test `}</p>
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
