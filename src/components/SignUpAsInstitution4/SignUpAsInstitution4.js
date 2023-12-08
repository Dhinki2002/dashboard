import { useCallback } from "react";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
// import "./SignUpAsInstitution4.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SignUpAsInstitution4 = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const onFrameContainer4Click = useCallback(() => {
    
    navigate("/go-score-dashboardindividual");
    dispatch({type:'RES_COUNTER2'});
    dispatch({type:'RES_COUNTER3'});
  }, [navigate]);
 

  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--h1-heavy-size-login)] text-[color:var(--color-gray-400-login)]; font-family: var(--h1-heavy-login)">
      
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <div className="flex flex-col justify-start absolute items-start gap-[var(--gap-53xl-login)] left-[4.8vw] top-[16.57vw]">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-32xl-login)]">
          <img className="w-[5.15vw] h-[5.15vw] relative" alt="" src="/vector54.svg" />
          <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs-login)]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative">And you are all set!</div>
            </div>
            <div className="relative text-[length:var(--font-size-5xl-login)]">
              Let’s us help your students get their dream job.
            </div>
          </div>
          <div className="relative w-[4.06vw] h-[4.06vw] overflow-hidden shrink-0" />
        </div>
        <button className="flex flex-col justify-start cursor-pointer bg-transparent items-center p-0 border-0">
          <div className="flex flex-row items-end justify-center rounded-[var(--br-xs-login)] bg-[color:var(--purple-login)] w-[31.2vw] items-center justify-between pt-[var(--padding-xl-login)] pr-[var(--padding-5xl-login)] pb-[var(--padding-xl-login)] pl-[var(--padding-5xl-login)] box-border cursor-pointer" onClick={onFrameContainer4Click}>
            <div className="flex flex-row items-end justify-center">
              <div className="relative text-[length:var(--body-heavy-size-login)] text-[color:var(--color-white-login)] text-left; font-family: var(--h1-heavy-login)">Proceed to Dashboard</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUpAsInstitution4;
