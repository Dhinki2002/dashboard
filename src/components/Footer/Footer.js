import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css' // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer>
      <Link to='/go-score-dashboardindividual'>Dashboard Home</Link>
      <Link to='/interviews-dashboardindividual'>Interviews</Link>
      <Link to='/resume-dashboardindividual'>Resume</Link>
      <Link to='/dream-company-dashboardindividual'>Dream Companies</Link>
    </footer>
  )
}

export default Footer
