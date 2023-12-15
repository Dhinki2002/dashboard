

const AddStudentsManualPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567px] h-[290px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[256px]">
      <div className="flex items-start justify-start  absolute left-[calc(50%_-_262.4px)] flex-col gap-[var(--gap-13xl)] top-[29px]">
        <div className="flex items-start justify-start  flex-col gap-[var(--gap-lg)] ">
          <div className="flex-col items-start  flex justify-start">
            <div className="flex-col items-start  flex justify-start">
              <div className="relative tracking-[-0.02em] leading-[35.6px] font-[bold]">Add students</div>
              <div className="relative tracking-[-0.02em] leading-[35.6px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.8px]">
                Upload list of students or add manually
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start  flex-col  text-[length:var(--font-size-lg)] ">
            <div className="flex items-start justify-start  flex-row gap-[var(--gap-xs)]">
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Name</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter the name"
                  type="text"
                />
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-xs)]">
                <div className="relative">Email</div>
                <input
                  className="flex justify-start  border-[color:var(--color-gainsboro-400)] text-[length:var(--font-size-xl)] bg-transparent rounded-[var(--br-xs)] box-border w-[257.408px] flex-row items-center pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid"
                  placeholder="Enter the email"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-start justify-start  cursor-pointer bg-transparent flex-row p-0 border-0">
          <div className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)]">
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold] ">Send invite</div>
          </div>
        </button>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516px] top-[27.136px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[32.99%] right-[33%] top-[32.99%] bottom-[33%]" alt="" src="/vector.svg" />
      </button>
    </div>
  );
};

export default AddStudentsManualPopup;
