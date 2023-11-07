import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../components/PurpleBox";
import CantileverLogo from "../components/CantileverLogo";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="reset-password-login">
      <PurpleBox/>
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="reset-your-password-parent-login">
        <div className="reset-your-password-login">Reset your Password</div>
        <div className="fill-your-new-login">Fill your new password below!</div>
      </div>
      <div className="frame-parent24-login">
        <div className="frame-wrapper17-login">
          <div className="confirm-new-password-parent-login">
            <div className="new-password-wrapper-login">
              <div className="reset-your-password-login">New Password</div>
            </div>
            <input
              className="frame-child12-login"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>
        <div className="confirm-new-password-parent-login">
          <div className="reset-your-password-login">Confirm new Password</div>
          <input
            className="frame-child12-login"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
      </div>
      <div className="frame-parent26-login">
        <button className="frame-wrapper18-login" onClick={onFrameButtonClick}>
          <div className="continue-wrapper1-login">
            <div className="continue3-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container4-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in4-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
