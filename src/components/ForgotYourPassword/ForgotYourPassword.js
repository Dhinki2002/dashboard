import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../PurpleBox/PurpleBox.js";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./ForgotYourPassword.css";
import { useSelector,useDispatch } from "react-redux";

const ForgotYourPassword = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const onFrameButtonClick = useCallback(() => {
    dispatch({type:'INC_COUNTER1'});
  }, []);

  return (
    <div className="forgot-your-password-login">
      
      <div className="frame-parent36-login">
        <div className="frame-parent37-login">
          <div className="cantileverlogoblack-2-parent1-login">
            <CantileverLogo
              cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
              cantileverlogoblack2IconPosition="relative"
              cantileverlogoblack2IconTop="unset"
              cantileverlogoblack2IconLeft="unset"
            />
            <div className="forgot-your-password-parent-login">
              <div className="forgot-your-password1-login">Forgot your password?</div>
              <div className="no-worries-fill-login">
                No worries! fill up the details below
              </div>
            </div>
          </div>
          <div className="frame-wrapper22-login">
            <div className="email-container-login">
              <div className="forgot-your-password1-login">Email</div>
              <input
                className="frame-child18-login"
                placeholder="Enter your Email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="frame-parent38-login">
          <button className="frame-wrapper23-login" onClick={onFrameButtonClick}>
            <div className="submit-wrapper-login">
              <div className="submit-login">Submit</div>
            </div>
          </button>
          <Link className="new-to-fulcrum-container3-login" to="/">
            <span>{`New to Fulcrum? `}</span>
            <span className="sign-up-for3-login">Sign Up for free</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotYourPassword;
