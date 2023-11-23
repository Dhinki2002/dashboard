import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom'
import SignUpAs from './pages/SignUpAs/SignUpAs.js'
import ResetPassword from './pages/ResetPassword/ResetPassword.js'
import Login from './pages/Login/Login.js'
import ForgotReset from './pages/ForgotReset/ForgotReset.js'
import { useEffect } from 'react'
import SignUpIndividual from './pages/SignUpIndividual/SignUpIndividual.js'
import SignUpInstitute from './pages/SignUpInstitute/SignUpInstitute.js'
import Settings1 from './pages/Settings1/Settings1.js'
import SettingsInterviewer from './pages/SettingsInterviewer/SettingsInterviewer.js'
import AdminSettings from './pages/AdminSettings/AdminSettings.js'
import AdminTest from './pages/AdminTest/AdminTest.js'
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin.js'
import DashboardInterviewer2 from './pages/DashboardInterviewer2/DashboardInterviewer2.js'
import TransactionsInterviewer from './pages/TransactionsInterviewer/TransactionsInterviewer.js'
import DashboardInterviewer1 from './pages/DashboardInterviewer1/DashboardInterviewer1.js'
import DashboardInterviewer from './pages/DashboardInterviewer/DashboardInterviewer.js'
import TestSummary from './pages/TestSummary/TestSummary.js'
import ScheduleIteration1 from './pages/ScheduleIteration1/ScheduleIteration1.js'
import ResumePersonalInfo from './pages/ResumePersonalInfo/ResumePersonalInfo.js'
import ResumePersonalInfo2 from './pages/ResumePersonalInfo2/ResumePersonalInfo2.js'
import InteviewTestReport from './pages/InteviewTestReport/InteviewTestReport.js'
import DreamCompanyCompany from './pages/DreamCompanyCompany/DreamCompanyCompany.js'
import DreamCompanyDashboardIndivi from './pages/DreamCompanyDashboardIndivi/DreamCompanyDashboardIndivi.js'
import ResumeDashboardIndividual from './pages/ResumeDashboardIndividual/ResumeDashboardIndividual.js'
import InterviewsDashboardIndividual1 from './pages/InterviewsDashboardIndividual1/InterviewsDashboardIndividual1.js'
import InterviewsDashboardIndividual from './pages/InterviewsDashboardIndividual/InterviewsDashboardIndividual.js'
import InterviewsDashboardIndividual2 from './pages/InterviewsDashboardIndividual2/InterviewsDashboardIndividual2.js'
import Settings2 from './pages/Settings2/Settings2.js'
import Settings from './pages/Settings/Settings.js'
import InterviewerSettings from './pages/SettingsInterviewer/SettingsInterviewer.js'
import InterviewerSettings1 from './pages/SettingsInterviewer1/SettingsInterviewer1.js'
import InterviewerSettings2 from './pages/SettingsInterviewer2/SettingsInterviewer2.js'
import AdminSettings1 from './pages/AdminSettings1/AdminSettings1.js'
import AdminSettings2 from './pages/AdminSettings2/AdminSettings2.js'
import GoScoreDashboardIndividual from './pages/GoScoreDashboardIndividual/GoScoreDashboardIndividual.js'
import TestScreenObjective from './pages/TestScreenObjective/TestScreenObjective.js'
import AddDreamCompany from './pages/AddDreamCompany/AddDreamCompany.js'
import { Helmet } from 'react-helmet'

function App() {
  const action = useNavigationType()
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [action, pathname])

  return (
    <div>
      <Helmet>
        <title>Settings</title>
        <meta name='desc' content='user settings' />
      </Helmet>
      <Routes>
        <Route path='/sign-up' element={<SignUpAs />} />
        <Route path='/login' element={<Login />} />

        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-reset' element={<ForgotReset />} />
        <Route path='/sign-up-institute' element={<SignUpInstitute />} />

        <Route path='/sign-up-individual' element={<SignUpIndividual />} />
        <Route path='/settings1' element={<Settings1 />} />
        <Route path='/settingsinterviewer' element={<SettingsInterviewer />} />
        <Route path='/adminsettings' element={<AdminSettings />} />
        <Route path='/admintest' element={<AdminTest />} />
        <Route path='/dashboardadmin' element={<DashboardAdmin />} />
        <Route
          path='/dashboardinterviewer2'
          element={<DashboardInterviewer2 />}
        />
        <Route
          path='/transactionsinterviewer'
          element={<TransactionsInterviewer />}
        />
        <Route
          path='/dashboardinterviewer1'
          element={<DashboardInterviewer1 />}
        />
        <Route
          path='/dashboardinterviewer'
          element={<DashboardInterviewer />}
        />
        <Route path='/test-summary' element={<TestSummary />} />
        <Route path='/schedule-iteration-1' element={<ScheduleIteration1 />} />
        <Route path='/resume-personal-info' element={<ResumePersonalInfo />} />
        <Route
          path='/resume-personal-info2'
          element={<ResumePersonalInfo2 />}
        />
        <Route path='/inteview-test-report' element={<InteviewTestReport />} />
        <Route
          path='/dream-company-company'
          element={<DreamCompanyCompany />}
        />
        <Route
          path='/dream-company-dashboardindividual'
          element={<DreamCompanyDashboardIndivi />}
        />
        <Route
          path='/resume-dashboardindividual'
          element={<ResumeDashboardIndividual />}
        />
        <Route
          path='/interviews-dashboardindividual1'
          element={<InterviewsDashboardIndividual1 />}
        />
        <Route
          path='/interviews-dashboardindividual'
          element={<InterviewsDashboardIndividual />}
        />
        <Route
          path='/interviews-dashboardindividual2'
          element={<InterviewsDashboardIndividual2 />}
        />
        <Route path='/settings2' element={<Settings2 />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/Interviewersettings' element={<InterviewerSettings />} />
        <Route
          path='/Interviewersettings1'
          element={<InterviewerSettings1 />}
        />
        <Route
          path='/Interviewersettings2'
          element={<InterviewerSettings2 />}
        />
        <Route path='/Adminsettings' element={<AdminSettings />} />
        <Route path='/Adminsettings1' element={<AdminSettings1 />} />
        <Route path='/Adminsettings2' element={<AdminSettings2 />} />
        <Route
          path='/go-score-dashboardindividual'
          element={<GoScoreDashboardIndividual />}
        />
        <Route path='/' element={<AddDreamCompany />} />
        <Route
          path='/test-screen-objective'
          element={<TestScreenObjective />}
        />
      </Routes>
    </div>
  )
}
export default App
