import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SettingsPane from "../components/SettingsPane";
import "./Settings2.css";

const Settings2 = () => {
  const counter=4;
  const settingsCounter=2;
  return (
    <div className="settings21">
      <Navbar counter={counter}/>
      <Header />
      <div className="rectangle-parent3">
        <SettingsPane settingsCounter={settingsCounter}/>
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
        {/* <div className="frame-parent193">
          <div className="my-profile-frame">
            <div className="my-profile5">My Profile</div>
          </div>
          <div className="password-frame">
            <div className="my-profile5">Password</div>
          </div>
          <div className="frame-wrapper79">
            <div className="billing-frame">
              <div className="my-profile5">Billing</div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="settings4">Settings</div>
    </div>
  );
};

export default Settings2;
