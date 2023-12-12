import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./TestScreenObjective.css";
import { Helmet } from "react-helmet";
import Objective from "../../components/Objective/Objective";
import questions from '../../questions.json';
import Coding from "../../components/Coding/Coding";


const TestScreenObjective = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('statement');

  const onFrameButton1Click = useCallback(() => {
    navigate("/test-summary");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/test-screen-code");
  }, [navigate]);
  const [currentStep, setCurrentStep] = useState(0);

  const onPrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNextClick = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };
  const [timeRemaining, setTimeRemaining] = useState(3600); // 3 hours in seconds

  const currentQuestion = questions[currentStep]; // Assuming currentStep is the index of the current question
  // console.log(currentQuestion)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          // Timer has reached 0
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[57.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]">
      <Helmet>
        <title>Test Screen</title>
        <meta name="desc"
          content="Test Screen" />
      </Helmet>
      <div className="absolute left-[calc(50%_-_48.15vw)] rounded-[var(--br-base)] bg-[color:var(--white)] w-[96.3vw] h-[46.3vw] overflow-hidden top-[9.39vw]">
        <div className="absolute flex flex-row items-start justify-start gap-[4vw] left-[1.7vw] top-[1vw]">
          <button
            className={`border-[none] w-[8.3vw] bg-transparent mr-2.5 pb-[5px] border-[none] ${activeTab === 'statement' ? 'active' : ''}`}
            onClick={() => setActiveTab('statement')}
          >
            <div className="relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left w-[4vw]">Statement</div>
          </button>
          <button
            className={`border-[none] w-[8.3vw] bg-transparent mr-2.5 pb-[5px] border-[none] ${activeTab === 'help' ? 'active' : ''}`}
            onClick={() => setActiveTab('help')}
          >
            <div className="cursor-pointer bg-transparent p-0 border-0  relative text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--black)] text-left inline-block;
    font-family: var(--font-avenir-lt-std)">Help</div>
          </button>
          {activeTab === 'statement' && (

            <div className="absolute text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] w-[40vw] h-[40vw] left-[0vw] top-[7vw]">Q{currentStep + 1}. {currentQuestion['question']}</div>

          )}
          {activeTab === 'help' && (

            <div className="absolute text-[length:var(--font-size-5xl)] tracking-[-0.02em] leading-[2.78vw] w-[40vw] h-[40vw] left-[0vw] top-[7vw]">{currentQuestion['explanation']}</div>

          )}

        </div>

        {currentQuestion['isObjective'] && <Objective
          currentStep={currentStep}
          currentQuestion={currentQuestion}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
        />}
        {!currentQuestion['isObjective'] && <Coding
          currentStep={currentStep}
          currentQuestion={currentQuestion}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
        />}
        <div className="w-[40vw] ml-[48vw]">
          <div className="relative tracking-[-0.02em] leading-[2.78vw] top-[1vw] ">
            Multiple choice questions
          </div>
        </div>
        <div className="absolute flex flex-row items-center justify-start gap-[var(--gap-xs)] text-[length:var(--font-size-5xl)] left-[75.96vw] top-[0vw]">
          <div className="relative tracking-[-0.02em] leading-[2.78vw] top-[1vw] ">Time remaining:</div>
          <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--color-tomato)] top-[1vw]">{formatTime(timeRemaining)}</div>
        </div>

      </div>
      {/* <img
        className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[57.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]-child"
        alt=""
        src="/group-577.svg"
      /> */}
      <div className="flex flex-row items-center justify-start  gap-[3.33vw] text-[length:var(--font-size-xl)] text-[var(--icon-grey)_ma] absolute left-[calc(50%_-_47.69vw)] gap-[26.6vw] text-[length:var(--font-size-base)] text-[color:var(--color-darkslategray-200)] top-[2.91vw] ">
        <div className="flex flex-col items-start justify-start ml-[0.3vw] w-[21.56vw] flex-row ">
          <div className="flex flex-col items-start justify-start ml-[0.3vw]">
            <div className="relative tracking-[-0.02em] leading-[1.59vw]">Hi Priyanshu,</div>
            <div className="relative tracking-[-0.02em] leading-[1.59vw] text-[length:var(--font-size-15xl)] leading-[2.78vw] text-[color:var(--black)] ">Welcome to Fulcrum!</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start left-[-2vw] gap-[3.33vw] text-[length:var(--font-size-xl)] text-[var(--icon-grey)_ma]  ">
          <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]" onClick={onPrevClick}>
            <img className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0 cursor-pointer" alt="" src="/oouinextltr.svg" />
            <div className="relative tracking-[-0.02em] leading-[2.78vw] text-[color:var(--purple)] cursor-pointer">Prev</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[var(--gap-5xs)]">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-[30px] h-2.5 bg-[grey] mr-2.5 rounded-[0.6vw] ${index <= currentStep ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="flex flex-row items-center justify-start cursor-pointer bg-transparent gap-[var(--gap-5xs)] p-0 border-0 " onClick={onNextClick}>
            <div className="relative text-[length:var(--font-size-xl)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--purple)] text-left">Next</div>
            <img
              className="relative w-[1.06vw] h-[1.06vw] overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/oouinextltr2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreenObjective;
