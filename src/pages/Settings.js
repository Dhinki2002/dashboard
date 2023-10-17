import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SettingsPane from "../components/SettingsPane";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const counter=4;
  const settingsCounter=0;

  return (
    <div className="settings5">
      <Navbar counter={counter}/>
      <Header />
      <div className="rectangle-parent4">
        <SettingsPane settingsCounter={settingsCounter}/>
        <div className="my-profile7">My Profile</div>
        <div className="frame-parent196">
          <div className="frame-parent197">
            <div className="email-address-container">
              <div className="college-name">Name</div>
              <div className="indian-institute-of">Priyanshu Gupta</div>
            </div>
            <div className="email-address-container">
              <div className="college-name">Email address</div>
              <div className="indian-institute-of">
                87priyanshugupta@gmail.com
              </div>
            </div>
            <div className="email-address-container">
              <div className="college-name">Phone number</div>
              <div className="indian-institute-of">7727042145</div>
            </div>
            <div className="frame-parent198">
              <div className="password-parent1">
                <div className="college-name">Password</div>
                <a className="change-password3">Change Password</a>
              </div>
              <div className="parent21">
                <div className="div147">..............</div>
                <img
                  className="carbonview-off-icon2"
                  alt=""
                  src="/carbonviewoff.svg"
                />
              </div>
            </div>
            <div className="email-address-container">
              <div className="college-name">College Name</div>
              <div className="indian-institute-of">
                Indian Institute of technology, Roorkee
              </div>
            </div>
          </div>
          <div className="frame-parent197">
            <div className="email-address-container">
              <div className="college-name">Graduation year</div>
              <div className="indian-institute-of">2025</div>
            </div>
            <div className="skills-container">
              <div className="college-name">Skills</div>
              <div className="frame-parent200">
                <div className="machine-learning-wrapper1">
                  <div className="machine-learning5">Machine learning</div>
                </div>
                <div className="machine-learning-wrapper1">
                  <div className="machine-learning5">Machine learning</div>
                </div>
                <div className="machine-learning-wrapper1">
                  <div className="machine-learning5">Machine learning</div>
                </div>
              </div>
            </div>
            <div className="email-address-container">
              <div className="college-name">Target Role</div>
              <div className="indian-institute-of">SDE-I</div>
            </div>
            <div className="frame-parent201">
              <div className="email-address-container">
                <div className="college-name">Delete your acccount</div>
                <div className="this-will-permanently2">
                  This will permanently delete your account.
                </div>
              </div>
              <button className="delete-account-frame">
                <div className="delete-account2">Delete Account</div>
              </button>
            </div>
          </div>
        </div>
        <button className="frame-wrapper80">
          <div className="tableredit-container">
            <img className="tableredit-icon2" alt="" src="/tableredit1.svg" />
            <div className="edit2">Edit</div>
          </div>
        </button>
      </div>
      <div className="settings6">Settings</div>
    </div>
  );
};

export default Settings;
