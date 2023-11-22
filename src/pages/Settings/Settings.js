import { useCallback } from "react";
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import SettingsPane from '../../components/SettingsPane/SettingsPane.js';
import { Link, useNavigate } from "react-router-dom";
import "./Settings.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Settings = () => {
  const navigate = useNavigate();
  const counter = 4;
  const settingsCounter = 0;

  const [skills, setSkills] = useState(["Machine learning"]);
  const [newSkill, setNewSkill] = useState("");

  const [name, setName] = useState("Priyanshu Gupta");
  const [email, setEmail] = useState("87priyanshugupta@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("7727042145");
  const [collegeName, setcollegeName] = useState(
    "Indian Institute of Technology"
  );
  const [year, setYear] = useState("2025");
  const [targetRoles, setTargetRoles] = useState("SDE-1");
  const [editMode, setEditMode] = useState(false);

  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="settings5">
      <Helmet>
        <title>Settings Individual</title>
        <meta name="desc" content="Settings Individual" />
      </Helmet>
      <Navbar counter={counter} />
      <Header />
      <div className="rectangle-parent4">
        <SettingsPane settingsCounter={settingsCounter} />
        <div className="my-profile7">My Profile</div>
        <div className="frame-parent196">
          <div className="frame-parent197">
            <div className="email-address-container">
              <div className="college-name">Name</div>
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{name}</div>
              )}
            </div>
            <div className="email-address-container">
              <div className="college-name">Email address</div>
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{email}</div>
              )}
            </div>
            <div className="email-address-container">
              <div className="college-name">Phone number</div>
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{phoneNumber}</div>
              )}
            </div>
            <div className="frame-parent198">
              <div className="password-parent1">
                <div className="college-name">Password</div>
                <Link
                  to="/"
                  className="change-password3"
                  onClick={() => navigate("/")}
                >
                  Change Password
                </Link>
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
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={collegeName}
                  onChange={(e) => setcollegeName(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{collegeName}</div>
              )}
            </div>
          </div>
          <div className="frame-parent197">
            <div className="email-address-container">
              <div className="college-name">Graduation year</div>
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{year}</div>
              )}
            </div>
            <div className="skills-container">
              <div className="college-name">Skills</div>
              <div className="frame-parent200">
                {skills.map((skill, index) => (
                  <div key={index} className="machine-learning-wrapper1">
                    <div className="machine-learning5">{skill}</div>
                    {editMode && (
                      <img
                        className="close-button"
                        alt=""
                        src="/vector100.svg"
                        onClick={() => handleDeleteSkill(index)}
                      />
                    )}
                  </div>
                ))}
                {editMode && (
                  <input
                    className="indian-institute-of"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddSkill();
                      }
                    }}
                    placeholder="Enter Skill then press Enter"
                  />
                )}
              </div>
            </div>
            <div className="email-address-container">
              <div className="college-name">Target Role</div>
              {editMode ? (
                <input
                  className="indian-institute-of"
                  value={targetRoles}
                  onChange={(e) => setTargetRoles(e.target.value)}
                />
              ) : (
                <div className="indian-institute-of">{targetRoles}</div>
              )}
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
        <button className="frame-wrapper80" onClick={handleEditClick}>
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