import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const DreamStartTestPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.16px] h-[440.41px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
      <div className="flex items-start justify-start absolute left-[calc(50%_-_262.4px)] flex-col gap-[var(--gap-5xl)] top-[30.46px]">
        <div className="flex items-start justify-start  flex-col gap-[var(--gap-5xl)]  ">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[35.58px] font-[bold] ">Some more questions</div>
            <div className="relative tracking-[-0.02em] leading-[35.58px] font-[bold] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[6.784px] font-[normal] ">
              Answer the following to help us setup the test
            </div>
          </div>
          <div className="flex items-start justify-start  flex-col gap-[var(--gap-17xl)] text-[length:var(--font-size-lg)] ">
            <div className="flex items-start justify-start  flex-row gap-[var(--gap-xs)]">
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Language</div>
                <select className="rounded-[var(--br-xs)] border-[color:var(--color-gainsboro-400)] box-border w-[257.408px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid" />
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">No. of questions</div>
                <input
                  className="flex justify-start border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter no. of questions"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-start justify-start  flex-row gap-[var(--gap-xs)] ml-420px">
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Difficulty level</div>
                <select className="rounded-[var(--br-xs)] border-[color:var(--color-gainsboro-400)] box-border w-[257.408vw] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid w-[250px]" />
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative ">Type of questions</div>
                <select className="rounded-[var(--br-xs)] border-[color:var(--color-gainsboro-400)] box-border w-[257.408px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid  w-[250px]" />
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0" onClick={onFrameButtonClick}>
          <div className="rounded-[var(--br-5xs)] bg-[color:var(--color-mediumseagreen)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] gap-[var(--gap-3xs)] mt-[-10px]">
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Start test</div>
            <img
              className="relative w-[13.56px] h-[13.56px] overflow-hidden shrink-0"
              alt=""
              src="/solarplaybold3.svg"
            />
          </div>
        </button>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.352px] top-[27.136px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[32.99%] right-[33%] top-[32.99%] bottom-[33%]" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default DreamStartTestPopup;
