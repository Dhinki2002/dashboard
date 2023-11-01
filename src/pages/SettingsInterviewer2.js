import InterviewerNavbar from "../components/InterviewerNavbar";
import Header from "../components/Header";
import InterviewerSettingsPane from "../components/InterviewerSettingsPane";
import "./Settings2.css";
import { Helmet } from "react-helmet";

const InterviewerSettings2 = () => {
  const counter=0;
  const settingsCounter=2;
  return (
    <div className="settings21">
      <Helmet>
      <title>Settings Individual2</title>
      <meta name="desc"
        content="Settings Individual2"/>
      </Helmet>
      <InterviewerNavbar counter={counter}/>
      <Header />
      <div className="rectangle-parent3">
        <InterviewerSettingsPane settingsCounter={settingsCounter}/>
        <div className="change-your-password">Billing</div>
        <div className="current-plan-parent">
          <div className="current-plan">Current plan:</div>
          <div className="free">Free</div>
        </div>
        <div className="frame-parent186">
          <div className="frame-parent187">
            <div className="group-container">
              <img className="frame-child144" alt="" src="/group-589.svg" />
              <div className="current-plan">Basic Plan</div>
            </div>
            <div className="div143">$50</div>
            <div className="frame-parent188">
              <div className="charmtick-parent">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
            </div>
            <button className="upgrade-to-basic-wrapper">
              <div className="upgrade-to-basic">Upgrade to Basic</div>
            </button>
          </div>
          <div className="frame-parent189">
            <div className="group-container">
              <img className="frame-child144" alt="" src="/group-5891.svg" />
              <div className="current-plan">Free Plan</div>
            </div>
            <div className="div143">$0</div>
            <button className="current-plan-wrapper">
              <div className="upgrade-to-basic">Current Plan</div>
            </button>
            <div className="frame-parent188">
              <div className="charmtick-parent">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
            </div>
          </div>
          <div className="frame-parent191">
            <div className="group-container">
              <img className="frame-child144" alt="" src="/group-5892.svg" />
              <div className="current-plan">Pro Plan</div>
            </div>
            <div className="div143">$70</div>
            <button className="upgrade-to-pro-wrapper">
              <div className="upgrade-to-basic">Upgrade to Pro</div>
            </button>
            <div className="frame-parent188">
              <div className="charmtick-parent">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
              <div className="charmtick-group">
                <img className="charmtick-icon" alt="" src="/charmtick.svg" />
                <div className="current-plan">Features</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="settings4">Settings</div>
    </div>
  );
};

export default InterviewerSettings2;
