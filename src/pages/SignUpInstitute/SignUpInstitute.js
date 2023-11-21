import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import WelcomeText from '../../components/WelcomeText/WelcomeText.js';

import "../SignUpAs/SignUpAs.css";

import React from 'react'
import SignUpAsInstitute from '../../components/SignUpAsInstitute/SignUpAsInstitute.js';
import SignUpAsInstitute1 from '../../components/SignUpAsInstitute1/SignUpAsInstitute1.js';
import SignUpAsInstitute2 from '../../components/SignUpAsInstitute2/SignUpAsInstitute2.js';
import SignUpAsInstitute3 from '../../components/SignUpAsInstitute3/SignUpAsInstitute3.js';
import SignUpAsInstitution4 from '../../components/SignUpAsInstitution4/SignUpAsInstitution4.js';
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