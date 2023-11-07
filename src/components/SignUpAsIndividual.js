import { useCallback ,useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import WelcomeText from "./WelcomeText";
import "./SignUpAsIndividual.css";
import { GoogleLogin } from 'react-google-login';
const clientId = "142527539837-hjp2dbkr8tb6oj0d7b5kqvl83phrv3c2.apps.googleusercontent.com"
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const SignUpAsIndividual = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const onFrameButtonClick = useCallback(() => {
    const payload1= {
      name:name,
      email:email,
      phone:phone,
    };
    console.log(payload1);
    
    dispatch({type:'UPDATE_INDIVIDUAL1', payload: payload1});
    dispatch({type:'INC_COUNTER2'})
  }, [name, email, phone]);

  
  
  
  const onSuccess=(res)=>{
    console.log("Success ! current user:",res.profileObj);
  }
  const onFailure=(res)=>{
    console.log("Failed ! res",res);
  }
  
  

  
  
  
  
  
  
  
  

  return (
    <div className="sign-up-as-individual-login">
      <CantileverLogo
        cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png"
        cantileverlogoblack2IconPosition="absolute"
        cantileverlogoblack2IconTop="94px"
        cantileverlogoblack2IconLeft="84px"
      />
      <WelcomeText
        frameDivPosition="absolute"
        frameDivTop="200px"
        frameDivLeft="84px"
        welcomeToFulcrumColor="#0e0e10"
        yourPathToColor="#0e0e10"
        welcomeToFulcrum="Welcome to Fulcrum:"
      />
      <div className="frame-parent19-login">
        <div className="frame-parent20-login">
          <div className="frame-wrapper12-login">
            <div className="frame-wrapper13-login">
              {}
                {}
                <div className="sign-up-with-login">
                <GoogleLogin
                    
                          clientId={clientId}
                          buttonText="Sign In With Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                        </div>
              {}
            </div>
          </div>
          <div className="line-group-login">
            <div className="line-group-login">
              <div className="line-div-login" />
              <div className="name-login">or</div>
            </div>
            <div className="line-div-login" />
          </div>
        </div>
        <div className="frame-parent22-login">
          <form method="POST">
            <div className="name-parent-login">
              <div className="name-login">Name</div>
              <input
                className="frame-child9-login"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="frame-wrapper14-login">
              <div className="name-parent-login">
                <div className="name-login">Email</div>
                <input
                  className="frame-child9-login"
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="frame-wrapper14-login">
              <div className="name-parent-login">
                <div className="name-login">Phone no.</div>
                <input
                  className="frame-child9-login"
                  placeholder="Enter your phone no."
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="frame-parent23-login">
        <button className="frame-wrapper16-login" onClick={onFrameButtonClick}>
          <div className="continue-frame-login">
            <div className="continue2-login">Continue</div>
          </div>
        </button>
        <Link className="already-have-an-container3-login" to="/login">
          <span>{`Already have an account? `}</span>
          <span className="sign-in3-login">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpAsIndividual;
