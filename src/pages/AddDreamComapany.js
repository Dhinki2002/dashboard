import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./AddDreamCompany.css";
import ImgHero from "../img/image1.jpg"
import ImgHero3 from "../img/image3.jpg";
import ImgHero4 from "../img/images4.jpg";
import ImgHero5 from "../img/image5.jpg";
import backArrow from "../img/forward.png";
import { useNavigate } from "react-router-dom";

const AddDreamCompany = () => {
  const [currentImage, setCurrentImage] = useState(ImgHero);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [step, setStep] = useState('dreamCompany'); // New state variable
  const inputRef = useRef(null); // New ref variable
  const navigate = useNavigate();
  
  const companySuggestions = [
    'Amazon',
    'Flipkart',
    'Flapper',
    'Flavasa',
    'Flip',
  ];

  const roleSuggestions = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    // Add more suggestions as needed
  ];
  const onFrameButtonClick = useCallback(() => {
    navigate("/dream-company-dashboardindividual");
  }, [navigate]);

  useEffect(() => {
    const imageList = [ImgHero, ImgHero3, ImgHero4, ImgHero5];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageList.length;
      setCurrentImage(imageList[currentIndex]);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (event.target.value.length > 0) {
      const regex = new RegExp(`^${event.target.value}`, 'i');
      const suggestionsList = step === 'dreamCompany' ? companySuggestions : roleSuggestions;
      setSuggestions(suggestionsList.sort().filter(v => regex.test(v)));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handleStartClick = () => {
    if (step === 'dreamCompany') {
      setStep('addRole');
      setInputValue('');
      setSuggestions([]);
    } else {
      // Redirect to a different page
      window.location.href = '/new-page-url'; // Replace with your URL
    }
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="content">
        <div className="header">
          <button className="back-button"  onClick={onFrameButtonClick}>
            <img src={backArrow} alt="Back" className="back-arrow" />
          </button>
          One Step towards your goal
          <button className="forward-button" onClick={() => console.log("Forward button clicked")}>
            <img src={backArrow} alt="Forward" className="forward-arrow" />
          </button>
        </div>
        <h1>{step === 'dreamCompany' ? 'Dream Company' : 'Add Role'}</h1>
        <p>
          <input ref={inputRef} type="text" value={inputValue} onChange={handleChange} style={{ color: "white", background: "transparent", width: "400px", height: "40px",fontSize:"16px",fontWeight:"bold",border: "5px solid #000" }} autoFocus />
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
            ))}
          </ul>
        </p>
        <a href="#" onClick={handleStartClick}>{step === 'dreamCompany' ? 'Next' : 'Start Now'}</a>
      </div>
    </section>
  );
};

export default AddDreamCompany;