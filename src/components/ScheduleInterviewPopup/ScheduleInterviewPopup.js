import { useState, useCallback } from "react";
import ScheduledSuccessfullyPopup from "../ScheduledSuccessfullyPopup/ScheduledSuccessfullyPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";


const ScheduleInterviewPopup = ({ onClose }) => {
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
      <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.168px] h-[330.888px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[256px]">
        <div className="popup">
        <div className="flex items-start justify-start  absolute left-[calc(50%_-_262.4px)] flex-col gap-[var(--gap-29xl)] top-[30px]">
          <div className="flex items-start justify-start  flex-col gap-[var(--gap-5xl)]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[35.584px] font-[bold]">
                Schedule an Interview
              </div>
              <div className="relative tracking-[-0.02em] leading-[35.584px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.784px]">
                Fill in the details to schedule your interview
              </div>
            </div>
            <div className="flex items-start justify-start  flex-col text-[length:var(--font-size-lg)] ">
              <div className="flex items-start justify-start  flex-row gap-[var(--gap-xs)]">
                <div className="flex-col gap-[var(--gap-xs)]  flex items-start justify-start">
                  <div className="relative">
                    Select interview date
                  </div>
                  <input
                    className="border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                    placeholder="Select date"
                    type="date"
                  />
                </div>
                <div className="flex-col gap-[var(--gap-xs)]  flex items-start justify-start">
                  <div className="relative">
                    Select interview time
                  </div>
                  <input
                    className="border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                    placeholder="Select time"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0"
            onClick={openScheduledSuccessfullyPopup}
          >
            <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-mediumseagreen)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] gap-[var(--gap-3xs)]">
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Schedule Interview</div>
              <img
                className="relative w-[13.568px] h-[13.568px] overflow-hidden shrink-0"
                alt=""
                src="/solarplaybold1.svg"
              />
            </div>
          </button>
        </div>
        <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.352px] top-[27.136]" onClick={onClose}>
          <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full top-[32.99%] bottom-[33%] inset-x-[32.99%]" alt="" src="/vector3.svg" />
        </button>
        </div>
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

export default ScheduleInterviewPopup;
