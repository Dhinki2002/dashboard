import { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./SignUpAsIndividual2.css";
import { useSelector,useDispatch } from "react-redux";

const SignUpAsIndividual2 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [collegeName, setcollegeName] = useState('');
  const[graduationYear,setgraduationYear]=useState(0);

  const onFrameButtonClick = useCallback(() => {
    const payload={
      collegeName:collegeName,
      graduationYear:graduationYear,
    }
    dispatch({type:'INC_COUNTER2'})
    dispatch({type:'UPDATE_INDIVIDUAL3', payload: payload});
  }, [collegeName, graduationYear]);

  return (
    <div className="sign-up-as-individual2-login">
      
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="your-profile-is-almost-ready-parent-login">
        <div className="your-profile-is-login">Your profile is almost ready!</div>
        <div className="just-a-few-login">
          Just a few more questions, and we are good to go.
        </div>
      </div>
      <div className="frame-parent46-login">
        <div className="college-name-parent-login">
          <div className="your-profile-is-login">College name</div>
          <input
            className="frame-child25-login"
            placeholder="Enter your college name"
            type="text"
            value={collegeName }
              onChange={(e) => setcollegeName(e.target.value)}

          />
        </div>
        <div className="frame-wrapper31-login">
          <div className="college-name-parent-login">
            <div className="your-profile-is-login">Graduation year</div>
            <input
              className="frame-child26-login"
              placeholder="Choose your graduation year"
              type="number"
              value={graduationYear}
              onChange={(e) => setgraduationYear(e.target.value)}

            />
          </div>
        </div>
      </div>
      <div className="frame-parent47-login">
        <button className="frame-wrapper32-login" onClick={onFrameButtonClick}>
          <div className="next-wrapper-login">
            <div className="next-login">Next</div>
          </div>
        </button>
        <Link className="already-have-an-container8-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in8-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsIndividual2;
