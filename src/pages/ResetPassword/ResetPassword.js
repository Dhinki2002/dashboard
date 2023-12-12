import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
// import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--black-login)];
  font-family: var(--h1-heavy-login)"
    >
      <PurpleBox />
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-9xs-login)] text-[color:var(--color-gray-400-login)] left-[4.80vw] top-[11.43vw]">
        <div className="relative">Reset your Password</div>
        <div className="relative text-[length:var(--font-size-5xl-login)]">
          Fill your new password below!
        </div>
      </div>
      <div className="text-[length:var(--body-heavy-size-login)] absolute flex flex-col items-start justify-start gap-[var(--gap-7xl-login)] left-[4.80vw] top-[18.91vw]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs-login)]">
            <div className="w-[31.20vw] flex flex-row items-center justify-start">
              <div className="relative">New Password</div>
            </div>
            <input
              className="w-[31.20vw] flex flex-row items-center justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs-login)]">
          <div className=" relative">Confirm new Password</div>
          <input
            className=" w-[31.20vw] flex flex-row items-center justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid;
  font-family: var(--h1-heavy-login)"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-start gap-[var(--gap-33xl-login)] text-[length:var(--font-size-base-login)] left-[4.80vw] top-[43.26vw]">
        <button
          className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.20vw] items-center justify-between box-border border-0"
          onClick={onFrameButtonClick}
        >
          <div className="flex flex-row items-end justify-center">
            <div className="text-[length:var(--body-heavy-size-login)] relative text-[color:var(--color-white-login)] text-left">
              Continue
            </div>
          </div>
        </button>
        <Link
          className="cursor-pointer no-underline relative text-inherit"
          to="/login"
        >
          <span>{`Already have an account? `}</span>
          <span className="text-[color:var(--purple-login)]">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
