import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const AddDreamCompanyPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.16px] h-[412.288px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
      <img
        className="absolute w-[27.136px] h-[27.136px] overflow-hidden cursor-pointer left-[531.2px] top-[16.64px]"
        alt=""
        src="/basilcrossoutline.svg"
        onClick={onClose}
      />
      <div className="flex items-start justify-start  absolute left-[calc(50%_-_262.4px)] flex-col gap-[var(--gap-29xl)] top-[30.464px]">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-5xl)] ">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[35.5px] font-[bold]">Add your dream company</div>
            <div className="relative tracking-[-0.02em] leading-[25.5px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.78px]">
              Fill in the details to prepare for your dream company
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[var(--gap-17xl)] text-[length:var(--font-size-lg)] ">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] flex-row ">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                <div className="relative">Dream company</div>
                <input
                  className="flex flex-col items-start justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid "
                  placeholder="Enter your dream company"
                  type="text"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                <div className="relative">Job Profile</div>
                <input
                  className="flex flex-col items-start justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid "
                  placeholder="Enter the job"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] flex-row ">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                <div className="relative">Select interview date</div>
                <input
                  className="border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Select date"
                  type="date"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)]">
                <div className="relative">Preparation status</div>
                <input
                  className="flex flex-col items-start justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid "
                  placeholder="How prepared are you?"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0" onClick={onFrameButtonClick}>
          <div
            className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] cursor-pointer"
            onClick={onFrameContainer9Click}
          >
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Pay for company</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddDreamCompanyPopup;
