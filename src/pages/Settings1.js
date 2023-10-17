import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SettingsPane from "../components/SettingsPane";
import "./Settings1.css";

const Settings1 = () => {
  const counter=4;
  const settingsCounter=1;
  return (
    <div className="settings1">
      <Navbar counter={counter}/>
      <Header />
      <div className="rectangle-parent">
        <SettingsPane settingsCounter={settingsCounter}/>
        <div className="change-your-password">Change your password</div>
        <div className="frame-container">
          <div className="billing-wrapper">
            <div className="frame-div">
              <div className="password-container">
                <div className="password">Password</div>
              </div>
              <input className="frame-child" type="password" />
            </div>
          </div>
          <div className="frame-div">
            <div className="password">New Password</div>
            <input
              className="frame-item"
              placeholder="Confirm your password"
              type="password"
            />
          </div>
          <div className="frame-div">
            <div className="password">Confirm New Password</div>
            <input
              className="frame-item"
              placeholder="Confirm your password"
              type="password"
            />
          </div>
          <button className="change-password-wrapper">
            <div className="change-password">Change password</div>
          </button>
        </div>
        {/* <div className="my-profile">My Profile</div> */}
      </div>
      <div className="settings">Settings</div>
    </div>
  );
};

export default Settings1;
