import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import SettingsPane from '../../components/SettingsPane/SettingsPane.js';
// import "./Settings1.css";
import { Helmet } from "react-helmet";

const Settings1 = () => {
  const counter=4;
  const settingsCounter=1;
  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-xl)] text-[color:var(--black)]">
      <Helmet>
      <title>Settings Individual1</title>
      <meta name="desc"
        content="Settings Individual1"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[48.54vw] overflow-hidden left-[21.03vw] top-[14.29vw]">
        <SettingsPane settingsCounter={settingsCounter}/>
        <div className="absolute text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[19.18vw] top-[2.12vw]">Change your password</div>
        <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-9xl)] left-[19.18vw] top-[7.01vw]">
          <div className="flex items-start justify-start flex-col">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
              <div className="w-[36.11vw] flex flex-row items-center justify-start">
                <div className="relative">Password</div>
              </div>
              <input className="frame-child" type="password" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
            <div className="relative">New Password</div>
            <input
              className="text-[length:var(--font-size-xl)]  border-[color:var(--color-gainsboro-400)] bg-transparent rounded-[var(--br-xs)] box-border w-[36.11vw] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid "
              placeholder="Confirm your password"
              type="password"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
            <div className="relative">Confirm New Password</div>
            <input
              className="text-[length:var(--font-size-xl)]  border-[color:var(--color-gainsboro-400)] bg-transparent rounded-[var(--br-xs)] box-border w-[36.11vw] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[0.07vw] border-solid "
              placeholder="Confirm your password"
              type="password"
            />
          </div>
          <button className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-0;">
            <div className="text-[length:var(--font-size-xl)] relative text-[color:var(--white)] text-left font-[bold] ">Change password</div>
          </button>
        </div>
      </div>
      <div className="absolute text-[length:var(--font-size-9xl)] tracking-[-0.02em] leading-[2.78vw] left-[21.03vw] top-[10.45vw]">Settings</div>
    </div>
  );
};

export default Settings1;
