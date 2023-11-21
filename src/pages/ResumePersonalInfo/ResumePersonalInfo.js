import { useCallback } from "react";
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import { useNavigate } from "react-router-dom";
import "./ResumePersonalInfo.css";
import { Helmet } from "react-helmet";

const ResumePersonalInfo = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback((id) => {
    navigate(`/resume-personal-info2?id=${id}`);
  }, [navigate]);

  const buttonData = [
    {
      id:1,
      src: "/resume_template1.png",
    },
    {
      id:2,
      src: "/resume_template2.png",
    },
    {
      id:3,
      src: "/resume_template3.png",
    }
  ];

  const counter = 2;

  return (
    <div className="resume-personal-info">
      <Helmet>
        <title>Resume Personal Info</title>
        <meta name="desc"
          content="Resume Personal Info" />
      </Helmet>
      <Navbar counter={counter} />
      <Header />
      <div className="frame-parent108">
        <div className="choose-your-resume-template-wrapper">
          <div className="choose-your-resume">Choose your resume template</div>
        </div>
        <div className="frame-parent109">
          {buttonData.map((button) => (
            <button className="phdots-three-wrapper" onClick={()=>onFrameButton1Click(button.id)} key={button.id}>
              <img className="phdots-three-wrapper" alt="" src={button.src} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
