import { memo } from "react";
import "./PurpleBox.css";



const PurpleBox = memo(
  () => {
    return (
      <div className="purple-box-login">
      <div className="absolute top-[calc(50%_-_24.75vw)] rounded-[var(--br-17xl-login)] bg-[color:var(--purple-login)] border-[color:var(--color-lightsteelblue-login)] box-border w-[45.5vw] h-[49.98vw] overflow-hidden text-left text-[0.32vw] text-[color:var(--color-gray-300-login)] border-[0.62vw] border-solid right-[1.98vw] mt-[-1.3vw] h-[52.3vw]; font-family: var(--h1-heavy-login)">
        <div className="ml-[4.76vw] mt-[23.54vw]">
        <img className="h-[19.34vw] w-[29.52vw] left-[4.76vw] top-[23.54vw]"src="/interviews_remarks.svg">
        </img>
        <img className="absolute h-[11.38vw] w-[16.72vw] left-[20.83vw] top-[34.4vw]"src="/interviews_remarks.svg">
        </img>
        </div>
        <div className="flex flex-col items-start justify-start absolute gap-[var(--gap-17xl-login)] text-[length:var(--font-size-11xl-login)] text-[color:var(--color-white-login)] left-[4.53vw] top-[6.17vw]">
          <div className="relative">
            <p className="m-0">
              {`Crack any `}
              <span className="lowercase">Technical</span>
              {` interview `}
            </p>
            <p className="m-0">
              in the world with the help of Fulcrum
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[var(--gap-xs-login)] text-[length:var(--font-inherit-login)]; font-family: var(--font-inherit-login)">
            <div className="relative">
              <ul className="pl-[var(--padding-5xl-login)] m-0" style={{ fontSize: '87%' }}>
                <li>Mock interviews</li>
                <li>Resume creator</li>
                <li>Fulcrum Assignment Skill Test (FAST)</li>
                <li>Dream Company Track</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(50%_-_31.25vw)] w-[178.82vw] h-[2.49vw] flex flex-row flex-wrap items-end justify-start gap-[var(--gap-37xl-login)] top-[46.9vw]">
          <img className="relative w-[6.44vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20" alt="" src="/company-logo.svg" />
          <img className="relative w-[6.44vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20 w-[5.53vw]" alt="" src="/company-logo1.svg" />
          <img className="relative w-[6.44vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20 w-[5.53vw] w-[7.73vw]" alt="" src="/company-logo2.svg" />
          <img className="relative w-[4.01vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20" alt="" src="/company-logo3.svg" />
          <img className="relative w-[4.01vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20 w-[7.19vw]" alt="" src="/company-logo4.svg" />
          <img className="relative w-[4.01vw] h-[2.4vw] overflow-hidden shrink-0 opacity-20 w-[7.19vw] w-[5.67vw]" alt="" src="/company-logo5.svg" />
        </div>
      </div>
      </div>
    );
  }
);

export default PurpleBox;
