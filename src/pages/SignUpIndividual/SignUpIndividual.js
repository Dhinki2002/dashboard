import { useCallback ,useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import WelcomeText from '../../components/WelcomeText/WelcomeText.js';
import { useSelector } from "react-redux";

import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useLocation } from 'react-router-dom';
// import "../SignUpAs/SignUpAs.css"


import React from 'react'
import SignUpAsIndividual from '../../components/SignUpAsIndividual/SignUpAsIndividual.js';
import SignUpAsIndividual1 from '../../components/SignUpAsIndividual1/SignUpAsIndividual1.js';
import SignUpAsIndividual2 from '../../components/SignUpAsIndividual2/SignUpAsIndividual2.js';
import SignUpAsIndividual3 from '../../components/SignUpAsIndividual3/SignUpAsIndividual3.js';
import SignUpAsInstitution4 from '../../components/SignUpAsInstitution4/SignUpAsInstitution4.js';

const SignUpIndividual = () => {
  const counter2=useSelector((state)=>state.counter2)
  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-5xl-login)] text-[color:var(--black-login)]">
      {counter2==0&&<SignUpAsIndividual/>}
      {counter2==1&&<SignUpAsIndividual1 />}
      {counter2==2&&<SignUpAsIndividual2 />}
      {counter2==3&&<SignUpAsIndividual3/>}
      {counter2==4&&<SignUpAsInstitution4/>}
        <PurpleBox/>
    </div>
  )
}

export default SignUpIndividual