import { useCallback } from "react";
import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../PurpleBox/PurpleBox.js";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
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
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-base-login)] text-[color:var(--color-gray-100-login)]; font-family: var(--h1-heavy-login)">
      <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)] gap-[var(--gap-36xl-login)] absolute gap-[var(--gap-41xl-login)] left-[4.8vw] top-[5.38vw]">
        <CantileverLogo
          cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
          cantileverlogoblack2IconPosition="relative"
          cantileverlogoblack2IconTop="unset"
          cantileverlogoblack2IconLeft="unset"
        />
        <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)] gap-[var(--gap-36xl-login)]">
          <WelcomeText welcomeToFulcrum="Welcome to Fulcrum:" />
          <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)]">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)]">
              <div className="flex flex-row items-start justify-start gap-[var(--gap-9xl-login)]">
                <button className="cursor-pointer border-[color:var(--color-gainsboro-300-login)] pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] flex flex-row items-center justify-center border-[0.06vw] border-solid" onClick={onFrameButtonClick}>
                  <div className="flex flex-row items-end justify-center gap-[var(--gap-mini-login)]">
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
                  className="cursor-pointer border-[color:var(--color-gainsboro-300-login)] pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] flex flex-row items-center justify-center border-[0.06vw] border-solid box-border w-[14.8vw]"
                  onClick={onFrameButton1Click}
                >
                  <div className="flex flex-row items-end justify-center gap-[var(--gap-mini-login)]">
                    <img
                      className="relative w-[1.6vw] h-[1.6vw] overflow-hidden shrink-0"
                      alt=""
                      src="/icoutlineemail.svg"
                    />
                    <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--black-login)] text-left; font-family: var(--h1-heavy-login)">Login with Email</div>
                  </div>
                </button>
              </div>
              <div className="flex flex-row items-center justify-start gap-[var(--gap-7xs-login)]">
                <div className="flex flex-row items-center justify-start gap-[var(--gap-7xs-login)]">
                  <div className="border-t-[color:var(--color-gainsboro-400-login)] box-border w-[14.86vw] h-[0.06vw] border-t-[0.06vw] border-solid relative" />
                  <div className="relative">or</div>
                </div>
                <div className="border-t-[color:var(--color-gainsboro-400-login)] box-border w-[14.86vw] h-[0.06vw] border-t-[0.06vw] border-solid relative" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10.28vw] text-[length:var(--body-heavy-size-login)] text-[color:var(--black-login)]">
              <div className="flex flex-row items-center justify-start gap-[var(--gap-base-login)] flex-col items-start gap-[var(--gap-xs-login)]">
                <div className="relative">Enter the code</div>
                <div className="flex flex-row items-center justify-start gap-[var(--gap-base-login)]">
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      key={index}
                      ref={ref => inputsRef.current[index] = ref}
                      className="border-[color:var(--color-silver-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[3.54vw] h-[3.89vw] flex items-center justify-center text-center border-[0.06vw] border-solid"
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
              <div className="flex flex-col items-center justify-start gap-[var(--gap-37xl-login)] text-[length:var(--font-size-base-login)]">
                <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={handleLogData}>
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Login</div>
                  </div>
                </button>
                <Link className="cursor-pointer no-underline relative text-inherit" to="/">
                  <span>{`New to Fulcrum? `}</span>
                  <span className="text-[color:var(--purple-login)]">Sign Up for free</span>
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
