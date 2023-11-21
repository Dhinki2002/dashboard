import { useCallback } from "react";
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import { useNavigate } from "react-router-dom";
import "./ResumeDashboardIndividual.css";
import { Helmet } from "react-helmet";

const ResumeDashboardIndividual = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/resume-personal-info");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://resume.pdf");
  }, []);

  const counter=2;

  return (
    <div className="resume-dashboard-individual">
       <Helmet>
      <title>Resume Dashboard</title>
      <meta name="desc"
        content="Resume Dashboard"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="frame-parent159">
        <div className="resume-container">
          <div className="resume1">Resume</div>
        </div>
        <button
          className="icbaseline-plus-parent14"
          onClick={onFrameButtonClick}
        >
          <img
            className="icbaseline-plus-icon16"
            alt=""
            src="/icbaselineplus6.svg"
          />
          <div className="create-new-resume">Create new resume</div>
        </button>
        <div className="frame-parent160">
          <button className="frame-parent161" onClick={onFrameButton1Click}>
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-82-icon" alt="" src="/image-82@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="frame-parent161">
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-85-icon" alt="" src="/image-85@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="frame-parent161">
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-87-icon" alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="frame-parent161">
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-87-icon" alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="frame-parent161">
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-87-icon" alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="frame-parent161">
            <div className="resume-sde1-parent">
              <div className="resume-sde1">Resume SDE1</div>
              <div className="created-on-23-04-23">Created on: 23-04-23</div>
            </div>
            <div className="image-82-wrapper">
              <img className="image-87-icon" alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="phdots-three-icon14"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDashboardIndividual;
