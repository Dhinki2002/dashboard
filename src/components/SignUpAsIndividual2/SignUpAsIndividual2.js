import { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CantileverLogo from "../CantileverLogo/CantileverLogo.js";
import "./SignUpAsIndividual2.css";
import { useSelector,useDispatch } from "react-redux";

const SignUpAsIndividual2 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [collegeName, setcollegeName] = useState('');
  const[graduationYear,setgraduationYear]=useState(0);

  const onFrameButtonClick = useCallback(() => {
    const payload={
      collegeName:collegeName,
      graduationYear:graduationYear,
    }
    dispatch({type:'INC_COUNTER2'})
    dispatch({type:'UPDATE_INDIVIDUAL3', payload: payload});
  }, [collegeName, graduationYear]);

  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--black-login)]; font-family: var(--h1-heavy-login)">
      
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="absolute flex-col items-start gap-[var(--gap-9xs-login)] text-[color:var(--color-gray-400-login)] left-[4.8vw] top-[11.43vw] flex justify-start">
        <div className="relative">Your profile is almost ready!</div>
        <div className="relative text-[length:var(--font-size-5xl-login)]">
          Just a few more questions, and we are good to go.
        </div>
      </div>
      <div className="text-[length:var(--body-heavy-size-login)] absolute flex flex-col items-start justify-start gap-[var(--gap-7xl-login)] left-[4.8vw] top-[18.91vw]">
        <div className="flex justify-start flex-col items-start gap-[var(--gap-5xs-login)]">
          <div className="relative">College name</div>
          <input
            className="flex justify-start border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] flex-row items-center pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
            placeholder="Enter your college name"
            type="text"
            value={collegeName }
              onChange={(e) => setcollegeName(e.target.value)}

          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex justify-start flex-col items-start gap-[var(--gap-5xs-login)]">
            <div className="relative">Graduation year</div>
            <input
              className="border-[color:var(--color-gainsboro-300-login)] text-[length:var(--body-heavy-size-login)] bg-transparent rounded-[var(--br-xs-login)] box-border w-[31.2vw] h-[3.2vw] flex flex-row items-center justify-between pt-[var(--padding-base-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-base-login)] pl-[var(--padding-5xl-login)] border-[0.06vw] border-solid; font-family: var(--h1-heavy-login)"
              placeholder="Choose your graduation year"
              type="number"
              value={graduationYear}
              onChange={(e) => setgraduationYear(e.target.value)}

            />
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-start gap-[var(--gap-33xl-login)] text-[length:var(--font-size-base-login)] left-[4.8vw] top-[43.26vw]">
        <button className="flex flex-row items-end justify-center cursor-pointer pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] bg-[color:var(--purple-login)] rounded-[var(--br-xs-login)] w-[31.2vw] items-center justify-between box-border border-0" onClick={onFrameButtonClick}>
          <div className="flex flex-row items-end justify-center">
            <div className="text-[length:var(--body-heavy-size-login)] relative text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Next</div>
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

export default SignUpAsIndividual2;
