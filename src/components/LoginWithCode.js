import { useCallback } from "react";
import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import WelcomeText from "./WelcomeText";
import "./LoginWithCode.css";
import OtpInput from 'react-otp-input';
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useSelector,useDispatch } from "react-redux";


const LoginWithCode = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); 
  const [currentIndex, setCurrentIndex] = useState();
  const onSuccess=(res)=>{
    console.log("Success ! current user:",res.profileObj);
  }
  const onFailure=(res)=>{
    console.log("Failed ! res",res);
  }

  const onFrameButtonClick = useCallback(() => {
    
  }, []);

  const onFrameButton1Click = useCallback(() => {
    dispatch({type:'DEC'});
    
  }, []);
  const inputsRef = useRef([]);
  
  useEffect(() => {
		
		const updatedValues = inputValues.map((value) => {
			if (value < 0 || value > 9) {
				return 0; 
			}
			return value;
		});

		
		if (
			!inputValues.every((value, index) => value === updatedValues[index])
		) {
			setInputValues(updatedValues);
		}
	}, [inputValues]);


  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedValues = [...inputValues];

    
    updatedValues[index] = value;
    setInputValues(updatedValues);

    
    if (index < inputValues.length - 1) {
      inputsRef.current[index + 1].focus();
    }
    else {
      
      if (value.length > 1) {
        e.target.value = value.slice(0, 1);
      }}
  };

    
    const handleLogData = useCallback( () => {
      if (inputValues.length === 6) {
        console.log(inputValues);
      } else {
        console.log('Please input all 6 values.');
      }
      navigate("/go-score-dashboardindividual");
    },[navigate]);
  
    
     

  return (
    <div className="login-with-code-login">
      <div className="cantileverlogoblack-2-group-login">
        <CantileverLogo
          cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
          cantileverlogoblack2IconPosition="relative"
          cantileverlogoblack2IconTop="unset"
          cantileverlogoblack2IconLeft="unset"
        />
        <div className="frame-parent2-login">
          <WelcomeText welcomeToFulcrum="Welcome to Fulcrum:" />
          <div className="frame-parent3-login">
            <div className="frame-parent3-login">
              <div className="frame-parent5-login">
                <button className="frame-wrapper1-login" onClick={onFrameButtonClick}>
                  <div className="flat-color-iconsgoogle-parent-login">
                    <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign up with Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                  
                  
                  </div>
                </button>
                <button
                  className="frame-wrapper2-login"
                  onClick={onFrameButton1Click}
                >
                  <div className="flat-color-iconsgoogle-parent-login">
                    <img
                      className="flat-color-iconsgoogle-login"
                      alt=""
                      src="/icoutlineemail.svg"
                    />
                    <div className="login-with-google-login">Login with Email</div>
                  </div>
                </button>
              </div>
              <div className="line-parent-login">
                <div className="line-parent-login">
                  <div className="frame-item-login" />
                  <div className="or-login">or</div>
                </div>
                <div className="frame-item-login" />
              </div>
            </div>
            <div className="frame-parent7-login">
              <div className="enter-the-code-parent-login">
                <div className="or-login">Enter the code</div>
                <div className="frame-parent8-login">
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      key={index}
                      ref={ref => inputsRef.current[index] = ref}
                      className="frame-input-login"
                      type="number"
                      min="0"
                      max="9"
                      step="1"
                      
                      value={inputValues[index] || ''}
                      onChange={(e) => handleChange(e, index)}
                      autoFocus={index === currentIndex}
                    />
                  ))}
                </div>

              </div>
              <div className="frame-parent9-login">
                <button className="frame-wrapper3-login" onClick={handleLogData}>
                  <div className="login-wrapper-login">
                    <div className="login-login">Login</div>
                  </div>
                </button>
                <Link className="new-to-fulcrum-container-login" to="/">
                  <span>{`New to Fulcrum? `}</span>
                  <span className="sign-up-for-login">Sign Up for free</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWithCode;
