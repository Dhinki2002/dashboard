import { memo } from "react";
import "./PurpleBox.css";



const PurpleBox = memo(
  () => {
    return (
      <div className="purple-box-login">
      <div className="interviews-remarks-parent-login">
        <div className="image-parent-login">
        <img className="image-1-login"src="/interviews_remarks.svg">
        </img>
        <img className="image-2-login"src="/interviews_remarks.svg">
        </img>
        </div>
        <div className="crack-any-technical-interview-parent-login">
          <div className="crack-any-technical-container-login">
            <p className="crack-any-technical-interview-login">
              {`Crack any `}
              <span className="technical-login">Technical</span>
              {` interview `}
            </p>
            <p className="crack-any-technical-interview-login">
              in the world with the help of Fulcrum
            </p>
          </div>
          <div className="mock-interviews-parent-login">
            <div className="crack-any-technical-container-login">
              <ul className="fulcrum-assignment-skill-login" style={{ fontSize: '87%' }}>
                <li>Mock interviews</li>
                <li>Resume creator</li>
                <li>Fulcrum Assignment Skill Test (FAST)</li>
                <li>Dream Company Track</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="company-logo-parent-login">
          <img className="company-logo-icon-login" alt="" src="/company-logo.svg" />
          <img className="company-logo-icon1-login" alt="" src="/company-logo1.svg" />
          <img className="company-logo-icon2-login" alt="" src="/company-logo2.svg" />
          <img className="company-logo-icon3-login" alt="" src="/company-logo3.svg" />
          <img className="company-logo-icon4-login" alt="" src="/company-logo4.svg" />
          <img className="company-logo-icon5-login" alt="" src="/company-logo5.svg" />
        </div>
      </div>
      </div>
    );
  }
);

export default PurpleBox;
