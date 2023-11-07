import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import WelcomeText from "./WelcomeText";
import "./SignUpAsInstitute3.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const SignUpAsInstitute3 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const[upload,setupload]=useState('{"key": "value"}');
  const data = useSelector((state)=>state.userData2)

  const onFrameButton2Click = useCallback(() => {
    const payload={
      upload:upload,
    }
    dispatch({type:'INC_COUNTER3'});
    console.log(data)
    console.log(payload);
  }, []);

  return (
    <div className="sign-up-as-institute3-login">
      <div className="sign-up-as-institute3-inner-login">
        <button className="frame-wrapper4-login">
          <div className="frame-parent10-login">
            <div className="upload-list-of-students-parent-login">
              <div className="upload-list-of-login">Upload list of students</div>
              <img className="biupload-icon-login" alt="" src="/biupload.svg" />
            </div>
            <div className="skip-for-now-wrapper-login">
              <div className="csv-xlsx-json-file-are-allow-wrapper-login">
                <div className="csv-xlsx-json-login">
                  (csv, xlsx, json file are allowed)
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
      
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
      <div className="frame-parent11-login">
        <div className="frame-parent12-login">
          <button className="frame-wrapper6-login">
            <div className="skip-for-now-wrapper-login">
              <div className="skip-for-now-login">Skip for now</div>
            </div>
          </button>
          <button className="frame-wrapper7-login" onClick={onFrameButton2Click}>
            <div className="skip-for-now-wrapper-login">
              <div className="continue-login">Continue</div>
            </div>
          </button>
        </div>
        <Link className="already-have-an-container1-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in1-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute3;
