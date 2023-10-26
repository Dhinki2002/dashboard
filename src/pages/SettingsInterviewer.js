import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import InterviewerSettingsPane from "../components/InterviewerSettingsPane";
import "./SettingsInterviewer.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

const SettingsInterviewer = () => {
  const counter=2;

   const [name, setName] = useState("Priyanshu Gupta");
   const [email, setEmail] = useState("87priyanshugupta@gmail.com");
   const [phoneNumber, setPhoneNumber] = useState("7727042145");
   const [Qualification, setQualification] = useState("Bachelor of Technology");
   const [graduationYear, setGraduationYear] = useState("2025");
   const [jobRole, setJobRole] = useState("SDE-2");
   const [company, setCompany] = useState("Amazon");
   const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
  setEditMode(!editMode);
  }

  return (
    <div className="settingsinterviewer">
      <Helmet>
      <title>Settings Interviewer</title>
      <meta name="desc"
        content="Settings Interviewer"/>
      </Helmet>
      <InterviewerNavbar counter={counter}/>
      <InterviewerHeader />
      <div className="rectangle-group">
        <InterviewerSettingsPane />
        <div className="frame-parent5">
          <div className="my-profile-wrapper">
            <div className="my-profile1">My Profile</div>
          </div>
          <div className="frame-child1" />
        </div>
        <div className="my-profile2">My Profile</div>
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="name-parent">
              <div className="name">Name</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{name}</div>
              )}
            </div>
            <div className="name-parent">
              <div className="name">Email address</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{email}</div>
              )}
            </div>
            <div className="name-parent">
              <div className="name">Phone number</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{phoneNumber}</div>
              )}
            </div>
            <div className="frame-parent8">
              <div className="password-parent">
                <div className="name">Password</div>
                <div className="change-password1">Change Password</div>
              </div>
              <div className="parent">
                <div className="div1">..............</div>
                <img
                  className="carbonview-off-icon"
                  alt=""
                  src="/carbonviewoff.svg"
                />
              </div>
            </div>
            <div className="name-parent">
              <div className="name">Qualification</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={Qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{Qualification}</div>
              )}
            </div>
            <div className="name-parent">
              <div className="name">Graduation year</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{graduationYear}</div>
              )}
            </div>
          </div>
          <div className="frame-parent7">
            <div className="skills-parent">
              <div className="name">Skills</div>
              <div className="frame-parent10">
                <div className="machine-learning-wrapper">
                  <div className="machine-learning">Machine learning</div>
                </div>
                <div className="machine-learning-wrapper">
                  <div className="machine-learning">Machine learning</div>
                </div>
                <div className="machine-learning-wrapper">
                  <div className="machine-learning">Machine learning</div>
                </div>
              </div>
            </div>
            <div className="name-parent">
              <div className="name">Job Role</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{jobRole}</div>
              )}
            </div>
            <div className="name-parent">
              <div className="name">Company</div>
              {editMode ? (
                <input
                  className="priyanshu-gupta"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              ) : (
                <div className="priyanshu-gupta">{company}</div>
              )}
            </div>
            <div className="frame-parent11">
              <div className="name-parent">
                <div className="name">Delete your acccount</div>
                <div className="this-will-permanently">
                  This will permanently delete your account.
                </div>
              </div>
              <button className="delete-account-wrapper">
                <div className="delete-account">Delete Account</div>
              </button>
            </div>
          </div>
        </div>
        <button className="frame-wrapper7" onClick={handleEditClick}>
          <div className="tableredit-parent">
            <img className="tableredit-icon" alt="" src="/tableredit.svg" />
            <div className="edit">Edit</div>
          </div>
        </button>
      </div>
      <div className="settings2">Settings</div>
    </div>
  );
};

export default SettingsInterviewer;
