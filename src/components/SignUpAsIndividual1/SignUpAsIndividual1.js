import { useCallback ,useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
import "./SignUpAsIndividual1.css";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const SignUpAsIndividual1 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [password, setPassword] = useState('');

  const onFrameButtonClick = useCallback(() => {
    const payload= {
      password:password
      };

      dispatch({type:'INC_COUNTER2'})
      dispatch({type:'UPDATE_INDIVIDUAL2', payload: payload});
  }, [password]);



  const location = useLocation();
  const userData = location.state;

  useEffect(() => {
    
  }, []);

  return (
    <div className="sign-up-as-individual1-login">
      
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
      <div className="frame-parent16-login">
        <div className="frame-wrapper10-login">
          <div className="confirm-password-parent-login">
            <div className="password-wrapper-login">
              <div className="password-login">Password</div>
            </div>
            <input
              className="frame-child6-login"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
        </div>
        <div className="confirm-password-parent-login">
          <div className="password-login">Confirm Password</div>
          <input
            className="frame-child6-login"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
      </div>
      <div className="frame-parent18-login">
        <button className="frame-wrapper11-login" onClick={onFrameButtonClick}>
          <div className="continue-container-login">
            <div className="continue1-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container2-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in2-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsIndividual1;
