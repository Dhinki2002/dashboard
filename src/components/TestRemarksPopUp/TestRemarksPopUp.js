

const TestRemarksPopUp = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[568px] h-[650px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[115.2px]">
      <div className="absolute left-[calc(50%_-_262.4px)] flex flex-col items-start justify-start gap-[var(--gap-21xl)] top-[30.464px]">
        <div className="flex flex-row items-start justify-start flex-col gap-[var(--gap-5xl)]  ">
          <div className="flex flex-col items-start justify-start text-[length:var(--font-size-5xl)]">
            <div className="relative tracking-[-0.02em] leading-[35.5px] font-[bold]">Remarks</div>
            <div className="relative tracking-[-0.02em] leading-[35.5px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.78px] ">
              Kindly give remarks for the interview
            </div>
          </div>
          <div className="flex flex-row items-start justify-start flex-col ">
            <div className="flex flex-row items-start justify-start">
              <div className="flex items-start justify-start  flex-col gap-[var(--gap-xs)]">
                <div className="relative">Overall Impression</div>
                <textarea
                  className="flex items-start justify-start  border-[color:var(--color-gainsboro-400)] bg-transparent text-[length:var(--font-size-xl)] rounded-[var(--br-xs)] box-border w-[524.92px] h-[73.6px] flex-row pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start flex-col ">
            <div className="flex flex-row items-start justify-start">
              <div className="flex items-start justify-start  flex-col gap-[var(--gap-xs)]">
                <div className="relative">Overall Impression</div>
                <textarea
                  className="flex items-start justify-start  border-[color:var(--color-gainsboro-400)] bg-transparent text-[length:var(--font-size-xl)] rounded-[var(--br-xs)] box-border w-[524.92px] h-[73.6px] flex-row pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start flex-col ">
            <div className="flex flex-row items-start justify-start">
              <div className="flex items-start justify-start  flex-col gap-[var(--gap-xs)]">
                <div className="relative">Overall Impression</div>
                <textarea
                  className="flex items-start justify-start  border-[color:var(--color-gainsboro-400)] bg-transparent text-[length:var(--font-size-xl)] rounded-[var(--br-xs)] box-border w-[524.92px] h-[73.6px] flex-row pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="How was the overall impression?"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <button className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-mediumseagreen)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-0" onClick={onClose}>
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Submit remarks</div>
          </button>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.35px] top-[27.136]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full top-[32.99%] bottom-[33%] inset-x-[32.99%]" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default TestRemarksPopUp;
