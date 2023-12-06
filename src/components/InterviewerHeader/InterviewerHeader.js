import { useState, useRef, useCallback } from "react";
import NotificationPopup from "../NotificationPopup/NotificationPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import { useNavigate } from "react-router-dom";
import "./InterviewerHeader.css";

const InterviewerHeader = () => {
  const claritynotificationLineRef = useRef(null);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(true);
  }, []);

  const closeNotificationPopup = useCallback(() => {
    setNotificationPopupOpen(false);
  }, []);

  const onFrameButton4Click = useCallback(() => {
    navigate("/settingsinterviewer");
  }, [navigate]);

  return (
    <>
      <div className="flex flex-row items-center justify-start gap-[var(--gap-base)] text-[color:var(--black)] gap-[var(--gap-13xl)] text-[color:var(--icon-grey)] absolute gap-[var(--gap-215xl)] text-left text-[length:var(--font-size-base)] text-[color:var(--color-darkslategray-200)] left-[21.03vw] top-[2.91vw]; font-family: var(--font-avenir-lt-std)">
        <div className="flex flex-col items-start justify-start font-[bold]">
          <div className="relative tracking-[-0.02em] leading-[1.59vw]">Hi Interviewer,</div>
          <div className="relative tracking-[-0.02em] leading-[1.59vw] text-[length:var(--font-size-15xl)] leading-[2.78vw] text-[color:var(--black)]">Welcome to Fulcrum!</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[var(--gap-base)] text-[color:var(--black)] gap-[var(--gap-13xl)] text-[color:var(--icon-grey)]">
          <div className="flex justify-start flex-row items-center">

          </div>
          <div className="flex flex-row items-center justify-start gap-[var(--gap-base)] text-[color:var(--black)]">
            <button
              className="cursor-pointer bg-transparent relative w-[2.12vw] h-[2.12vw] overflow-hidden shrink-0 p-0 border-0"
              ref={claritynotificationLineRef}
              onClick={openNotificationPopup}
            >
              <img className="absolute h-[81.01%] w-[82.78%] max-w-full overflow-hidden max-h-full left-[8.47%] right-[8.75%] top-[4.93%] bottom-[14.05%]" alt="" src="/vector8.svg" />
              <img className="absolute h-[81.01%] w-[82.78%] max-w-full overflow-hidden max-h-full left-[8.47%] right-[8.75%] top-[4.93%] bottom-[14.05%] h-[6.33%] w-[14.61%] left-[42.56%] right-[42.83%] top-[88.89%] bottom-[4.78%]" alt="" src="/vector9.svg" />
            </button>
            <div className="flex flex-row items-center justify-start gap-[var(--gap-9xs)]">
              <img
                className="relative w-[1.85vw] h-[1.85vw] overflow-hidden shrink-0"
                alt=""
                src="/icroundstar.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">4.9</div>
            </div>
            <button className="cursor-pointer bg-transparent relative w-[2.38vw] h-[2.38vw] p-0 border-0" onClick={onFrameButton4Click}>
              <div className="absolute bg-[color:var(--yellow)] border-[color:var(--color-gray-600)] box-border w-[2.38vw] h-[2.38vw] rounded-[50%] border-[0.19vw] border-solid left-0 top-0" />
              <img className="absolute left-[calc(50%_-_0.79vw)] w-[1.59vw] h-[1.72vw] object-cover top-[0.33vw]" alt="" src="/images-5@2x.png" />
            </button>
          </div>
        </div>
      </div>
      {isNotificationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-340}
          left={-250}
          relativeLayerRef={claritynotificationLineRef}
          onOutsideClick={closeNotificationPopup}
        >
          <NotificationPopup onClose={closeNotificationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default InterviewerHeader;
