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
    <div className='relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-9xl)] text-[color:var(--black)]'>
      <Helmet>
        <title>Schedule Individual</title>
        <meta name='desc' content='Schedule Individual' />
      </Helmet>
      <Navbar counter={counter} />
      <Header />
      <div className='absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[39.75vw] h-[53.7vw] left-[21.03vw] top-[9.39vw]'>
        <div className='absolute flex flex-col items-start justify-start left-[1.59vw] top-[1.59vw]'>
          <div className='schedule'>Schedule</div>
        </div>
        <div className='absolute w-[32.94vw] h-[43.12vw] text-[length:var(--font-size-xl)] text-[color:var(--color-gray-200)] left-[2.98vw] top-[6.28vw]'>
          <div className='rotate-90 origin-[0_0]  absolute flex flex-col items-start justify-start gap-[var(--gap-3xs)] left-[1.85vw] top-[0.4vw]'>
            <div className='flex flex-row items-start justify-start gap-[16.2vw] z-0'>
              <img className='relative w-[1.85vw] h-[1.85vw]' alt='' src='/group-592.svg' />
              <img className='relative w-[1.85vw] h-[1.85vw]' alt='' src='/group-592.svg' />
              <img className='relative w-[1.85vw] h-[1.85vw]' alt='' src='/group-592.svg' />
            </div>
            <div className='absolute z-[1] m-0  flex flex-row items-start justify-start pt-[var(--padding-3xs)] pr-[var(--padding-3xs)] pb-[var(--padding-3xs)] pl-[var(--padding-3xs)] gap-[var(--gap-3xs)] left-[2.12vw] top-[0.93vw]'>
              <div className='absolute top-[-0.03vw] left-[-0.03vw] border-t-[color:var(--icon-grey)] box-border w-[15.28vw] h-[0.07vw] opacity-50 z-0 m-0 border-t-[0.07vw] border-dashed' />
              <div className='absolute z-[1] m-0  top-[-0.03vw] border-t-[color:var(--icon-grey)] box-border w-[15.28vw] h-[0.07vw] opacity-50 border-t-[0.07vw] border-dashed left-[18.29vw]' />
            </div>
          </div>
          <div className='absolute flex-col justify-start gap-[var(--gap-32xl)]  flex items-start left-[0.79vw] top-[4.7vw]  '>
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
          </div>
          <div className='absolute flex-col justify-start gap-[var(--gap-32xl)] left-[0.73vw] top-[22.49vw] flex items-start  '>
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
            <div className='rotate-90 origin-[0_0]  relative bg-[color:var(--incomplete)] w-[0.4vw] h-[0.4vw] rounded-[50%]' />
          </div>
          <div className='flex items-start  absolute flex-col justify-start gap-[15.34vw] left-[2.78vw] top-0'>
            <div className='schedule'>Practice Tests</div>
            <div className='schedule'>Practice Interviews</div>
            <div className='schedule'>Final Mock Interview</div>
          </div>
          <div className='absolute flex flex-col items-center justify-start gap-[var(--gap-base)] left-[2.78vw] top-[3.44vw]'>
            <div className='flex-col items-start grid grid-cols-[1fr] gap-[15px] '>
              {test2Items.map((item, index) => (
                <div key={index} className='flex flex-row items-center justify-start gap-[px] grid grid-cols-[repeat(2,1fr)]'>
                  <div className=' flex items-start  flex-row justify-center gap-[var(--gap-9xs)]'>
                    <div className='schedule1'>{item.day}</div>
                    <div className='schedule1'>{item.date}</div>
                  </div>
                  <div className='relative rounded-[var(--br-3xs)] bg-[color:var(--color-darkorange)] w-[24.47vw] h-[2.58vw] overflow-hidden shrink-0 text-[color:var(--white)]'>
                    <div className='amazons-interview'>{item.test}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className='cursor-pointer bg-transparent w-[23.88vw] flex flex-row items-center justify-center gap-[var(--gap-9xs)] p-0 border-0;'>
              <div className='relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left'>View more</div>
              <img
                className='relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0'
                alt=''
                src='/riarrowdropdownline1.svg'
              />
            </button>
          </div>
          <div className='absolute flex flex-col items-center justify-start gap-[var(--gap-base)] left-[2.78vw] top-[3.44vw] left-[2.84vw] top-[21.3vw] '>
            <div className='flex-col items-start grid grid-cols-[1fr] gap-[15px] '>
              {test3Items.map((item, index) => (
                <div key={index} className='flex flex-row items-center justify-start gap-[px] grid grid-cols-[repeat(2,1fr)]'>
                  <div className=' flex items-start  flex-row justify-center gap-[var(--gap-9xs)]'>
                    <div className='schedule1'>{item.day}</div>
                    <div className='schedule1'>{item.date}</div>
                  </div>
                  <div className='relative rounded-[var(--br-3xs)] bg-[color:var(--color-darkorange)] w-[24.47vw] h-[2.58vw] overflow-hidden shrink-0 text-[color:var(--white)]'>
                    <div className='amazons-interview'>{item.test}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className='cursor-pointer bg-transparent w-[23.88vw] flex flex-row items-center justify-center gap-[var(--gap-9xs)] p-0 border-0'>
              <div className='relative text-[length:var(--font-size-sm)] tracking-[-0.02em] leading-[2.78vw] text-[color:var(--icon-grey)] text-left'>View more</div>
              <img
                className='relative w-[1.32vw] h-[1.32vw] overflow-hidden shrink-0'
                alt=''
                src='/riarrowdropdownline1.svg'
              />
            </button>
          </div>
          {interviewItems.map((item, index) => (
            <div key={index} className='absolute flex flex-row items-center justify-start gap-[var(--gap-9xl)] overflow-hidden left-[2.84vw] top-[40.34vw]'>
              <div className=' flex items-start  flex-row justify-center gap-[var(--gap-9xs)]'>
                <div className='schedule1'>{item.day}</div>
                <div className='schedule1'>{item.date}</div>
              </div>
              <div className='relative rounded-[var(--br-3xs)] bg-[color:var(--color-mediumseagreen)] w-[24.47vw] h-[2.58vw] overflow-hidden shrink-0 text-[color:var(--white)]'>
                <div className='amazons-interview'>{item.interview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute rounded-[var(--br-xs)] flex flex-row items-start justify-start text-[length:var(--font-size-base)] text-[color:var(--danger)] border-[0.1vw] border-solid border-[#e94664] left-[48.21vw] top-[10.58vw]'>
        <div className='rounded-[var(--br-5xs)] bg-[color:var(--color-crimson-100)] overflow-hidden flex flex-row items-center justify-center pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)]'>
          <div className='relative'>Days remaining: 5</div>
        </div>
      </div>
      <div className='absolute rounded-[var(--br-base)] bg-[color:var(--white)] w-[35.25vw] h-[53.64vw] overflow-hidden text-[length:var(--font-size-5xl)] text-[color:var(--color-darkslategray-200)] left-[62.37vw] top-[9.46vw]'>
        <div className='absolute tracking-[-0.02em] leading-[2.78vw] font-[bold] left-[1.32vw] top-[1.32vw]'>Tips:</div>
        <div className='flex flex-col items-start justify-start absolute gap-[var(--gap-base)] text-[length:var(--font-size-xl)] left-[1.32vw] top-[4.89vw]'>
          <div className='flex flex-col items-start justify-start  rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] w-[32.28vw] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] box-border'>
            {mentorRemarks.map((item, index) => (
              <div key={index} className='w-[30.03vw] h-[9.66vw]  flex flex-col items-start justify-start'>
                <div className='schedule'>{item.title}</div>
                <div className='relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[30.22vw]'>{item.content}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-start  rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] w-[32.28vw] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] box-border'>
            {algorithmRemarks.map((item, index) => (
              <div key={index} className='w-[30.03vw] h-[9.66vw]  flex flex-col items-start justify-start'>
                <div className='schedule'>{item.title}</div>
                <div className='relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[30.22vw]'>{item.content}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start justify-start  rounded-[var(--br-xs)] bg-[color:var(--color-ghostwhite-200)] w-[32.28vw] overflow-hidden pt-[var(--padding-xl)] pr-[var(--padding-sm)] pb-[var(--padding-xl)] pl-[var(--padding-sm)] box-border'>
            <div className='technical-proficiency-group'>
              <div className='schedule'>Technical Proficiency:</div>
              <div className='relative text-[length:var(--font-size-base)] tracking-[-0.02em] leading-[1.59vw] text-[color:var(--icon-grey)] inline-block w-[30.22vw]'>
                They were able to choose appropriate data structures for various
                problems and implemented algorithms efficiently.They were able
                to choose appropriate data structures.
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start   rounded-[var(--br-base)] bg-[color:var(--color-ghostwhite-200)] w-[32.28vw] h-[8.86vw] overflow-hidden shrink-0 pt-[var(--padding-base)] pb-[var(--padding-base)] box-border px-[1.39vw]'>
            <div className='w-[29.76vw] h-[6.15vw] gap-[var(--gap-xs)] flex flex-col items-start justify-start '>
              <div className='schedule'>Companies with similar benchmarks:</div>
              <div className='flex flex-row items-center justify-start gap-[var(--gap-13xl)]'>
                {companyLogos.map(logo => (
                  <img
                    key={logo.id}
                    className='relative w-[4.96vw] h-[1.92vw] overflow-hidden shrink-0' // Keep the original class name
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
