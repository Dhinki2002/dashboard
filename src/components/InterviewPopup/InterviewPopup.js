import { useState, useCallback } from "react";
import ScheduledSuccessfullyPopup from "../ScheduledSuccessfullyPopup/ScheduledSuccessfullyPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";


const InterviewPopup = ({ onClose }) => {
  const [isScheduledSuccessfullyPopupOpen, setScheduledSuccessfullyPopupOpen] =
    useState(false);

  const openScheduledSuccessfullyPopup = useCallback(() => {
    setScheduledSuccessfullyPopupOpen(true);
  }, []);

  const closeScheduledSuccessfullyPopup = useCallback(() => {
    setScheduledSuccessfullyPopupOpen(false);
  }, []);

  return (
    <>
      <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[44.31vw] h-[32.21vw] overflow-hidden max-w-full max-h-full text-left text-[1.56vw] text-[color:var(--black)] absolute left-[30vw] top-[20vw]">
        <div className="flex items-start justify-start  absolute left-[calc(50%_-_20.5vw)] flex-col gap-[var(--gap-29xl)] top-[2.38vw]">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-5xl)] ">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Schedule an Interview</div>
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-0.53vw] ">
                Fill in the details to schedule your interview
              </div>
            </div>
            <div className="flex flex-col items-start justify-start  gap-[var(--gap-17xl)] text-[length:var(--font-size-lg)]">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] flex-row ">
                <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                  <div className="relative">Job Profile</div>
                  <input
                    className="flex flex-col items-start justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[20.11vw] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid "
                    placeholder="Enter the job"
                    type="text"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                  <div className="relative">Dream company</div>
                  <input
                    className="flex flex-col items-start justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[20.11vw] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid "
                    placeholder="Enter your dream company"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] flex-row ">
                <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                  <div className="relative">
                    Select interview date
                  </div>
                  <input
                    className="border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[20.11vw] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid"
                    placeholder="Select date"
                    type="date"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                  <div className="relative">
                    Select interview time
                  </div>
                  <input
                    className="border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[20.11vw] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid"
                    placeholder="Select time"
                    type="time"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0">
            <div
              className="rounded-[var(--br-5xs)] bg-[color:var(--color-mediumseagreen)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] gap-[var(--gap-3xs)] cursor-pointer"
              onClick={openScheduledSuccessfullyPopup}
            >
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Schedule Interview</div>
              <img
                className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0"
                alt=""
                src="/solarplaybold1.svg"
              />
            </div>
          </button>
        </div>
        <button className="cursor-pointer bg-transparent absolute w-[2.12vw] h-[2.12vw] overflow-hidden p-0 border-0 left-[40.34vw] top-[2.12vw]" onClick={onClose}>
          <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[33%] right-[32.99%] top-[32.99%] bottom-[33%]" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isScheduledSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduledSuccessfullyPopup}
        >
          <ScheduledSuccessfullyPopup
            onClose={closeScheduledSuccessfullyPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewPopup;