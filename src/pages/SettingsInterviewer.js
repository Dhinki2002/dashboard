import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import InterviewerSettingsPane from "../components/InterviewerSettingsPane";
import "./SettingsInterviewer.css";

const SettingsInterviewer = () => {
  const counter=2;
  return (
    <div className="settingsinterviewer">
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
              <div className="priyanshu-gupta">Priyanshu Gupta</div>
            </div>
            <div className="name-parent">
              <div className="name">Email address</div>
              <div className="priyanshu-gupta">87priyanshugupta@gmail.com</div>
            </div>
            <div className="name-parent">
              <div className="name">Phone number</div>
              <div className="priyanshu-gupta">7727042145</div>
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
              <div className="priyanshu-gupta">Bachelor of technology</div>
            </div>
            <div className="name-parent">
              <div className="name">Graduation year</div>
              <div className="priyanshu-gupta">2025</div>
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
              <div className="priyanshu-gupta">SDE-II</div>
            </div>
            <div className="name-parent">
              <div className="name">Company</div>
              <div className="priyanshu-gupta">Amazon</div>
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
        <button className="frame-wrapper7">
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
