import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "../components/PurpleBox";
import CantileverLogo from "../components/CantileverLogo";
import WelcomeText from "../components/WelcomeText";

import "./SignUpAs.css";

import React from 'react'
import SignUpAsInstitute from "../components/SignUpAsInstitute";
import SignUpAsInstitute1 from "../components/SignUpAsInstitute1";
import SignUpAsInstitute2 from "../components/SignUpAsInstitute2";
import SignUpAsInstitute3 from "../components/SignUpAsInstitute3";
import SignUpAsInstitution4 from "../components/SignUpAsInstitution4";
import { useSelector } from "react-redux";

const SignUpInstitute = () => {
  const counter3 = useSelector((state)=>state.counter3);
  return (
    <div className="sign-up-as-login">
      {counter3==0&&<SignUpAsInstitute/>}
      {counter3==1&&<SignUpAsInstitute1/>}
      {counter3==2&&<SignUpAsInstitute2/>}
      {counter3==3&&<SignUpAsInstitute3/>}
      {counter3==4&&<SignUpAsInstitution4/>}
        <PurpleBox/>
    </div>
  )
}

export default SignUpInstitute