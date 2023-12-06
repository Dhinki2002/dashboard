import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import WelcomeText from "../WelcomeText/WelcomeText.js";
import "./SignUpAsInstitute2.css";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";

const SignUpAsInstitute2 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [password, setpassword] = useState('');

  const onFrameButtonClick = useCallback(() => {
    const payload={
      password:password,
    }
    dispatch({type:'UPDATE_INSTITUTE3', payload: payload});
    dispatch({type:'INC_COUNTER3'});
  }, [password]);

  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--body-heavy-size-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)">
     
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
      <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs-login)] absolute gap-[var(--gap-7xl-login)] left-[4.8vw] top-[18.91vw]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs-login)]">
            <div className="w-[31.2vw] flex flex-row items-center justify-start">
              <div className="relative">Password</div>
            </div>
            <input
              className="w-[31.2vw] flex flex-row items-center justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}

            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs-login)]">
          <div className="relative">Confirm Password</div>
          <input
            className="w-[31.2vw] flex flex-row items-center justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-start gap-[var(--gap-33xl-login)] text-[length:var(--font-size-base-login)] left-[4.8vw] top-[43.26vw]">
        <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={onFrameButtonClick}>
          <div className="flex flex-row items-end justify-center">
            <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Continue</div>
          </div>
        </button>
        <Link className="cursor-pointer no-underline relative text-inherit" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="text-[color:var(--purple-login)]">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsInstitute2;
