import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../PurpleBox/PurpleBox.js";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./ForgotYourPassword.css";
import { useSelector,useDispatch } from "react-redux";

const ForgotYourPassword = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const onFrameButtonClick = useCallback(() => {
    dispatch({type:'INC_COUNTER1'});
  }, []);

  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)">
      
      <div className="flex flex-col justify-start absolute items-start gap-[17.32vw] left-[4.8vw] top-[5.38vw]">
        <div className="flex flex-col items-start justify-start gap-[4.8vw]">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs-login)] gap-[var(--gap-41xl-login)]">
            <CantileverLogo
              cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
              cantileverlogoblack2IconPosition="relative"
              cantileverlogoblack2IconTop="unset"
              cantileverlogoblack2IconLeft="unset"
            />
            <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs-login)]">
              <div className="relative">Forgot your password?</div>
              <div className="relative text-[length:var(--font-size-5xl-login)]">
                No worries! fill up the details below
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-[length:var(--body-heavy-size-login)]">
            <div className="gap-[var(--gap-xs-login)] flex flex-col items-start justify-start">
              <div className="relative">Email</div>
              <input
                className="border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] flex flex-row items-center justify-start pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
                placeholder="Enter your Email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-[var(--gap-37xl-login)] text-[length:var(--font-size-base-login)]">
          <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={onFrameButtonClick}>
            <div className="flex flex-row items-end justify-center">
              <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Submit</div>
            </div>
          </button>
          <Link className="cursor-pointer no-underline relative text-inherit" to="/">
            <span>{`New to Fulcrum? `}</span>
            <span className="text-[color:var(--purple-login)]">Sign Up for free</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotYourPassword;
