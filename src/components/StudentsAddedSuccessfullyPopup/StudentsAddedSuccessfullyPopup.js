

const StudentsAddedSuccessfullyPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[452.864px] h-[242.9px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--color-gray-300)] absolute left-[384px] top-[256px]">
      <div className="absolute left-[calc(50%_-_201.08px)] w-[405.5px] h-[156.6px] top-[43.136px]">
        <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)]  absolute gap-[var(--gap-5xl)] left-0 top-0">
          <img className=" w-[76.16px] h-[76.16px]  relative" alt="" src="/vector4.svg" />
          <div className="flex flex-col items-start justify-start gap-[var(--gap-9xs)]">
            <div className="flex flex-row items-start justify-start font-[bold]">
              <div className=" relative">
                Students added succesfully
              </div>
            </div>
            <div className="relative text-[length:var(--font-size-5xl)]">
              Monitor their progress with ease!
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[38.144px] h-[38.144px] overflow-hidden p-0 border-0 left-[30.82vw] top-[20.35px]" onClick={onClose}>
        <img className="absolute h-[32.69%] w-[32.7%] max-w-full overflow-hidden max-h-full top-[33.65%] bottom-[33.66%] inset-x-[33.65%]" alt="" src="/vector5.svg" />
      </button>
    </div>
  );
};

export default StudentsAddedSuccessfullyPopup;
