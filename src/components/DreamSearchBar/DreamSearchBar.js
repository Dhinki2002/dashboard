import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './DreamSearchBar.css'

function DreamSearchBar({ onSearch }) {
  const [fillText, setfillText] = useState('Choose a Company')
  const companyList = [
    'Amazon',
    'Atlassian',
    'Flipkart',
    'Flapper',
    'Flavasa',
    'Flip',
  ]
  const [companies, setCompanies] = useState([])
  const [selectedOptions, setSelectedOptions] = useState()

  useEffect(() => {
    setCompanies(
      companyList.map(company => ({ label: company, value: company })),
    )
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(selectedOptions.value)
    onSearch(selectedOptions.value)
  }

  return (
    <form onSubmit={handleSubmit} className='formBorder'>
      <div style={{ width: '40vw' }}>
        <Select
          options={companies}
          value={selectedOptions}
          onChange={setSelectedOptions}
          className='searchBar'
          placeholder={fillText}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default DreamSearchBar
