import { useState, useCallback } from "react";
import InterviewPopup from "../InterviewPopup/InterviewPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import { useNavigate } from "react-router-dom";
import "./StartInterviewPopup.css";

const StartInterviewPopup = ({ onClose }) => {
  const [isInterviewPopupOpen, setInterviewPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  const openInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(true);
  }, []);

  const closeInterviewPopup = useCallback(() => {
    setInterviewPopupOpen(false);
  }, []);

  return (
    <>
      <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[491.9px] h-[404px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[256px]">
        <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[448px] top-[10.24px]" onClick={onClose}>
          <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[33%] right-[32.99%] top-[32.99%] bottom-[33%]" alt="" src="/vector3.svg" />
        </button>
        <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] absolute top-[calc(50%_-_176px)] flex-col gap-[var(--gap-29xl)] left-[27.136px] ">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
              <img
                className="relative w-[80px] h-[35px] overflow-hidden shrink-0"
                alt=""
                src="/company-logo1.svg"
              />
              <div className="flex items-start justify-start  flex-col">
                <div className="relative tracking-[-0.02em] leading-[35.6px] font-[bold]">SDE-1 Interview</div>
                <div className="flex items-start justify-start  flex-row gap-[var(--gap-xl)] text-[length:var(--font-size-lg)]">
                  <div className="relative tracking-[-0.02em] leading-[35.6px]">Saturday, August 29</div>
                  <div className="relative tracking-[-0.02em] leading-[35.6px]">02:00 pm-3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="text-[length:var(--font-inherit)] text-[color:var(--icon-grey)] flex flex-col items-start justify-start gap-[var(--gap-xs)] ">
              <div className="flex items-start justify-start  flex-col">
                <div className="flex flex-row items-start justify-start gap-[var(--gap-37xl)]">
                  <button className="cursor-pointer bg-transparent relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[35.6px] text-[color:var(--black)] text-left inline-block p-0 border-0">Do’s</button>
                  <button className="cursor-pointer bg-transparent relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[35.6px] text-[color:var(--black)] text-left inline-block p-0 border-0">Don’ts</button>
                </div>
                <img className="relative w-[437.632px] h-[1.67px]" alt="" src="/group-5911.svg" />
              </div>
              
                <div className="relative tracking-[-0.02em] leading-[30.46px] font-[light] text-[medium]">
                  <ul className="pl-[var(--padding-5xl)] m-0">
                    <li className="mb-0">
                      Dress professionally to make a positive first impression.
                    </li>
                    <li className="mb-0">
                      Dress professionally to make a positive first impression.
                    </li>
                    <li>
                      Dress professionally to make a positive first impression.
                    </li>
                  </ul>
                </div>
              
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)]">
            <button className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-mediumseagreen)] rounded-[var(--br-5xs)] w-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[var(--gap-3xs)] border-0" onClick={onFrameButtonClick}>
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Start Now</div>
              <img
                className="relative w-[13.5px] h-[13.5px] overflow-hidden shrink-0"
                alt=""
                src="/solarplaybold.svg"
              />
            </button>
            <button
              className="cursor-pointer border-[color:var(--incomplete)] pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-sandybrown-200)] rounded-[var(--br-5xs)] box-border w-[134.656px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid"
              onClick={openInterviewPopup}
            >
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--incomplete)] text-left font-[bold]">Reschedule</div>
            </button>
            <button className="cursor-pointer border-[color:var(--danger)] pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-crimson-100)] rounded-[var(--br-5xs)] box-border w-[134.656px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid" onClick={onClose}>
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--danger)] text-left font-[bold]">Cancel</div>
            </button>
          </div>
        </div>
      </div>
      {isInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInterviewPopup}
        >
          <InterviewPopup onClose={closeInterviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StartInterviewPopup;
