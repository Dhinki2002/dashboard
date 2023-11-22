import Navbar from '../../components/Navbar/Navbar.js'
import Header from '../../components/Header/Header.js'
import './ScheduleIteration1.css'
import { Helmet } from 'react-helmet'

const ScheduleIteration1 = () => {
  const counter = 3
  const test2Items = [
    { day: 'Tue', date: '21', test: 'Aptitude Test' },
    { day: 'Wed', date: '22', test: 'Coding Test' },
    { day: 'Thu', date: '23', test: 'Coding Test - 2' },
  ]
  const test3Items = [
    { day: 'Thu', date: '23', test: 'Aptitude Interview' },
    { day: 'Thu', date: '23', test: 'HR Round Interview' },
    { day: 'Fri', date: '24', test: 'Coding Round Interview' },
  ]
  const interviewItems = [
    { day: 'Sat', date: '25', interview: 'Full Mock Amazon Interview' },
    // { day: "Wed", date: "17", interview: "Google Interview" },
    // { day: "Thu", date: "18", interview: "Facebook Interview" },
  ]
  const mentorRemarks = [
    {
      title: 'Mentor Remarks:',
      content:
        'They were able solve questions within time but failed to pick the correct algorithms that solved the questions with the best time complexity. The candidate showcased good aptitude skills with logical thinking.',
    },
    // Add more items as needed
  ]

  const algorithmRemarks = [
    {
      title: 'Algorithm Evaluation:',
      content:
        'They demonstrated proficiency in selecting optimal data structures tailored to diverse problems and excelled in implementing algorithms with high efficiency.',
    },
    // Add more items as needed
  ]
  const companyLogos = [
    { id: 1, src: '/company-logo4.svg' },
    { id: 2, src: '/company-logo5.svg' },
    // Add more items as needed
  ]

  return (
    <div className='schedule-iteration-1'>
      <Helmet>
        <title>Schedule Individual</title>
        <meta name='desc' content='Schedule Individual' />
      </Helmet>
      <Navbar counter={counter} />
      <Header />
      <div className='frame-parent93'>
        <div className='schedule-wrapper'>
          <div className='schedule'>Schedule</div>
        </div>
        <div className='frame-parent94'>
          <div className='frame-parent95'>
            <div className='group-parent'>
              <img className='frame-child61' alt='' src='/group-592.svg' />
              <img className='frame-child61' alt='' src='/group-592.svg' />
              <img className='frame-child61' alt='' src='/group-592.svg' />
            </div>
            <div className='line-parent5'>
              <div className='frame-child64' />
              <div className='frame-child65' />
            </div>
          </div>
          <div className='ellipse-group'>
            <div className='frame-child66' />
            <div className='frame-child66' />
            <div className='frame-child66' />
          </div>
          <div className='ellipse-container'>
            <div className='frame-child66' />
            <div className='frame-child66' />
            <div className='frame-child66' />
          </div>
          <div className='tests-parent'>
            <div className='schedule'>Practice Tests</div>
            <div className='schedule'>Practice Interviews</div>
            <div className='schedule'>Final Mock Interview</div>
          </div>
          <div className='frame-parent96'>
            <div className='frame-parent97'>
              {test2Items.map((item, index) => (
                <div key={index} className='frame-parent98'>
                  <div className='tue-parent'>
                    <div className='schedule1'>{item.day}</div>
                    <div className='schedule1'>{item.date}</div>
                  </div>
                  <div className='test-2-wrapper'>
                    <div className='amazons-interview'>{item.test}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className='view-more-container'>
              <div className='view-more2'>View more</div>
              <img
                className='riarrow-drop-down-line-icon2'
                alt=''
                src='/riarrowdropdownline1.svg'
              />
            </button>
          </div>
          <div className='frame-parent101'>
            <div className='frame-parent97'>
              {test3Items.map((item, index) => (
                <div key={index} className='frame-parent98'>
                  <div className='tue-parent'>
                    <div className='schedule1'>{item.day}</div>
                    <div className='schedule1'>{item.date}</div>
                  </div>
                  <div className='test-2-wrapper'>
                    <div className='amazons-interview'>{item.test}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className='view-more-container'>
              <div className='view-more2'>View more</div>
              <img
                className='riarrow-drop-down-line-icon2'
                alt=''
                src='/riarrowdropdownline1.svg'
              />
            </button>
          </div>
          {interviewItems.map((item, index) => (
            <div key={index} className='frame-parent106'>
              <div className='tue-parent'>
                <div className='schedule1'>{item.day}</div>
                <div className='schedule1'>{item.date}</div>
              </div>
              <div className='amazons-interview-wrapper'>
                <div className='amazons-interview'>{item.interview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='schedule-iteration-1-inner'>
        <div className='days-remaining-5-wrapper'>
          <div className='days-remaining-5'>Days remaining: 5</div>
        </div>
      </div>
      <div className='tips-parent'>
        <div className='tips'>Tips:</div>
        <div className='frame-parent107'>
          <div className='frame-wrapper48'>
            {mentorRemarks.map((item, index) => (
              <div key={index} className='mentor-remarks-parent'>
                <div className='schedule'>{item.title}</div>
                <div className='they-were-able1'>{item.content}</div>
              </div>
            ))}
          </div>
          <div className='frame-wrapper48'>
            {algorithmRemarks.map((item, index) => (
              <div key={index} className='mentor-remarks-parent'>
                <div className='schedule'>{item.title}</div>
                <div className='they-were-able1'>{item.content}</div>
              </div>
            ))}
          </div>
          <div className='frame-wrapper48'>
            <div className='technical-proficiency-group'>
              <div className='schedule'>Technical Proficiency:</div>
              <div className='they-were-able1'>
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.They were able
                to choose appropriate data structures.
              </div>
            </div>
          </div>
          <div className='frame-wrapper51'>
            <div className='companies-with-similar-benchma-parent'>
              <div className='schedule'>Companies with similar benchmarks:</div>
              <div className='company-logo-parent10'>
                {companyLogos.map(logo => (
                  <img
                    key={logo.id}
                    className='company-logo-icon13' // Keep the original class name
                    alt=''
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleIteration1
