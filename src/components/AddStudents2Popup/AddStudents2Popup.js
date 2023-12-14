import { useState, useCallback } from "react";
import StudentsAddedSuccessfullyPopup from "../StudentsAddedSuccessfullyPopup/StudentsAddedSuccessfullyPopup.js";
import PortalPopup from "../PortalPopup/PortalPopup.js";
import "./AddStudents2Popup.css";

const AddStudents2Popup = ({ onClose }) => {
  const [
    isStudentsAddedSuccessfullyPopupOpen,
    setStudentsAddedSuccessfullyPopupOpen,
  ] = useState(false);

  const openStudentsAddedSuccessfullyPopup = useCallback(() => {
    setStudentsAddedSuccessfullyPopupOpen(true);
  }, []);

  const closeStudentsAddedSuccessfullyPopup = useCallback(() => {
    setStudentsAddedSuccessfullyPopupOpen(false);
  }, []);

  return (
    <>
      <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.16px] h-[297.088px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[256px]">
        <div className="flex flex-col items-start justify-start absolute left-[calc(50%_-_262.4px)] top-[28.8px] ">
          <div className="flex flex-col items-start justify-start  gap-[var(--gap-lg)]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.02em] leading-[35.58px] font-[bold]">Add students</div>
                <div className="relative tracking-[-0.02em] leading-[35.58px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.8px]">
                  Upload list of students or add manually
                </div>
              </div>
            </div>
            <div className="gap-[var(--gap-xl)] text-[length:var(--font-size-xl)]  flex flex-col items-start justify-start">
              <div className="flex flex-col items-center  justify-start">
                <div className="flex flex-col items-center  w-[524.9px] justify-center">
                  <div className="flex items-center justify-center  rounded-[var(--br-xs)] border-[color:var(--color-dimgray-100)] box-border w-[524.9px] h-[98.176px] flex-row pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-dashed">
                    <div className="flex items-center justify-center  flex-col gap-[var(--gap-base)]">
                      <div className="flex flex-row items-center justify-center gap-[var(--gap-5xs)] gap-[var(--gap-9xs)] ">
                        <img
                          className="relative w-[16.9px] h-[16.9px] overflow-hidden shrink-0"
                          alt=""
                          src="/phfilecsvduotone.svg"
                        />
                        <div className="flex flex-row items-center justify-center gap-[var(--gap-5xs)]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="relative underline ">student.csv</div>
                          </div>
                          <img
                            className="relative w-[16.9px] h-[16.9px]"
                            alt=""
                            src="/vector2.svg"
                          />
                        </div>
                      </div>
                      <div className="relative text-[length:var(--font-size-sm)] text-[color:var(--color-dimgray-100)]">
                        1200 students detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] w-[524.9px] overflow-hidden flex flex-row items-center justify-center box-border border-0"
                onClick={openStudentsAddedSuccessfullyPopup}
              >
                <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Pay for1200 students</div>
              </button>
            </div>
          </div>
        </div>
        <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.352px] top-[27.136px]" onClick={onClose}>
          <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[33%] right-[32.99%] top-[32.99%] bottom-[33%]" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isStudentsAddedSuccessfullyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStudentsAddedSuccessfullyPopup}
        >
          <StudentsAddedSuccessfullyPopup
            onClose={closeStudentsAddedSuccessfullyPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default AddStudents2Popup;
