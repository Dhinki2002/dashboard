import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./ResetLinkSent.css";
import { useSelector, useDispatch } from "react-redux";

const ResetLinkSent = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();


  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
    dispatch({type:'DEC_COUNTER1'});
  }, [navigate]);

  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--color-gray-400-login)]; font-family: var(--h1-heavy-login)">
      
      <CantileverLogo cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png" />
      <div className="flex flex-col justify-start gap-[var(--gap-53xl-login)] absolute items-start left-[4.8vw] top-[16.57vw]">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-32xl-login)]">
          <img className="w-[5.15vw] h-[5.15vw] relative" alt="" src="/vector54.svg" />
          <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs-login)]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative">Reset link sent!</div>
            </div>
            <div className="relative text-[length:var(--font-size-5xl-login)]">
              Check your mail box to reset your password.
            </div>
          </div>
          <div className="relative w-[4.06vw] h-[4.06vw] overflow-hidden shrink-0" />
        </div>
        <div className="flex flex-col justify-start gap-[var(--gap-53xl-login)] items-center text-[length:var(--font-size-base-login)] text-[color:var(--black-login)]">
          <button className="cursor-pointer bg-transparent flex flex-col items-center justify-start p-0 border-0" onClick={onFrameButtonClick}>
            <div className="flex flex-row items-end justify-center rounded-[var(--br-xs-login)] bg-[color:var(--purple-login)] w-[31.2vw] items-center justify-between pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] box-border">
              <div className="flex flex-row items-end justify-center">
                <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Proceed to login</div>
              </div>
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

export default ResetLinkSent;
