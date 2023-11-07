import { useCallback ,useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../components/PurpleBox";
import CantileverLogo from "../components/CantileverLogo";
import WelcomeText from "../components/WelcomeText";
import { useSelector } from "react-redux";

import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useLocation } from 'react-router-dom';
import "./SignUpAs.css"


import React from 'react'
import SignUpAsIndividual from "../components/SignUpAsIndividual";
import SignUpAsIndividual1 from "../components/SignUpAsIndividual1";
import SignUpAsIndividual2 from "../components/SignUpAsIndividual2";
import SignUpAsIndividual3 from "../components/SignUpAsIndividual3";
import SignUpAsInstitution4 from "../components/SignUpAsInstitution4";

const SignUpIndividual = () => {
  const counter2=useSelector((state)=>state.counter2)
  return (
    <div className="sign-up-as-login">
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