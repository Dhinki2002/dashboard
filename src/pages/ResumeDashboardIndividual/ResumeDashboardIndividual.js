import { useCallback } from "react";
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import { useNavigate } from "react-router-dom";
// import "./ResumeDashboardIndividual.css";
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
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]">
       <Helmet>
      <title>Resume Dashboard</title>
      <meta name="desc"
        content="Resume Dashboard"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[53.7vw] left-[21.03vw] top-[9.13vw]">
        <div className="absolute flex flex-col items-start justify-start left-[1.59vw] top-[1.59vw]">
          <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Resume</div>
        </div>
        <button
          className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-5xl)] pb-[var(--padding-xs)] pl-[var(--padding-5xl)] bg-[color:var(--purple)] absolute rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center gap-[var(--gap-7xs)] border-0 left-[59.79vw] top-[1.32vw]"
          onClick={onFrameButtonClick}
        >
          <img
            className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
            alt=""
            src="/icbaselineplus6.svg"
          />
          <div className="relative text-[1.05vw] text-[color:var(--white)] text-left font-[bold]">Create new resume</div>
        </button>
        <div className="absolute w-[72.62vw] flex flex-row flex-wrap items-start justify-start gap-[var(--gap-5xl)] left-[1.59vw] top-[6.08vw]">
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0" onClick={onFrameButton1Click}>
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="image-82-icon" alt="" src="/image-82@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="image-85-icon" alt="" src="/image-85@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="absolute left-[calc(50%_-_11.54vw)] w-[23.08vw] h-[28.84vw] object-cover top-0 h-[32.54vw]  " alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="absolute left-[calc(50%_-_11.54vw)] w-[23.08vw] h-[28.84vw] object-cover top-0 h-[32.54vw]  " alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="absolute left-[calc(50%_-_11.54vw)] w-[23.08vw] h-[28.84vw] object-cover top-0 h-[32.54vw]  " alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
              alt=""
              src="/phdotsthree.svg"
            />
          </button>
          <button className="cursor-pointer bg-[color:var(--white)] relative rounded-[var(--br-base)] shadow-[-0.13vw_0_0_rgba(0,0,0,0.1),0.13vw_-0.13vw_0_rgba(0,0,0,0.1),0_0.2vw_0_#605bff] w-[23.08vw] h-[15.01vw] overflow-hidden shrink-0 p-0 border-0">
            <div className="absolute flex flex-col items-start justify-start left-[1.32vw] top-[9.72vw]">
              <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left font-[bold]">Resume SDE1</div>
              <div className="relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left mt-[-1.06vw]">Created on: 23-04-23</div>
            </div>
            <div className="absolute left-[calc(50%_-_11.54vw)] top-0 rounded-[var(--br-base)_var(--br-base)_0_0] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.1)] w-[23.08vw] h-[8.53vw] overflow-hidden ">
              <img className="absolute left-[calc(50%_-_11.54vw)] w-[23.08vw] h-[28.84vw] object-cover top-0 h-[32.54vw]  " alt="" src="/image-87@2x.png" />
            </div>
            <img
              className="absolute w-[1.85vw] h-[1.85vw] overflow-hidden left-[19.91vw] top-[11.04vw]"
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
