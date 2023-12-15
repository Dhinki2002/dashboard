// import "./DashboardInterviewerCardPopup.css";

const DashboardInterviewerCardPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[500.9px] h-[550.84px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
      <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] absolute top-[calc(50%_-_200.6px)] flex-col gap-[var(--gap-29xl)] left-[27.136px] ">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] ">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-xs)] ">
            <img
              className="company-logo-icon1"
              alt=""
              src="/company-logo1.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[35.6px] font-[bold]">SDE-1 Interview</div>
              <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] text-[length:var(--font-size-lg)]">
                <div className="relative tracking-[-0.02em] leading-[35.5px]">Saturday, August 29</div>
                <div className="relative tracking-[-0.02em] leading-[35.5px]">02:00 pm-3:00 pm</div>
              </div>
            </div>
          </div>
          <div className="relative tracking-[-0.02em] leading-[35.5px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[var(--gap-37xl)]">
                <button className="cursor-pointer bg-transparent relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[35.584px] text-[color:var(--black)] text-left inline-block p-0 border-0">Do’s</button>
                <button className="cursor-pointer bg-transparent relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[35.584px] text-[color:var(--black)] text-left inline-block p-0 border-0">Don’ts</button>
              </div>
              <img className="relative w-[437.632px] h-[2.56px]" alt="" src="/group-591.svg" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[30.5px]">
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
        </div>
        <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)]">
          <button className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-mediumseagreen)] rounded-[var(--br-5xs)] w-[10.52vw] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[var(--gap-3xs)] border-0">
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Start Now</div>
            <img
              className="relative w-[13.56px] h-[13.56px] overflow-hidden shrink-0"
              alt=""
              src="/solarplaybold.svg"
            />
          </button>
          <button className=" cursor-pointer border-[color:var(--incomplete)] pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-sandybrown-200)] rounded-[var(--br-5xs)] box-border w-[134.65px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid">
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--incomplete)] text-left">Reschedule</div>
          </button>
          <button className="cursor-pointer border-[color:var(--danger)] pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-crimson-100)] rounded-[var(--br-5xs)] box-border w-[134.65px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid" onClick={onClose}>
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--danger)] text-left">Cancel</div>
          </button>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[444.416px] top-[20.35px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full top-[32.99%] bottom-[33%] inset-x-[32.99%]" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default DashboardInterviewerCardPopup;
