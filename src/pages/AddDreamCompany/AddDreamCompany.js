import "./AddDreamCompany.css";
import Footer from "../../components/Footer/Footer";
import DreamSearchBar from "../../components/DreamSearchBar/DreamSearchBar";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
    <div className="hero">
      <div className="top-header">
        <img src="./1644088580619-cantileverlogoblack-2@2x.png" />
      </div>
      <div className="content">
        <div className="heading">What is your Dream Company?</div>
        <div className="searchBarContainer">
        
          <button onClick={handleBackward} className="forward">
            Backward
          </button>
        <div className="barContainer">
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
          <DatePicker className="date-picker" selected={selectedDate} onChange={handleDateChange} />
        )}
        
        
        <button onClick={handleForward} className="forward">
          Forward
        </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddDreamCompany;
