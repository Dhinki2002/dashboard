import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
// import "./SignUpAsInstitute3.css";
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
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-base-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)">
      <div className="flex items-center justify-center absolute flex-col left-[4.8vw] top-[18.91vw]">
        <button className="flex items-center justify-center cursor-pointer border-[rgba(33-login,33-login,33-login,0.8)] pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] h-[6.62vw] flex-row border-[0.06vw] border-dashed">
          <div className="flex-col gap-[var(--gap-5xs-login)] flex items-center justify-center">
            <div className="flex flex-row items-start justify-start gap-[var(--gap-xs-login)]">
              <div className="relative text-[length:var(--body-heavy-size-login)] underline text-[color:var(--black-login)] text-left; font-family: var(--h1-heavy-login)">Upload list of students</div>
              <img className="relative w-[0.97vw] h-[0.97vw] overflow-hidden shrink-0" alt="" src="/biupload.svg" />
            </div>
            <div className="flex flex-row items-end justify-center">
              <div className="flex flex-col items-center justify-start">
                <div className="relative text-[0.81vw] text-[color:var(--icon-grey-login)] text-left; font-family: var(--h1-heavy-login)">
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
      <div className="absolute flex flex-col items-center justify-start gap-[var(--gap-33xl-login)] left-[4.8vw] top-[38.69vw]">
        <div className="flex flex-col items-center justify-start gap-[var(--gap-base-login)]">
          <button className="flex flex-row items-end justify-center cursor-pointer border-[color:var(--purple-login)] pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] items-center justify-between border-[0.06vw] border-solid">
            <div className="flex flex-row items-end justify-center">
              <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--purple-login)] text-left; font-family: var(--h1-heavy-login)">Skip for now</div>
            </div>
          </button>
          <button className="cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] flex flex-row items-center justify-between box-border border-0" onClick={onFrameButton2Click}>
            <div className="flex flex-row items-end justify-center">
              <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Continue</div>
            </div>
          </button>
        </div>
        <Link className="cursor-pointer no-underline relative text-inherit" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="text-[color:var(--purple-login)]">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute3;
