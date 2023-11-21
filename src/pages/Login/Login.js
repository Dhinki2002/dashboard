import { useCallback } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import WelcomeText from '../../components/WelcomeText/WelcomeText.js';
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import "../SignUpAs/SignUpAs.css"
import { useSelector} from "react-redux";

import React from 'react'
import LoginWithEmail from '../../components/LoginWithEmail/LoginWithEmail.js';
import LoginWithCode from '../../components/LoginWithCode/LoginWithCode.js';

const Login = () => {
  const counter= useSelector((state) => state.counter);
  return (
    <div className="sign-up-as-login">
      {counter == 0 &&<LoginWithEmail/>}
      {counter == 1 &&<LoginWithCode/>}
        <PurpleBox/>
    </div>
  )
}

export default Login