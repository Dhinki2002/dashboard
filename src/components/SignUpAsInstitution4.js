import { useCallback } from "react";
import PurpleBox from "../components/PurpleBox";
import CantileverLogo from "../components/CantileverLogo";
import "./SignUpAsInstitution4.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SignUpAsInstitution4 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const onFrameContainer4Click = useCallback(() => {
    
    navigate("/go-score-dashboardindividual");
    dispatch({type:'RES_COUNTER2'});
    dispatch({type:'RES_COUNTER3'});
  }, [navigate]);
 

  return (
    <div className="sign-up-as-institution4-login">
      
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="frame-parent50-login">
        <div className="vector-group-login">
          <img className="vector-icon1-login" alt="" src="/vector54.svg" />
          <div className="frame-parent51-login">
            <div className="and-you-are-all-set-wrapper-login">
              <div className="and-you-are-login">And you are all set!</div>
            </div>
            <div className="lets-us-help-login">
              Let’s us help your students get their dream job.
            </div>
          </div>
          <div className="teenyiconstick-circle-solid1-login" />
        </div>
        <button className="frame-wrapper37-login">
          <div className="frame-wrapper38-login" onClick={onFrameContainer4Click}>
            <div className="proceed-to-dashboard-wrapper-login">
              <div className="proceed-to-dashboard-login">Proceed to Dashboard</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUpAsInstitution4;
