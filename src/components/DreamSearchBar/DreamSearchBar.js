import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './DreamSearchBar.css'

function DreamSearchBar({ progress, answer, setAnswer }) {
  const [fillText, setfillText] = useState('')
  const companyList = [
    'Amazon',
    'Atlassian',
    'Flipkart',
    'Flapper',
    'Flavasa',
    'Flip',
  ]
  const jobList = ['Product Manager', 'Software Engineer', 'Consultant']
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState()

  useEffect(() => {
    if (progress === 1) {
      console.log('progress = 1')
      setOptions(
        companyList.map(company => ({ label: company, value: company })),
      )
      setfillText('Choose a Company')
      setSelectedOptions(null)
    } else if (progress === 2) {
      setOptions(jobList.map(job => ({ label: job, value: job })))
      setfillText('Choose a Job Profile')
      if (selectedOptions.value != null){
        console.log(selectedOptions.value)
      setAnswer(selectedOptions.value)
      }
      setSelectedOptions(null)
    } else if (progress === 3) {
      if (selectedOptions.value != null)
      {setAnswer(selectedOptions.value)}
    }
  }, [progress])

  return (
    <div>
      {/* {progress} */}
      <form className='formBorder'>
        <div style={{ width: '40vw' , marginLeft:"-4vw"}}>
          <Select
            options={options}
            value={selectedOptions}
            onChange={setSelectedOptions}
            className='searchBar'
            placeholder={fillText}
          />
        </div>
      </form>
      {/* {fillText}
      {progress} */}
    </div>
  )
}

export default DreamSearchBar
