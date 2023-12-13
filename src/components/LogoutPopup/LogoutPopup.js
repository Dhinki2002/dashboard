

const LogoutPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[409.728px] h-[177.792px] overflow-hidden max-w-full max-h-full text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)] font-[bold] absolute left-[500px] top-[256px]">
      <button className="cursor-pointer bg-transparent absolute w-[27.12px] h-[27.12px] overflow-hidden p-0 border-0 left-[359px] top-[23.68px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[32.99%] right-[33%] top-[32.99%] bottom-[33%]" alt="" src="/vector.svg" />
      </button>
      <div className="flex flex-row items-start justify-start gap-[var(--gap-13xl)] absolute top-[calc(50%_-_55.04px)] left-[calc(50%_-_164.224px)] flex-col ">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="are-you-sure">Are you sure?</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[var(--gap-13xl)]">
          <button className=" cursor-pointer bg-transparent flex flex-row items-start justify-start p-0 border-0">
            <div className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] w-[137.984px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] box-border">
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Log out</div>
            </div>
          </button>
          <button className=" cursor-pointer bg-transparent flex flex-row items-start justify-start p-0 border-0">
            <div className="rounded-[var(--br-5xs)] bg-[color:var(--purple)] w-[137.984px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] box-border">
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left font-[bold]">Cancel</div>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
