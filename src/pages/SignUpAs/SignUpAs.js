import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import WelcomeText from '../../components/WelcomeText/WelcomeText.js';
import SignUpSelect from '../../components/SignUpSelect/SignUpSelect.js';
// import "./SignUpAs.css";
import { useState } from "react";

const SignUpAs = () => {
  

  
  
  



  const navigate = useNavigate();
  const [selected, setSelected] = useState(0)

  const onFrameButton1Click = useCallback(() => {
    if (selected === 0) {
      navigate("/sign-up-individual");
    } else if (selected === 1) {
      navigate("/sign-up-institute");
    } else {
      navigate("/sign-up-individual");
    }

  }, [navigate, selected]);

  const onIndividualButtonClick = useCallback(() => {
    setSelected(0)
  }, []);

  const onInstitutionButtonClick = useCallback(() => {
    setSelected(1)
  }, []);








  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-5xl-login)] text-[color:var(--black-login)]">
      <PurpleBox/>
      <div className="flex flex-col justify-start  items-start  absolute gap-[var(--gap-41xl-login)] left-[4.80vw] top-[5.38vw]">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-41xl-login)]">
          <CantileverLogo
            cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
            cantileverlogoblack2IconPosition="relative"
            cantileverlogoblack2IconTop="unset"
            cantileverlogoblack2IconLeft="unset"
          />
          <WelcomeText
            frameDivPosition="unset"
            frameDivTop="unset"
            frameDivLeft="unset"
            welcomeToFulcrumColor="#0e0e10"
            yourPathToColor="#0e0e10"
            welcomeToFulcrum="Welcome to Fulcrum:"
          />
        </div>
        <div className="flex flex-col justify-start  items-start  gap-[13.37vw] ">
          <div className="flex items-start justify-start  flex-col gap-[var(--gap-base-login)]">
            <div className="relative">Sign up :</div>
            <div className="flex items-start justify-start  flex-row gap-[1.42vw]">
              <button className={selected === 0 ? "frame-parent52-login" : "border-[color:var(--color-gainsboro-300-login)] box-border border-[0.06vw] border-solid   cursor-pointer bg-transparent relative rounded-[var(--br-xs-login)] w-[14.91vw] h-[8.40vw] overflow-hidden shrink-0 p-0"} onClick={onIndividualButtonClick}>
                <div className="material-symbolsperson-outlin-parent-login">
                <svg className="material-symbolsperson-outlin-icon-login" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 22C19.9375 22 18.1719 21.2656 16.7031 19.7969C15.2344 18.3281 14.5 16.5625 14.5 14.5C14.5 12.4375 15.2344 10.6719 16.7031 9.20313C18.1719 7.73438 19.9375 7 22 7C24.0625 7 25.8281 7.73438 27.2969 9.20313C28.7656 10.6719 29.5 12.4375 29.5 14.5C29.5 16.5625 28.7656 18.3281 27.2969 19.7969C25.8281 21.2656 24.0625 22 22 22ZM7 37V31.75C7 30.6875 7.27375 29.7106 7.82125 28.8194C8.36875 27.9281 9.095 27.2488 10 26.7813C11.9375 25.8125 13.9062 25.0856 15.9062 24.6006C17.9062 24.1156 19.9375 23.8738 22 23.875C24.0625 23.875 26.0937 24.1175 28.0937 24.6025C30.0937 25.0875 32.0625 25.8138 34 26.7813C34.9062 27.25 35.6331 27.93 36.1806 28.8212C36.7281 29.7125 37.0012 30.6888 37 31.75V37H7ZM10.75 33.25H33.25V31.75C33.25 31.4063 33.1637 31.0938 32.9912 30.8125C32.8187 30.5313 32.5925 30.3125 32.3125 30.1563C30.625 29.3125 28.9219 28.68 27.2031 28.2588C25.4844 27.8375 23.75 27.6262 22 27.625C20.25 27.625 18.5156 27.8363 16.7969 28.2588C15.0781 28.6813 13.375 29.3138 11.6875 30.1563C11.4062 30.3125 11.1794 30.5313 11.0069 30.8125C10.8344 31.0938 10.7487 31.4063 10.75 31.75V33.25ZM22 18.25C23.0312 18.25 23.9144 17.8825 24.6494 17.1475C25.3844 16.4125 25.7512 15.53 25.75 14.5C25.75 13.4687 25.3825 12.5856 24.6475 11.8506C23.9125 11.1156 23.03 10.7488 22 10.75C20.9687 10.75 20.0856 11.1175 19.3506 11.8525C18.6156 12.5875 18.2487 13.47 18.25 14.5C18.25 15.5313 18.6175 16.4144 19.3525 17.1494C20.0875 17.8844 20.97 18.2512 22 18.25Z" fill={selected===0 ? "white": "#2a2a2a"} />
                  </svg>

                  <div className={selected === 0 ? "as-an-individual-login" : "relative text-[length:var(--font-size-5xl-login)] text-[color:var(--black-login)] text-left"}>As an Individual</div>
                </div>
                <img
                  className="teenyiconstick-circle-solid2-login"
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
              </button>
              <button className={selected === 1 ? "frame-parent52-login" : "border-[color:var(--color-gainsboro-300-login)] box-border border-[0.06vw] border-solid   cursor-pointer bg-transparent relative rounded-[var(--br-xs-login)] w-[14.91vw] h-[8.40vw] overflow-hidden shrink-0 p-0"} onClick={onInstitutionButtonClick}>
                <div className="frame-div-login">
                  <div className="tdesigninstitution-wrapper-login">

                  <svg className="tdesigninstitution-icon-login" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0003 1.14172L29.3337 8.54972V12.0004H2.66699V8.54972L16.0003 1.14172ZM6.74699 9.33372H25.2537L16.0003 4.19239L6.74699 9.33372ZM9.33366 14.6671V25.3337H6.66699V14.6671H9.33366ZM17.3337 14.6671V25.3337H14.667V14.6671H17.3337ZM25.3337 14.6671V25.3337H22.667V14.6671H25.3337ZM2.66699 28.0004H29.3337V30.6671H2.66699V28.0004Z" fill={selected===1 ? "white": "#2a2a2a"}/>
</svg>

                  </div>
                  <div className={selected === 1 ? "as-an-individual-login" : "relative text-[length:var(--font-size-5xl-login)] text-[color:var(--black-login)] text-left"}>As an Institution</div>
                </div>
                <div className="frame-child-login" />
                <img
                  className="teenyiconstick-circle-solid2-login"
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start  items-center gap-[var(--gap-33xl-login)] text-[length:var(--font-size-base-login)]">
            <button className="flex flex-row items-end justify-center  cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.20vw] items-center justify-between box-border border-0" onClick={onFrameButton1Click}>
              <div className="flex flex-row items-end justify-center">
                <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left">
                  {selected === 0
                    ? 'Continue as Individual'
                    : selected === 1
                      ? 'Continue as Institution'
                      : 'Sign Up'}
                </div>
              </div>
            </button>
            <Link className="cursor-pointer no-underline relative text-inherit" to="/login">
              <span>{`Already have an account? `}</span>
              <span className="sign-in-login" >Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAs;
