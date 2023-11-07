import { useCallback } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import WelcomeText from "./WelcomeText";
import "./LoginWithEmail.css";
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useSelector,useDispatch } from "react-redux";
const LoginWithEmail = () => {
  const navigate = useNavigate();

  
  
  
  const dispatch=useDispatch();
  const onFrameButton1Click = useCallback(() => {
    
    dispatch({type:'INC'});
    


  }, []);
  
  const onFrameButtonClick = useCallback(async () => {
    const email = document.querySelector(".frame-child16-login").value;
    const password = document.querySelector(".frame-child17-login").value;

    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    const data = {
      email: email,
      password: password
    };
    

    
    navigate('/go-score-dashboardindividual');
  }, [navigate]);



  const onSuccess=(res)=>{
    console.log("Success ! current user:",res.profileObj);
  }
  const onFailure=(res)=>{
    console.log("Failed ! res",res);
  }

  return (
   
    <div className="login-with-email1-login">
      <div className="cantileverlogoblack-2-container-login">
        <CantileverLogo
          cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
          cantileverlogoblack2IconPosition="relative"
          cantileverlogoblack2IconTop="unset"
          cantileverlogoblack2IconLeft="unset"
        />
        <div className="frame-parent27-login">
          <WelcomeText
            frameDivPosition="unset"
            frameDivTop="unset"
            frameDivLeft="unset"
            welcomeToFulcrumColor="#212121"
            yourPathToColor="#212121"
            welcomeToFulcrum="Welcome to Fulcrum"
          />
          <div className="frame-parent28-login">
            <div className="frame-parent29-login">
              <div className="frame-parent29-login">
                <div className="frame-parent31-login">
                  <div className="frame-wrapper19-login">
                  <div className="flat-color-iconsgoogle-container-login">
                    <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign up with Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                        </div>
                        </div>
                  <button
                    className="frame-wrapper20-login"
                    onClick={onFrameButton1Click}
                  >
                    <div className="flat-color-iconsgoogle-container-login">
                      <img
                        className="mingcutecoupon-line-icon-login"
                        alt=""
                        src="/mingcutecouponline.svg"
                      />
                      <div className="login-with-google1-login">Login with Code</div>
                    </div>
                  </button>
                </div>
                <div className="line-container-login">
                  <div className="line-container-login">
                    <div className="frame-child14-login" />
                    <div className="or2-login">or</div>
                  </div>
                  <div className="frame-child14-login" />
                </div>
              </div>
              <div className="frame-parent33-login">
                <div className="frame-parent34-login">

                  <div className="email-group-login">
                    <div className="or2-login">Email</div>
                    <input
                      className="frame-child16-login"
                      placeholder="Enter Email"
                      type="email"
                    />
                  </div>
                  <div className="frame-parent35-login">
                    <div className="email-group-login">
                      <div className="or2-login">Password</div>
                      <input
                        className="frame-child17-login"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>

                    <Link
                      className="forgot-password-login"
                      to="/forgot-reset"
                    >
                      Forgot password?
                    </Link>

                  </div>


                </div>
                <button className="frame-wrapper21-login" onClick={onFrameButtonClick}>
                  <div className="login-container-login">
                    <div className="login1-login">Login</div>
                  </div>
                </button>
              </div>
            </div>
            <Link className="new-to-fulcrum-container2-login" to="/">
              <span>{`New to Fulcrum? `}</span>
              <span className="sign-up-for2-login">Sign Up for free</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default LoginWithEmail;
