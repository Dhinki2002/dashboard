import { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
import "./SignUpAsInstitute.css";
import { useSelector, useDispatch } from "react-redux";

const SignUpAsInstitute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [instituteName, setinstituteName] = useState('');
  const [type,settype]=useState('');
  const [email,setemail]=useState('');

  const onFrameButtonClick = useCallback(() => {
    const payload={
      instituteName:instituteName,
      type:type,
      email:email,
    }
    dispatch({type:'UPDATE_INSTITUTE1', payload: payload});
    dispatch({type:'INC_COUNTER3'})
  }, [instituteName,type,email]);

  return (
    <div className="sign-up-as-institute-login">
      
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
      <div className="frame-parent39-login">
        <div className="institute-name-parent-login">
          <div className="institute-name-login">Institute Name</div>
          <input
            className="frame-child19-login"
            placeholder="Enter the Institute name"
            type="text"
            value={instituteName }
            onChange={(e) => setinstituteName(e.target.value)}

          />
        </div>
        <div className="frame-wrapper24-login">
          <div className="institute-name-parent-login">
            <div className="institute-name-login">Type</div>
            <input className="frame-select-login"
              placeholder="Type"
              type="text"
              value={type}
              onChange={(e) => settype(e.target.value)}/>
            
          </div>
        </div>
        <div className="frame-wrapper24-login">
          <div className="institute-name-parent-login">
            <div className="institute-name-login">Email id</div>
            <input
              className="frame-child19-login"
              placeholder="Enter Institute’s email id"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}/>
            
          </div>
        </div>
      </div>
      <div className="frame-parent40-login">
        <button className="frame-wrapper26-login" onClick={onFrameButtonClick}>
          <div className="continue-wrapper2-login">
            <div className="continue4-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container5-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in5-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute;
