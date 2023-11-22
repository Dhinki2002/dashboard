import './AddDreamCompany.css'
import Footer from '../../components/Footer/Footer'
import DreamSearchBar from '../../components/DreamSearchBar/DreamSearchBar'
import { useState } from 'react'
const AddDreamCompany = () => {
  const [progress, setProgress] = useState(1)
  const [answer, setAnswer] = useState('')
  const handleStartClick = query => {
    console.log(query)
  }
  const handleBackward = () => {
    setProgress(prevProgress => {
      if (prevProgress > 1) {
        return prevProgress - 1
      } else {
        return prevProgress
      }
    })
    console.log(
      'Updated progress (may not be the new value due to async nature):',
      progress,
    )
  }
  const handleForward = () => {
    setProgress(prevProgress => {
      if (prevProgress < 4) {
        return prevProgress + 1
      } else {
        return prevProgress // If progress is already 3, keep it as is
      }
    })
    console.log(
      'Updated progress (may not be the new value due to async nature):',
      progress,
    )
  }

  return (
    <div className='hero'>
      {answer}
      <div className='top-header'>
        <img src='./1644088580619-cantileverlogoblack-2@2x.png' />
      </div>
      <div className='content'>
        <div className='heading'>What is your Dream Company?</div>
        <DreamSearchBar
          progress={progress}
          className='search-bar'
          answer={answer}
          setAnswer={setAnswer}
        />
        {progress > 1 && (
          <button onClick={handleBackward} className='Backward'>
            Backward
          </button>
        )}
        <button onClick={handleForward} className='Forward'>
          Forward
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default AddDreamCompany
