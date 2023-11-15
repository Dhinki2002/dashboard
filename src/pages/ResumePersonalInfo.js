import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./ResumePersonalInfo.css";
import { Helmet } from "react-helmet";

const ResumePersonalInfo = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/resume-personal-info2");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/resume-personal-info2");
  }, [navigate]);

  const counter=2;

  return (
    <div className="resume-personal-info">
       <Helmet>
      <title>Resume Personal Info</title>
      <meta name="desc"
        content="Resume Personal Info"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="frame-parent108">
        <div className="choose-your-resume-template-wrapper">
          <div className="choose-your-resume">Choose your resume template</div>
        </div>
        <div className="frame-parent109">
          {/* <button className="phdots-three-parent9" onClick={onFrameButtonClick}>
            <div className="phdots-three" />
            <div className="icbaseline-plus-parent1">
              <img
                className="icbaseline-plus-icon3"
                alt=""
                src="/icbaselineplus2.svg"
              />
              <div className="create-blank">Create blank</div>
            </div>
          </button> */}
          <button className="frame-child72" onClick={onFrameButton1Click} />
          <button className="phdots-three-wrapper">
            <img className="phdots-three" alt="" src="/phdotsthree1.svg" />
          </button>
          <button className="phdots-three-frame">
            <img className="phdots-three" alt="" src="/phdotsthree2.svg" />
          </button>
          <button className="phdots-three-wrapper1">
            <img className="phdots-three" alt="" src="/phdotsthree3.svg" />
          </button>
          <img className="frame-child73" alt="" src="/frame-1271.svg" />
          <img className="frame-child73" alt="" src="/frame-1272.svg" />
          <img className="frame-child73" alt="" src="/frame-1273.svg" />
          <img className="frame-child73" alt="" src="/frame-1274.svg" />
          <img className="frame-child73" alt="" src="/frame-1275.svg" />
        </div>
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
