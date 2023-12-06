import { useCallback } from "react";
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import { useNavigate } from "react-router-dom";
// import "./ResumePersonalInfo.css";
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
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]">
      <Helmet>
        <title>Resume Personal Info</title>
        <meta name="desc"
          content="Resume Personal Info" />
      </Helmet>
      <Navbar counter={counter} />
      <Header />
      <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.7vw] overflow-hidden left-[21.03vw] top-[9.13vw]">
        <div className="absolute flex flex-col items-start justify-start left-[1.59vw] top-[1.59vw]">
          <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Choose your resume template</div>
        </div>
        <div className="absolute w-[72.62vw] flex flex-row flex-wrap items-start justify-start gap-[2.51vw] left-[1.59vw] top-[6.08vw]">
          {buttonData.map((button) => (
            <button className="cursor-pointer bg-transparent w-[12.5vw] h-[17.66vw] bg-cover bg-no-repeat bg-top p-0 border-0 relative overflow-hidden shrink-0 " onClick={()=>onFrameButton1Click(button.id)} key={button.id}>
              <img className="cursor-pointer bg-transparent w-[12.5vw] h-[17.66vw] bg-cover bg-no-repeat bg-top p-0 border-0 relative overflow-hidden shrink-0 " alt="" src={button.src} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
