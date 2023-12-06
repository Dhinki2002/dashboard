import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
import SettingsPane from '../../components/SettingsPane/SettingsPane.js';
// import "./Settings2.css";
import { Helmet } from "react-helmet";

const Settings2 = () => {
  const counter=4;
  const settingsCounter=2;
  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-xl)] text-[color:var(--black)]">
      <Helmet>
      <title>Settings Individual2</title>
      <meta name="desc"
        content="Settings Individual2"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[48.54vw] overflow-hidden left-[21.03vw] top-[14.29vw]">
        <SettingsPane settingsCounter={settingsCounter}/>
        <div className="absolute text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] left-[19.18vw] top-[2.12vw]">Billing</div>
        <div className="absolute flex flex-row items-start justify-start gap-[var(--gap-5xs)] text-[length:var(--font-size-lg)] left-[19.71vw] top-[7.01vw]">
          <div className="tracking-[-0.02em] leading-[2.78vw] relative">Current plan:</div>
          <div className="tracking-[-0.02em] leading-[2.78vw] relative text-[color:var(--color-lightsalmon-100)]  ">Free</div>
        </div>
        <div className="absolute flex flex-row items-start justify-start gap-[var(--gap-xl)] text-[color:var(--purple)] left-[19.44vw] top-[11.9vw]">
          <div className="relative rounded-[var(--br-3xs)] bg-[color:var(--white)] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.15),0_-0.07vw_0.13vw_rgba(0,0,0,0.15)] w-[17.46vw] h-[21.36vw] overflow-hidden shrink-0">
            <div className="absolute flex flex-row items-center justify-start gap-[var(--gap-2xs)] left-[1.32vw] top-[1.32vw]">
              <img className="relative w-[1.59vw] h-[1.59vw]" alt="" src="/group-589.svg" />
              <div className="tracking-[-0.02em] leading-[2.78vw] relative">Basic Plan</div>
            </div>
            <div className="absolute text-[length:var(--font-size-21xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--color-darkslategray-300)] left-[1.59vw] top-[5.42vw]">$50</div>
            <div className="flex justify-start absolute flex-col items-start text-[length:var(--font-size-lg)] text-[color:var(--black)] left-[1.32vw] top-[9.26vw]">
              <div className="flex-row items-center gap-[var(--gap-3xs)] flex justify-start ">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
            </div>
            <button className="cursor-pointer pt-[var(--padding-11xs)] pr-[var(--padding-29xl)] pb-[var(--padding-11xs)] pl-[var(--padding-29xl)] bg-[#3c7eff] absolute left-[calc(50%_-_7.8vw)] rounded-[var(--br-7xs)] overflow-hidden flex flex-row items-center justify-center border-0 top-[17.53vw]">
              <div className="relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--white)] text-left">Upgrade to Basic</div>
            </button>
          </div>
          <div className="relative rounded-[var(--br-3xs)] bg-[color:var(--white)] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.15),0_-0.07vw_0.13vw_rgba(0,0,0,0.15)] border-[color:var(--color-lightsalmon-100)] box-border w-[17.72vw] h-[21.63vw] overflow-hidden shrink-0 text-[color:var(--color-lightsalmon-100)] border-[0.13vw] border-solid">
            <div className="absolute flex flex-row items-center justify-start gap-[var(--gap-2xs)] left-[1.32vw] top-[1.32vw]">
              <img className="relative w-[1.59vw] h-[1.59vw]" alt="" src="/group-5891.svg" />
              <div className="tracking-[-0.02em] leading-[2.78vw] relative">Free Plan</div>
            </div>
            <div className="absolute text-[length:var(--font-size-21xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--color-darkslategray-300)] left-[1.59vw] top-[5.42vw]">$0</div>
            <button className="cursor-pointer pt-[var(--padding-11xs)] pr-[var(--padding-29xl)] pb-[var(--padding-11xs)] pl-[var(--padding-29xl)] bg-[color:var(--color-lightsalmon-100)] absolute left-[calc(50%_-_7.8vw)] rounded-[var(--br-7xs)] w-[15.34vw] overflow-hidden flex flex-row items-center justify-center box-border border-0 top-[17.53vw]">
              <div className="relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--white)] text-left">Current Plan</div>
            </button>
            <div className="flex justify-start absolute flex-col items-start text-[length:var(--font-size-lg)] text-[color:var(--black)] left-[1.32vw] top-[9.26vw]">
              <div className="flex-row items-center gap-[var(--gap-3xs)] flex justify-start ">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[var(--br-3xs)] bg-[color:var(--white)] shadow-[0_0.13vw_0.13vw_rgba(0,0,0,0.15),0_-0.07vw_0.13vw_rgba(0,0,0,0.15)] w-[17.46vw] h-[21.36vw] overflow-hidden shrink-0 text-[color:var(--color-orange)]">
            <div className="absolute flex flex-row items-center justify-start gap-[var(--gap-2xs)] left-[1.32vw] top-[1.32vw]">
              <img className="relative w-[1.59vw] h-[1.59vw]" alt="" src="/group-5892.svg" />
              <div className="tracking-[-0.02em] leading-[2.78vw] relative">Pro Plan</div>
            </div>
            <div className="absolute text-[length:var(--font-size-21xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--color-darkslategray-300)] left-[1.59vw] top-[5.42vw]">$70</div>
            <button className="cursor-pointer pt-[var(--padding-11xs)] pr-[var(--padding-29xl)] pb-[var(--padding-11xs)] pl-[var(--padding-29xl)] bg-[color:var(--color-orange)] absolute left-[calc(50%_-_7.67vw)] rounded-[var(--br-7xs)] w-[15.34vw] overflow-hidden flex flex-row items-center justify-center box-border border-0 top-[17.53vw]">
              <div className="relative text-[length:var(--font-size-lg)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--white)] text-left">Upgrade to Pro</div>
            </button>
            <div className="flex justify-start absolute flex-col items-start text-[length:var(--font-size-lg)] text-[color:var(--black)] left-[1.32vw] top-[9.26vw]">
              <div className="flex-row items-center gap-[var(--gap-3xs)] flex justify-start ">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
              <div className="flex justify-start  flex-row items-center gap-[var(--gap-3xs)] mt-[-0.53vw]">
                <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0" alt="" src="/charmtick.svg" />
                <div className="tracking-[-0.02em] leading-[2.78vw] relative">Features</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-[length:var(--font-size-9xl)] tracking-[-0.02em] leading-[2.78vw] left-[21.03vw] top-[10.45vw]">Settings</div>
    </div>
  );
};

export default Settings2;
