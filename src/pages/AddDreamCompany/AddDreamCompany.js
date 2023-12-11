// import "./AddDreamCompany.css";
import Footer from "../../components/Footer/Footer";
import DreamSearchBar from "../../components/DreamSearchBar/DreamSearchBar";
import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";



const AddDreamCompany = () => {
  const navigate=useNavigate()
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [progress, setProgress] = useState(1);
  const [answer, setAnswer] = useState("");
  const handleStartClick = (query) => {
    console.log(query);
  };
  const handleBackward = () => {
    setProgress((prevProgress) => {
      if (prevProgress > 1) {
        return prevProgress - 1;
      } else {
        return prevProgress;
      }
    });
    console.log(
      "Updated progress (may not be the new value due to async nature):",
      progress
    );
  };
  const handleForward = () => {
    if (progress==3){
      navigate('/test-screen-objective')
    }
    else{
    setProgress((prevProgress) => {
      if (prevProgress < 3) {
        return prevProgress + 1;
      } else {
        return prevProgress; // If progress is already 3, keep it as is
      }
    });
    console.log(
      "Updated progress (may not be the new value due to async nature):",
      progress
    );
    }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };

  return (
    <div className="h-screen w-full relative">
      <div className=" absolute w-full bg-[color:var(--color-lavender)] h-[10%] text-center">
        <img src="./1644088580619-cantileverlogoblack-2@2x.png" />
      </div>
      <div className="flex h-screen flex-col w-full text-center justify-center items-center">
        <div className="text-[4vw] text-[rgb(49,46,46)] mb-[5vh] ">What is your Dream Company?</div>
        <div className="flex justify-between items-center w-full">
        
          <button onClick={handleBackward} className="inline-block text-base font-[bold] text-center no-underline cursor-pointer border-[color:var(--purple-login)] text-white bg-[color:var(--purple-login)] transition-[background-color] duration-[0.3s,color] delay-[0.3s] mx-[4vw] px-5 py-2.5 rounded-[5px] border-2 border-solid hover:bg-[#2980b9] hover:border-[#2980b9]">
            Backward
          </button>
        <div className="ml-[20vw]">
        {progress < 3 && (
          <DreamSearchBar
            progress={progress}
            className="search-bar"
            answer={answer}
            setAnswer={setAnswer}
          />
        )}
        </div>
        
        {progress === 3 && (
          
          <div className="w-[30vw] h-[4vw] ml-[-30vw] rounded-[0.5vw]">
          <div className="select-interview-date">
           
          </div>
          <input
            className="frame-child167"
            placeholder="Select date"
            type="date"
            selected={selectedDate}
            onChange={handleDateChange}
          />
          </div>
         
        )}
        
        
        <button onClick={handleForward} className="inline-block text-base font-[bold] text-center no-underline cursor-pointer border-[color:var(--purple-login)] text-white bg-[color:var(--purple-login)] transition-[background-color] duration-[0.3s,color] delay-[0.3s] mx-[4vw] px-5 py-2.5 rounded-[5px] border-2 border-solid hover:bg-[#2980b9] hover:border-[#2980b9]">
          Forward
        </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddDreamCompany;
