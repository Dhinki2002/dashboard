import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import WelcomeText from "./WelcomeText";
import "./SignUpAsInstitute1.css";
import { useDispatch } from "react-redux";
import {useState} from "react";

const SignUpAsInstitute1 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [phoneNumber, setphoneNumber] = useState('');
  const[instituteAddr, setinstituteAddr] = useState('');
  const onFrameButtonClick = useCallback(() => {
    const payload={
      phoneNumber: phoneNumber,
      instituteAddr:instituteAddr,
    }
    dispatch({type:'UPDATE_INSTITUTE2', payload: payload});
    dispatch({type:'INC_COUNTER3'});
  }, [phoneNumber,instituteAddr]);

  return (
    <div className="sign-up-as-institute1-login">
      
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
      <div className="frame-parent41-login">
        <div className="phone-no-group-login">
          <div className="institute-address-login">Phone no.</div>
          <input
            className="frame-child21-login"
            placeholder="Enter the Institute’s phone no."
            type="text"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </div>
        <div className="frame-wrapper27-login">
          <div className="phone-no-group-login">
            <div className="institute-address-login">Institute address</div>
            <input
              className="frame-child22-login"
              placeholder="Enter institute’s address"
              type="text"
              value={instituteAddr}
              onChange={(e) => setinstituteAddr(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="frame-parent42-login">
        <button className="frame-wrapper28-login" onClick={onFrameButtonClick}>
          <div className="continue-wrapper3-login">
            <div className="continue5-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container6-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in6-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute1;
