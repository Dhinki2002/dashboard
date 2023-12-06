import Navbar from '../../components/Navbar/Navbar.js';
import Header from '../../components/Header/Header.js';
// import "./TestSummary.css";
import MyGoScore from '../../components/MyGoScore/MyGoScore.js';
import { TopicWiseAnalysis } from '../../components/TopicWiseAnalysis/TopicWiseAnalysis.js';
import GrowthAnalysis2 from '../../components/GrowthAnalysis2/GrowthAnalysis2.js';
import { Helmet } from "react-helmet";

const TestSummary = () => {
  const counter =3
  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--icon-grey)]">
      <Helmet>
      <title>Test Summary</title>
      <meta name="desc"
        content="Test Summary"/>
      </Helmet>
      <Navbar counter={counter}/>
      <Header />
      <div className="w-[19.31vw] flex flex-row items-start justify-start absolute w-[76.59vw] items-center left-[21.03vw] top-[9.39vw] ">
        <div className="flex flex-row items-start justify-start">
          <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Amazon Test</div>
        </div>
      </div>
     <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] text-[color:var(--icon-grey)] left-[-0.2vw] w-[2vw] top-[4.1vw]">
      <TopicWiseAnalysis/>
      </div>
      <div className="flex items-start justify-start  absolute flex-row left-[73.5vw] top-[13vw]">
        
        <div className="flex items-start justify-start  flex-col text-[color:var(--white)]">
         <MyGoScore/>
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[24.34vw] h-[11.97vw] overflow-hidden shrink-0 text-[length:var(--font-size-lg)] text-[color:var(--text)]">
            <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]  absolute gap-[var(--gap-base)] left-[1.59vw] top-[1.59vw] ">
              <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
                <div className="relative opacity-80">No. of Correct Answers:</div>
                <div className="relative opacity-80  text-[length:var(--font-size-5xl)] font-[bold]">28</div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[var(--gap-5xs)]">
                <div className="relative opacity-80">No. of Questions Attempted:</div>
                <div className="relative opacity-80  text-[length:var(--font-size-5xl)] font-[bold]">36</div>
              </div>
            </div>
            <div className="absolute text-[length:var(--font-size-base)] underline tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] left-[19.71vw] top-[0.93vw]">View all</div>
          </div>
        </div>
      </div>
      <div className=" absolute flex flex-row items-start justify-start gap-[var(--gap-xl)] text-[color:var(--color-darkslategray-200)] left-[21.03vw] top-[45.11vw]">
       
        <GrowthAnalysis2/>
        
        <div className="flex flex-col items-start justify-start gap-[var(--gap-xl)]">
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[23.08vw] h-[8.33vw] overflow-hidden shrink-0">
            <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]">Strengths</div>
            <div className="absolute text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] left-[1.32vw] top-[4.1vw]">
              Coding languages, Data structures
            </div>
          </div>
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[23.08vw] h-[8.33vw] overflow-hidden shrink-0">
            <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]">Weakness</div>
            <div className="absolute text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[2.78vw] left-[1.32vw] top-[4.1vw]">
              Coding languages, Data structures
            </div>
          </div>
        </div>
        <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[26.32vw] h-[18.12vw] overflow-hidden shrink-0">
          <div className="absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]">Suggestions</div>
          <div className="flex items-start justify-start  absolute flex-row text-[length:var(--font-size-xl)] left-[1.32vw] top-[4.89vw]">
            <div className="flex items-start justify-start rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] w-[23.68vw] h-[12.24vw] overflow-hidden shrink-0 flex-col pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] box-border ">
              <div className="flex items-start justify-start w-[30.03vw] h-[6.48vw] flex-col">
                <div className="relative tracking-[-0.02em] leading-[2.78vw] font-[bold]">Accuracy</div>
                <div className="relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[22.22vw]">
                  They were able to choose appropriate data structures for
                  various problems and implemented algorithms efficiently.They
                  were able to choose appropriate data structures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSummary;
