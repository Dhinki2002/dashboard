import AdminNavbar from "../components/AdminNavbar";
import Header from "../components/Header";
import AdminSettingsPane from "../components/AdminSettingsPane";
import "./Settings1.css";
import { Helmet } from "react-helmet";

const AdminSettings1 = () => {
  const counter=1;
  const settingsCounter=1;
  return (
    <div className="settings1">
      <Helmet>
      <title>Settings Individual1</title>
      <meta name="desc"
        content="Settings Individual1"/>
      </Helmet>
      <AdminNavbar counter={counter}/>
      <Header />
      <div className="rectangle-parent">
        <AdminSettingsPane settingsCounter={settingsCounter}/>
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
      </div>
      <div className="settings">Settings</div>
    </div>
  );
};

export default AdminSettings1;
