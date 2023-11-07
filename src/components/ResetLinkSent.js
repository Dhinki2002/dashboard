import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PurpleBox from "./PurpleBox";
import CantileverLogo from "./CantileverLogo";
import "./ResetLinkSent.css";
import { useSelector, useDispatch } from "react-redux";

const ResetLinkSent = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();


  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
    dispatch({type:'DEC_COUNTER1'});
  }, [navigate]);

  return (
    <div className="reset-link-sent-login">
      
      <CantileverLogo cantileverlogoblack2="/1644088580619-cantileverlogoblack-2@2x.png" />
      <div className="frame-parent13-login">
        <div className="vector-parent-login">
          <img className="vector-icon-login" alt="" src="/vector54.svg" />
          <div className="frame-parent14-login">
            <div className="reset-link-sent-wrapper-login">
              <div className="reset-link-sent1-login">Reset link sent!</div>
            </div>
            <div className="check-your-mail-login">
              Check your mail box to reset your password.
            </div>
          </div>
          <div className="teenyiconstick-circle-solid-login" />
        </div>
        <div className="frame-parent15-login">
          <button className="frame-wrapper8-login" onClick={onFrameButtonClick}>
            <div className="frame-wrapper9-login">
              <div className="proceed-to-login-wrapper-login">
                <div className="proceed-to-login-login">Proceed to login</div>
              </div>
            </div>
          </button>
          <Link className="new-to-fulcrum-container1-login" to="/">
            <span>{`New to Fulcrum? `}</span>
            <span className="sign-up-for1-login">Sign Up for free</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetLinkSent;
