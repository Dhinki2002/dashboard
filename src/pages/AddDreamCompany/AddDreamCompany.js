import './AddDreamCompany.css'
import Footer from '../../components/Footer/Footer'
import DreamSearchBar from '../../components/DreamSearchBar/DreamSearchBar'
const AddDreamCompany = () => {
  const handleStartClick = query => {
    console.log(query)
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
