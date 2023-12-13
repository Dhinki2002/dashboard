// import "./ScheduleTestPopup.css";

const ScheduleTestPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.168px] h-[720.112px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[90px]">
      <div className="flex items-start justify-start  absolute top-[calc(50%_-_240px)] left-[calc(50%_-_263px)] flex-col gap-[38px]">
        <div className="flex items-start justify-start  flex-col gap-[var(--gap-5xl)] ">
          <div className="flex-col items-start  flex justify-start">
            <div className="add-new-test">Add new test</div>
            <div className="relative tracking-[-0.02em] leading-[35.58px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.8px]">
              Fill in the details to add a new test
            </div>
          </div>
          <div className="flex justify-start  flex-col items-start gap-[var(--gap-17xl)] text-[length:var(--font-size-lg)]">
            <div className="flex-row items-start gap-[var(--gap-xs)] flex justify-start ">
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Company</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter the name of company"
                  type="text"
                />
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Level</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Choose relative of test"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-row items-start gap-[var(--gap-xs)] flex justify-start ">
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">No. of questions</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter no. of questions"
                  type="text"
                />
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Time limit</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter time limit"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start  flex-col gap-[var(--gap-base)] text-[length:var(--font-size-xl)]  ">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
              <div className="relative">Enter topic tags</div>
              <input
                className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[525.6px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                placeholder="Enter topics to be assesed"
                type="text"
              />
            </div>
            
          </div>
        </div>
        <button className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0">
          <div className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] cursor-pointer" onClick={onClose}>
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Add test</div>
          </div>
        </button>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.352px] top-[27.136px]" onClick={onClose}>
        <img className="absolute h-[34.01%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[32.99%] right-[33%] top-[32.99%] bottom-[33%]" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default ScheduleTestPopup;
