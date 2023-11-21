import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from '../../components/PurpleBox/PurpleBox.js';
import CantileverLogo from '../../components/CantileverLogo/CantileverLogo.js';
import React from 'react'
import "../SignUpAs/SignUpAs.css"
import ForgotYourPassword from '../../components/ForgotYourPassword/ForgotYourPassword.js';
import ResetLinkSent from '../../components/ResetLinkSent/ResetLinkSent.js';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ForgotReset = () => {
    const dispatch = useDispatch();
    const counter1= useSelector((state) => state.counter1);

    useEffect(() => {
      dispatch({type: 'RES_COUNTER1'});
  }, []);


  return (
   
       <div className="sign-up-as-login">
      {counter1==0&&<ForgotYourPassword/>}
      {counter1==1&&<ResetLinkSent/>}
      

        <PurpleBox/>
    </div>
  )
}

export default ForgotReset