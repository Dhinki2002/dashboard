import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FASTPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/test-screen-objective");
  }, [navigate]);

  return (
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[512px] h-[348.8px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)]  left-2/4 top-2/4">
      <div className="flex flex-col items-start justify-start absolute text-[20px] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4  ">
        <div className="font-[bold] relative tracking-[-0.02em] leading-[35.58px] text-[length:var(--font-size-9xl)]">Fulcrum Assessment Test</div>
        <div className="flex flex-col items-start justify-start gap-[var(--gap-17xl)] text-[length:var(--font-inherit)] text-[color:var(--icon-grey)] ">
          <div className="flex flex-col items-start justify-start gap-[var(--gap-lg)]">
            <div className=" w-[444.4px] flex flex-col items-start justify-start gap-[var(--gap-12xs)]">
              <div className="flex flex-row items-start justify-start gap-[24.57px]">
                <button className="relative tracking-[-0.02em] leading-[35.58px] cursor-pointer bg-transparent text-[length:var(--font-size-lg)] text-[color:var(--black)] text-left inline-block p-0 border-0">Instructions</button>
                <button className="relative tracking-[-0.02em] leading-[35.58px] cursor-pointer bg-transparent text-[length:var(--font-size-lg)] text-[color:var(--black)] text-left inline-block p-0 border-0">Tips</button>
              </div>
              <img className="relative w-[444.4px] h-[3.456px]" alt="" src="/group-587.svg" />
            </div>
            <div className="relative tracking-[-0.02em] leading-[30.46px] font-[light]">
              <ul className="pl-[var(--padding-5xl)] m-0">
                <li className="text-[length:var(--font-size-lg)] mb-0">
                  Please ensure that you have a good and fast internet
                  connection
                </li>
                <li className="text-[length:var(--font-size-lg)] mb-0">
                  This test is best taken on a laptop or PC.
                </li>
                <li className="text-[length:var(--font-size-lg)] mb-0">Enable screensharing</li>
                <li className="text-[length:var(--font-size-lg)] mb-0">Give access to mic</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[97.408px] text-[length:var(--font-size-base)]">
            <div className="flex flex-row items-center justify-start gap-[var(--gap-2xs)] font-[light]">
              <input className="relative border-[color:var(--icon-grey)] box-border w-[14.336px] h-[14.336px] rounded-[1.664px] border-[1px] border-solid" type="checkbox" />
              <a className="no-underline relative text-inherit w-[217.6px]" target="_blank">
                <span>{`I agree to the `}</span>
                <span className="text-[color:var(--purple)]">
                  terms and conditions
                </span>
              </a>
            </div>
            <button
              className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--color-mediumseagreen)] rounded-[var(--br-5xs)] w-[134.656px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[var(--gap-3xs)] border-0"
              onClick={onFrameButtonClick}
            >
              <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left inline-block w-[81.28px] shrink-0 font-[bold]">Start Now</div>
              <img
                className="relative w-[13.568px] h-[13.568px] overflow-hidden shrink-0"
                alt=""
                src="/solarplaybold2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[33.92px] h-[23.92px] overflow-hidden p-0 border-0 left-[930.104px] " onClick={onClose}>
        <img className=" absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[33%] right-[32.99%] top-[32.99%] bottom-[33.01%]" alt="" src="/vector25.svg" />
      </button>
    </div>
  );
};

export default FASTPopup;
