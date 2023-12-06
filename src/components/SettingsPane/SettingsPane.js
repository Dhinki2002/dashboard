import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

// import "./SettingsPane.css"


const SettingsPane = ({settingsCounter}) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/settings1");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/settings2");
  }, [navigate]);
  return <div className="absolute top-[calc(50%_-_24.34vw)] bg-[color:var(--white)] shadow-[0.07vw_0_0.26vw_rgba(0,0,0,0.15)] w-[17.33vw] h-[48.68vw] left-0" >
    <div className="absolute w-[8.47vw] h-[8.99vw] left-[2.65vw] top-[3.17vw]">
      <div className="flex flex-col items-start justify-start absolute gap-[var(--gap-xl)]">
          <button className={settingsCounter===0 ? "cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-base)] pb-[var(--padding-xs)] pl-[var(--padding-base)] bg-[color:var(--color-mediumslateblue-200)] rounded-[var(--br-16xl)] flex flex-row items-start justify-start border-0 left-0 top-0": "flex flex-col items-start justify-start cursor-pointer bg-transparent p-0 border-0 "} onClick={onFrameButtonClick}>
            <div className={settingsCounter===0 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left left-[1.2vw]"}>My Profile</div>
          </button>
            <button className={settingsCounter===1 ? "cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-base)] pb-[var(--padding-xs)] pl-[var(--padding-base)] bg-[color:var(--color-mediumslateblue-200)] rounded-[var(--br-16xl)] flex flex-row items-start justify-start border-0 left-0 top-0": "flex flex-col items-start justify-start cursor-pointer bg-transparent p-0 border-0 "} onClick={onFrameButton1Click}>
              <div className={settingsCounter===1 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left left-[1.2vw]"}>Password</div>
            </button>
            <button className={settingsCounter===2 ? "cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-base)] pb-[var(--padding-xs)] pl-[var(--padding-base)] bg-[color:var(--color-mediumslateblue-200)] rounded-[var(--br-16xl)] flex flex-row items-start justify-start border-0 left-0 top-0": "flex flex-col items-start justify-start cursor-pointer bg-transparent p-0 border-0 "} onClick={onFrameButton2Click}>
              <div className={settingsCounter===2 ? "relative text-[length:var(--font-size-xl)] text-[color:var(--purple)] text-left font-[bold]": "relative text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)] text-left left-[1.2vw]"}>Billing</div>
            </button>
          </div>
        </div>
    </div>;
};

export default SettingsPane;
