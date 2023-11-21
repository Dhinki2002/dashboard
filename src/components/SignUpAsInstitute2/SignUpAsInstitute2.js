import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
import "./SignUpAsInstitute2.css";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";

const SignUpAsInstitute2 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [password, setpassword] = useState('');

  const onFrameButtonClick = useCallback(() => {
    const payload={
      password:password,
    }
    dispatch({type:'UPDATE_INSTITUTE3', payload: payload});
    dispatch({type:'INC_COUNTER3'});
  }, [password]);

  return (
    <div className="sign-up-as-institute2-login">
     
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <WelcomeText
        frameDivPosition="absolute"
        frameDivTop="200px"
        frameDivLeft="84px"
        welcomeToFulcrumColor="#0e0e10"
        yourPathToColor="#0e0e10"
        welcomeToFulcrum="Welcome to Fulcrum:"
      />
      <div className="frame-parent43-login">
        <div className="frame-wrapper29-login">
          <div className="confirm-password-group-login">
            <div className="password-container-login">
              <div className="password2-login">Password</div>
            </div>
            <input
              className="frame-child23-login"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}

            />
          </div>
        </div>
        <div className="confirm-password-group-login">
          <div className="password2-login">Confirm Password</div>
          <input
            className="frame-child23-login"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
      </div>
      <div className="frame-parent45-login">
        <button className="frame-wrapper30-login" onClick={onFrameButtonClick}>
          <div className="continue-wrapper4-login">
            <div className="continue6-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container7-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in7-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute2;
