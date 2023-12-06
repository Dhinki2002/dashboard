import { useCallback } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../PurpleBox/PurpleBox.js";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
import "./LoginWithEmail.css";
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useSelector,useDispatch } from "react-redux";
const LoginWithEmail = () => {
  const navigate = useNavigate();

  
  
  
  const dispatch=useDispatch();
  const onFrameButton1Click = useCallback(() => {
    
    dispatch({type:'INC'});
    


  }, []);
  
  const onFrameButtonClick = useCallback(async () => {
    const email = document.querySelector(".frame-child16-login").value;
    const password = document.querySelector(".frame-child17-login").value;

    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    const data = {
      email: email,
      password: password
    };
    

    
    navigate('/go-score-dashboardindividual');
    // navigate('/go-score-dashboardindividual');
  }, [navigate]);



  const onSuccess=(res)=>{
    console.log("Success ! current user:",res.profileObj);
  }
  const onFailure=(res)=>{
    console.log("Failed ! res",res);
  }

  return (
   
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-base-login)] text-[color:var(--color-gray-100-login)]; font-family: var(--h1-heavy-login)">
      <div className="flex flex-col items-center justify-start gap-[var(--gap-37xl-login)] items-start gap-[var(--gap-36xl-login)] absolute gap-[var(--gap-41xl-login)] left-[4.8vw] top-[5.38vw]">
        <CantileverLogo
          cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
          cantileverlogoblack2IconPosition="relative"
          cantileverlogoblack2IconTop="unset"
          cantileverlogoblack2IconLeft="unset"
        />
        <div className="flex flex-col items-center justify-start gap-[var(--gap-37xl-login)] items-start gap-[var(--gap-36xl-login)]">
          <WelcomeText
            frameDivPosition="unset"
            frameDivTop="unset"
            frameDivLeft="unset"
            welcomeToFulcrumColor="#212121"
            yourPathToColor="#212121"
            welcomeToFulcrum="Welcome to Fulcrum"
          />
          <div className="flex flex-col items-center justify-start gap-[var(--gap-37xl-login)]">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)]">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-13xl-login)]">
                <div className="flex flex-row items-start justify-start gap-[var(--gap-9xl-login)]">
                  <div className="flex flex-row justify-center cursor-pointer border-[color:var(--color-gainsboro-300-login)] pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] items-center border-[0.06vw] border-solid">
                  <div className="flex flex-row justify-center items-end gap-[var(--gap-mini-login)]">
                    <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign up with Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                        </div>
                        </div>
                  <button
                    className="cursor-pointer border-[color:var(--color-gainsboro-300-login)] pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[14.8vw] flex flex-row items-center justify-center border-[0.06vw] border-solid"
                    onClick={onFrameButton1Click}
                  >
                    <div className="flex flex-row justify-center items-end gap-[var(--gap-mini-login)]">
                      <img
                        className="relative w-[1.6vw] h-[1.6vw] overflow-hidden shrink-0"
                        alt=""
                        src="/mingcutecouponline.svg"
                      />
                      <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--black-login)] text-left; font-family: var(--h1-heavy-login)">Login with Code</div>
                    </div>
                  </button>
                </div>
                <div className="flex-row items-center gap-[var(--gap-7xs-login)] flex justify-start">
                  <div className="flex-row items-center gap-[var(--gap-7xs-login)] flex justify-start">
                    <div className="border-t-[color:var(--color-gainsboro-400-login)] box-border w-[14.86vw] h-[0.06vw] border-t-[0.06vw] border-solid relative" />
                    <div className="relative">or</div>
                  </div>
                  <div className="border-t-[color:var(--color-gainsboro-400-login)] box-border w-[14.86vw] h-[0.06vw] border-t-[0.06vw] border-solid relative" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2.28vw] text-[length:var(--body-heavy-size-login)] text-[color:var(--black-login)]">
                <div className="flex flex-col items-start justify-start gap-[var(--gap-base-login)] gap-[var(--gap-7xl-login)]">

                  <div className="flex justify-start flex-col items-start gap-[var(--gap-5xs-login)]">
                    <div className="relative">Email</div>
                    <input
                      className="flex justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] flex-row items-center pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
                      placeholder="Enter Email"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[var(--gap-base-login)]">
                    <div className="flex justify-start flex-col items-start gap-[var(--gap-5xs-login)]">
                      <div className="relative">Password</div>
                      <input
                        className="border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] flex flex-row items-center justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>

                    <Link
                      className="cursor-pointer no-underline relative text-[length:var(--font-size-base-login)] text-[color:var(--purple-login)]"
                      to="/forgot-reset"
                    >
                      Forgot password?
                    </Link>

                  </div>


                </div>
                <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={onFrameButtonClick}>
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Login</div>
                  </div>
                </button>
              </div>
            </div>
            <Link className="cursor-pointer no-underline relative inline-block w-[14.5vw] text-[color:var(--black-login)]" to="/">
              <span>{`New to Fulcrum? `}</span>
              <span className="text-[color:var(--purple-login)]">Sign Up for free</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default LoginWithEmail;
