import React, { useState, useEffect, useRef, useCallback } from 'react'
import './AddDreamCompany.css'
import ImgHero from '../img/image1.jpg'
import ImgHero3 from '../img/image3.jpg'
import ImgHero4 from '../img/images4.jpg'
import ImgHero5 from '../img/image5.jpg'
import backArrow from '../img/forward.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const currentIm = './carbonsearch.svg'
const AddDreamCompany = () => {
  const [currentImage, setCurrentImage] = useState(ImgHero)
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [step, setStep] = useState('dreamCompany') // New state variable
  const inputRef = useRef(null) // New ref variable
  const navigate = useNavigate()

  const companySuggestions = [
    'Amazon',
    'Atlassian',
    'Flipkart',
    'Flapper',
    'Flavasa',
    'Flip',
  ]

  const roleSuggestions = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    // Add more suggestions as needed
  ]
  const onFrameButtonClick = useCallback(() => {
    navigate('/dream-company-dashboardindividual')
  }, [navigate])

  // useEffect(() => {
  //   const imageList = [ImgHero, ImgHero3, ImgHero4, ImgHero5];
  //   let currentIndex = 0;

  //   const interval = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % imageList.length;
  //     setCurrentImage(imageList[currentIndex]);
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [step])

  const handleChange = event => {
    setInputValue(event.target.value)

    if (event.target.value.length > 0) {
      const regex = new RegExp(`^${event.target.value}`, 'i')
      const suggestionsList =
        step === 'dreamCompany' ? companySuggestions : roleSuggestions
      setSuggestions(suggestionsList.sort().filter(v => regex.test(v)))
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = suggestion => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  const handleStartClick = () => {
    if (step === 'dreamCompany') {
      setStep('addRole')
      setInputValue('')
      setSuggestions([])
    } else {
      // Redirect to a different page
      window.location.href = '/new-page-url' // Replace with your URL
    }
  }

  return (
    <div className='hero'>
      <div>
        <div class='top-header-container'>
          <button className='back-button' onClick={onFrameButtonClick}>
            <img src={backArrow} alt='Back' className='back-arrow' />
          </button>
          <div class='top-header'>
            <img src='./1644088580619-cantileverlogoblack-2@2x.png' />
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='header'>What is your Dream Company?</div>
        <h1>{step === 'dreamCompany' ? 'Dream Company' : 'Add Role'}</h1>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <input
            ref={inputRef}
            type='text'
            value={inputValue}
            onChange={handleChange}
            style={{
              color: 'black',
              background: `url(${currentIm})`, // Use the SVG as background directly
              width: '38vw',
              marginRight: '1vw',
              paddingLeft: '4vw',
              paddingRight: '4vw',
              backgroundSize: '2vw 2vw', // Adjust the size of the image
              backgroundPosition: '10px center', // Position the image to the left with 10px padding
              backgroundRepeat: 'no-repeat',
              height: '3vw',
              fontSize: '1.5vw',
              fontWeight: 'normal',
              border: '1px solid #000',
              borderRadius: '7px', // Adjust padding to accommodate the image
            }}
            autoFocus
          />
          <a href='#' onClick={handleStartClick} className='nextBox'>
            {step === 'dreamCompany' ? 'Next' : 'Start Now'}
          </a>
        </div>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className='suggestion-item'
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default AddDreamCompany
