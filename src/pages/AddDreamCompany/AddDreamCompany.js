import React, { useState, useEffect, useRef, useCallback } from 'react'
import './AddDreamCompany.css'
<<<<<<< Updated upstream:src/pages/AddDreamCompany/AddDreamCompany.js
import ImgHero from '../../img/image1.jpg'
import backArrow from '../../img/forward.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer.js'

const currentIm = './carbonsearch.svg'
=======
import Footer from '../components/Footer/Footer'
import DreamSearchBar from '../components/DreamSearchBar/DreamSearchBar'
>>>>>>> Stashed changes:src/pages/AddDreamComapany.js
const AddDreamCompany = () => {
  const handleStartClick = query => {
    console.log('hi')
  }

  return (
    <div className='hero'>
      <div className='top-header'>
        <img src='./1644088580619-cantileverlogoblack-2@2x.png' />
      </div>
      <div className='content'>
        <div className='heading'>What is your Dream Company?</div>
        <DreamSearchBar
          onSearch={query => handleStartClick(query)}
          className='search-bar'
        />
      </div>

      <Footer />
    </div>
  )
}

export default AddDreamCompany
