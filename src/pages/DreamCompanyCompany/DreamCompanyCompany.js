import { useState, useCallback } from "react";
import DreamStartTestPopup from '../../components/DreamStartTestPopup/DreamStartTestPopup.js';
import PortalPopup from '../../components/PortalPopup/PortalPopup.js';
import { Link } from "react-router-dom";
import ScheduleInterviewPopup from '../../components/ScheduleInterviewPopup/ScheduleInterviewPopup.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
// import "./DreamCompanyCompany.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import GrowthAnalysis2 from '../../components/GrowthAnalysis2/GrowthAnalysis2.js';
import { Helmet } from "react-helmet";

const DreamCompanyCompany = () => {
  const [isDreamStartTestPopupOpen, setDreamStartTestPopupOpen] =
    useState(false);
  const [isScheduleInterviewPopupOpen, setScheduleInterviewPopupOpen] =
    useState(false);

  const openDreamStartTestPopup = useCallback(() => {
    setDreamStartTestPopupOpen(true);
  }, []);

  const closeDreamStartTestPopup = useCallback(() => {
    setDreamStartTestPopupOpen(false);
  }, []);

  const openScheduleInterviewPopup = useCallback(() => {
    setScheduleInterviewPopupOpen(true);
  }, []);

  const closeScheduleInterviewPopup = useCallback(() => {
    setScheduleInterviewPopupOpen(false);
  }, []);

  const counter = 3;
  const scheduleItems = [
    { day: "Tue", date: "16", event: "Test-1" },
    { day: "Wed", date: "17", event: "Test-2" },
    { day: "Thu", date: "17", event: "Interview-1" },
    // more schedule items...
  ];
  const upcomingInterviews = [
    { time: "4:00 pm", date: "24 September 2023" },
    // Add more upcoming interviews as needed
  ];

  return (
    <>
      <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--icon-grey)]">
        <Helmet>
          <title>Dream Company Companies</title>
          <meta name="desc"
            content="companies list" />
        </Helmet>
        <Navbar counter={counter} />
        <Header />
        <div className="absolute w-[76.59vw] flex flex-row items-center justify-between left-[21.03vw] top-[9.39vw]    ">
          <div className="w-[19.31vw] flex flex-row items-start justify-between">
            <div className="relative tracking-[-0.02em] leading-[2.78vw]">Dream Company</div>
            <div className="relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0">/</div>
            <div className="relative tracking-[-0.02em] leading-[2.78vw]">Amazon</div>
          </div>
          <img className="relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0" alt="" src="/uiwdate.svg" />
        </div>
        <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] text-[color:var(--icon-grey)] left-[-0.2vw] w-[2vw] top-[4.8vw]">

          <TopicWiseAnalysis />

        </div>
        <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-xl)] text-[length:var(--font-size-lg)] text-[color:var(--text)] left-[73.28vw] top-[13.82vw]">
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.34vw] h-[10.32vw] overflow-hidden shrink-0">
            <button
              className="cursor-pointer border-[color:var(--purple)] pt-[var(--padding-sm)] pr-[var(--padding-98xl)] pb-[var(--padding-sm)] pl-[var(--padding-98xl)] bg-[color:var(--color-dodgerblue)] absolute left-[calc(50%_-_10.98vw)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center border-[0.07vw] border-solid top-[6.15vw]"
              onClick={openDreamStartTestPopup}
            >
              <div className="relative text-[1.05vw] text-[color:var(--purple)] text-left font-[bold]">Attempt now</div>
            </button>
            <div className="absolute inline-block w-[11.44vw] opacity-80 left-[1.59vw] top-[1.59vw]">
              1387+ students took test for Amazon
            </div>
          </div>
          <MyGoScore />
        </div>
        <div className="flex justify-start  absolute flex-row items-center gap-[var(--gap-xl)] text-[length:var(--font-size-xl)] text-[color:var(--color-darkslategray-200)] left-[21.03vw] top-[44.18vw]">
          <GrowthAnalysis2 />
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.74vw] h-[18.12vw] overflow-hidden shrink-0 text-[color:var(--color-gray-200)]">
            <div className="flex justify-start  absolute flex-row items-center gap-[var(--gap-lgi)] left-[1.32vw] top-[4.37vw]">
              <div className="flex flex-col items-center justify-start">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-start">
                    <div className="relative tracking-[-0.02em] leading-[2.78vw]">{item.day}</div>
                    <div className="relative tracking-[-0.02em] leading-[2.78vw] mt-[-1.19vw]">{item.date}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-start  flex-col items-start gap-[var(--gap-5xl)] text-[color:var(--white)]">
                {scheduleItems.map((item, index) => (
                  <div key={index} className={item.event.includes("Test") ? "relative rounded-[var(--br-3xs)] w-[18.32vw] h-[2.58vw] overflow-hidden shrink-0 bg-[rgba(96,91,255,0.3)] text-[color:var(--purple)] " : "relative rounded-[var(--br-3xs)] w-[18.32vw] h-[2.58vw] overflow-hidden shrink-0  bg-[color:var(--color-sandybrown-100)]"}>
                    <div className="absolute top-[calc(50%_-_1.32vw)] tracking-[-0.02em] leading-[2.78vw] left-[1.72vw]">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute flex flex-row items-start justify-start gap-[8.93vw] text-[length:var(--font-size-5xl)] text-[color:var(--color-darkslategray-200)] left-[1.32vw] top-[1.32vw]">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Schedule</div>
              <Link className="cursor-pointer underline relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)]" to="/schedule-iteration-1">
                View schedule
              </Link>
            </div>
          </div>
          <div className="flex justify-start  h-[18.19vw] flex-col items-start text-[color:var(--icon-grey)]">
            <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.6vw] h-[18.19vw] overflow-hidden shrink-0">
              <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-13xl)] left-[1.32vw] top-[1.32vw]">
              <div className="flex flex-row items-center justify-start gap-[var(--gap-xs)] flex-col items-start gap-[var(--gap-9xs)] ">
      <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--color-darkslategray-200)] font-[bold]">Upcoming Interview:</div>
      {upcomingInterviews.map((interview, index) => (
        <div key={index} className="flex flex-col items-center justify-start gap-[var(--gap-xs)]">
          <div className="interview-detail">
            <div className="flex flex-row items-center justify-start gap-[var(--gap-xs)]">
              <img className="relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0 ml-[-6.8vw]" alt="" src="/phclock.svg" />
              <div className="relative tracking-[-0.02em] leading-[2.78vw]">{interview.time}</div>
            </div>
          </div>
          <div className="interview-detail">
            <div className="flex flex-row items-center justify-start gap-[var(--gap-xs)]">
              <img
                className="relative w-[1.59vw] h-[1.59vw] overflow-hidden shrink-0"
                alt=""
                src="/solarcalendarlineduotone.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[2.78vw]">{interview.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
                <button
                  className="cursor-pointer pt-[var(--padding-xs)] pr-[var(--padding-5xl)] pb-[var(--padding-xs)] pl-[var(--padding-5xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] w-[21.96vw] overflow-hidden flex flex-row items-center justify-center box-border gap-[var(--gap-7xs)] border-0"
                  onClick={openScheduleInterviewPopup}
                >
                  <img
                    className="relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0"
                    alt=""
                    src="/icbaselineplus5.svg"
                  />
                  <div className="relative text-[1.05vw] text-[color:var(--white)] text-left font-[bold]">Schedule interview</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDreamStartTestPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDreamStartTestPopup}
        >
          <DreamStartTestPopup onClose={closeDreamStartTestPopup} />
        </PortalPopup>
      )}
      {isScheduleInterviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleInterviewPopup}
        >
          <ScheduleInterviewPopup onClose={closeScheduleInterviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DreamCompanyCompany;
