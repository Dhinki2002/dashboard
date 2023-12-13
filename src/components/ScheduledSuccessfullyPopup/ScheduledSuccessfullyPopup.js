// import "./ScheduledSuccessfullyPopup.css";

const ScheduledSuccessfullyPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[452.864px] h-[242.944px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--color-gray-300)] absolute left-[450px] top-[256px]">
      <div className="absolute w-[405.504px] h-[156.672px] text-[20vw] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)] absolute gap-[var(--gap-5xl)] ">
          <img className="w-[76.16px] h-[76.16px] relative" alt="" src="/vector4.svg" />
          <div className="flex flex-col items-start justify-start ">
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-[bold] text-[25px] ">
                Interview scheduled succesfully!
              </div>
            </div>
            <div className="relative text-[25px]">Sit back and relax.</div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[38.144px] h-[38.144px] overflow-hidden p-0 border-0 left-[394.496px] top-[20.3px]" onClick={onClose}>
        <img className="absolute h-[32.69%] w-[32.7%] max-w-full overflow-hidden max-h-full top-[33.65%] bottom-[33.66%] inset-x-[33.65%]" alt="" src="/vector24.svg" />
      </button>
    </div>
  );
};

export default ScheduledSuccessfullyPopup;
