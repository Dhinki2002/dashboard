import { useCallback } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import WelcomeText from '../../components/WelcomeText/WelcomeText.js';
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
// import "../SignUpAs/SignUpAs.css"
import { useSelector} from "react-redux";

import React from 'react'
import LoginWithEmail from '../../components/LoginWithEmail/LoginWithEmail.js';
import LoginWithCode from '../../components/LoginWithCode/LoginWithCode.js';

const Login = () => {
  const counter= useSelector((state) => state.counter);
  return (
    <div className="relative bg-[color:var(--color-white-login)] w-full h-[56.12vw] overflow-hidden text-left text-[length:var(--font-size-5xl-login)] text-[color:var(--black-login)]">
      {counter == 0 &&<LoginWithEmail/>}
      {counter == 1 &&<LoginWithCode/>}
        <PurpleBox/>
    </div>
  )
}

export default Login