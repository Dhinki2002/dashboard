import AdminNavbar from "../components/AdminNavbar";
import AdminHeader from "../components/AdminHeader";
import AdminSettingsPane from "../components/AdminSettingsPane";
import "./AdminSettings.css";
import { Helmet } from "react-helmet";

const AdminSettings = () => {
  const counter=2;
  return (

    <div className="adminsettings">
      <Helmet>
      <title>Admin Settings</title>
      <meta name="desc"
        content="Admin settings"/>
      </Helmet>
      <AdminNavbar counter={counter}/>
      <AdminHeader />
      <div className="settings-parent">
        <div className="name-of-insititute">Settings</div>
        <div className="rectangle-container">
          <AdminSettingsPane />
          <div className="frame-parent12">
            <button className="my-profile-container">
              <div className="my-profile3">My Profile</div>
            </button>
            <button className="billing-container">
              <div className="billing1">Billing</div>
            </button>
          </div>
          <div className="my-profile4">My Profile</div>
          <div className="frame-parent13">
            <div className="frame-parent14">
              <div className="name-of-insititute-parent">
                <div className="name-of-insititute">Name of Insititute</div>
                <div className="iit-roorkee">IIT Roorkee</div>
              </div>
              <div className="name-of-insititute-parent">
                <div className="name-of-insititute">Type</div>
                <div className="iit-roorkee">Government college</div>
              </div>
              <div className="name-of-insititute-parent">
                <div className="name-of-insititute">Email address</div>
                <div className="iit-roorkee">iit@iitr.ac.in</div>
              </div>
              <div className="name-of-insititute-parent">
                <div className="name-of-insititute">Phone number</div>
                <div className="iit-roorkee">7727042145</div>
              </div>
              <div className="name-of-insititute-parent">
                <div className="name-of-insititute">Insitute address</div>
                <div className="iit-roorkee">{`Near Roorkee bus stand, Roorkee `}</div>
              </div>
            </div>
            <div className="frame-parent14">
              <div className="frame-parent16">
                <div className="password-group">
                  <div className="name-of-insititute">Password</div>
                  <div className="change-password2">Change Password</div>
                </div>
                <div className="group">
                  <div className="div4">..............</div>
                  <img
                    className="carbonview-off-icon1"
                    alt=""
                    src="/carbonviewoff1.svg"
                  />
                </div>
              </div>
              <div className="frame-parent17">
                <div className="name-of-insititute-parent">
                  <div className="name-of-insititute">Delete your acccount</div>
                  <div className="this-will-permanently1">
                    This will permanently delete your account.
                  </div>
                </div>
                <button className="delete-account-container">
                  <div className="delete-account1">Delete Account</div>
                </button>
              </div>
            </div>
          </div>
          <button className="frame-wrapper8">
            <div className="tableredit-group">
              <img className="tableredit-icon1" alt="" src="/tableredit1.svg" />
              <div className="edit1">Edit</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
