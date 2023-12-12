import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
// import "./InteviewTestReport.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import ConfidenceMeter from '../../components/ConfidenceMeter/ConfidenceMeter.js';
import { Helmet } from "react-helmet";



const InteviewTestReport = () => {
  const counter=1;
  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--icon-grey)]">
       <Helmet>
      <title>Test Report</title>
      <meta name="desc"
        content="Test Report"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="flex flex-row items-start justify-start  absolute w-[76.59vw] left-[21.03vw] top-[9.39vw]">
        <div className="flex flex-row items-start justify-start  gap-[var(--gap-5xs)]  ">
          <div className="interviews1">Interviews</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[length:var(--font-size-9xl)]">/</div>
          <div className="interviews1">Amazon-Report</div>
        </div>
      </div>
      <div className="absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.74vw] h-[48.28vw] overflow-hidden text-[color:var(--color-darkslategray-200)] left-[73.28vw] top-[14.02vw]">
        <div className="absolute tracking-[-0.02em] leading-[2.78vw] left-[1.32vw] top-[1.32vw]">Remarks</div>
        <div className="absolute gap-[var(--gap-base)] text-[length:var(--font-size-xl)] left-[1.39vw] top-[4.89vw]">
          <div className="rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start w-[20.11vw] h-[8vw]  ">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Overall Impression:</div>
              <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[21.1vw]">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start w-[20.11vw] h-[8vw]  ">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Technical Proficiency:</div>
              <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[21.1vw]">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start w-[20.11vw] h-[8vw]  ">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Problem-Solving Skills:</div>
              <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[21.1vw]">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
          <div className="rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start w-[20.11vw] h-[8vw]  ">
              <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Technical Proficiency:</div>
              <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[21.1vw]">
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-xl)] text-[color:var(--white)] left-[21.03vw] top-[14.02vw]">
        <div className="flex flex-row items-end justify-start gap-[var(--gap-xl)]">
          <MyGoScore/>
          <ConfidenceMeter/>
        </div>
     <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] text-[color:var(--icon-grey)] top-[-9vw] left-[-21vw] w-[2vw]">
        <TopicWiseAnalysis/>
        </div>
      </div>
    </div>
  );
};

export default InteviewTestReport;
