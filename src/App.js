import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Settings1 from "./pages/Settings1";
import SettingsInterviewer from "./pages/SettingsInterviewer";
import AdminSettings from "./pages/AdminSettings";
import AdminTest from "./pages/AdminTest";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardInterviewer2 from "./pages/DashboardInterviewer2";
import TransactionsInterviewer from "./pages/TransactionsInterviewer";
import DashboardInterviewer1 from "./pages/DashboardInterviewer1";
import DashboardInterviewer from "./pages/DashboardInterviewer";
import TestSummary from "./pages/TestSummary";
import ScheduleIteration1 from "./pages/ScheduleIteration1";
import ResumePersonalInfo from "./pages/ResumePersonalInfo";
import ResumePersonalInfo2 from "./pages/ResumePersonalInfo2";
import InteviewTestReport from "./pages/InteviewTestReport";
import DreamCompanyCompany from "./pages/DreamCompanyCompany";
import DreamCompanyDashboardIndivi from "./pages/DreamCompanyDashboardIndivi";
import ResumeDashboardIndividual from "./pages/ResumeDashboardIndividual";
import InterviewsDashboardIndividua from "./pages/InterviewsDashboardIndividua";
import InterviewsDashboardIndividua1 from "./pages/InterviewsDashboardIndividua1";
import Settings2 from "./pages/Settings2";
import Settings from "./pages/Settings";
import GoScoreDashboardIndividual from "./pages/GoScoreDashboardIndividual";
import TestScreenObjective from "./pages/TestScreenObjective";
import TestScreenCode from "./pages/TestScreenCode";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/settingsinterviewer":
        title = "";
        metaDescription = "";
        break;
      case "/adminsettings":
        title = "";
        metaDescription = "";
        break;
      case "/admintest":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardadmin":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardinterviewer2":
        title = "";
        metaDescription = "";
        break;
      case "/transactionsinterviewer":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardinterviewer1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardinterviewer":
        title = "";
        metaDescription = "";
        break;
      case "/test-summary":
        title = "";
        metaDescription = "";
        break;
      case "/schedule-iteration-1":
        title = "";
        metaDescription = "";
        break;
      case "/resume-personal-info":
        title = "";
        metaDescription = "";
        break;
      case "/resume-personal-info2":
        title = "";
        metaDescription = "";
        break;
      case "/inteview-test-report":
        title = "";
        metaDescription = "";
        break;
      case "/dream-company-company":
        title = "";
        metaDescription = "";
        break;
      case "/dream-company-dashboardindividual":
        title = "";
        metaDescription = "";
        break;
      case "/resume-dashboardindividual":
        title = "";
        metaDescription = "";
        break;
      case "/interviews-dashboardindividual1":
        title = "";
        metaDescription = "";
        break;
      case "/interviews-dashboardindividual":
        title = "";
        metaDescription = "";
        break;
      case "/settings2":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/go-score-dashboardindividual":
        title = "";
        metaDescription = "";
        break;
      case "/test-screen-objective":
        title = "";
        metaDescription = "";
        break;
      case "/test-screen-code":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Settings1 />} />
      <Route path="/settingsinterviewer" element={<SettingsInterviewer />} />
      <Route path="/adminsettings" element={<AdminSettings />} />
      <Route path="/admintest" element={<AdminTest />} />
      <Route path="/dashboardadmin" element={<DashboardAdmin />} />
      <Route
        path="/dashboardinterviewer2"
        element={<DashboardInterviewer2 />}
      />
      <Route
        path="/transactionsinterviewer"
        element={<TransactionsInterviewer />}
      />
      <Route
        path="/dashboardinterviewer1"
        element={<DashboardInterviewer1 />}
      />
      <Route path="/dashboardinterviewer" element={<DashboardInterviewer />} />
      <Route path="/test-summary" element={<TestSummary />} />
      <Route path="/schedule-iteration-1" element={<ScheduleIteration1 />} />
      <Route path="/resume-personal-info" element={<ResumePersonalInfo />} />
      <Route path="/resume-personal-info2" element={<ResumePersonalInfo2 />} />
      <Route path="/inteview-test-report" element={<InteviewTestReport />} />
      <Route path="/dream-company-company" element={<DreamCompanyCompany />} />
      <Route
        path="/dream-company-dashboardindividual"
        element={<DreamCompanyDashboardIndivi />}
      />
      <Route
        path="/resume-dashboardindividual"
        element={<ResumeDashboardIndividual />}
      />
      <Route
        path="/interviews-dashboardindividual1"
        element={<InterviewsDashboardIndividua />}
      />
      <Route
        path="/interviews-dashboardindividual"
        element={<InterviewsDashboardIndividua1 />}
      />
      <Route path="/settings2" element={<Settings2 />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="/go-score-dashboardindividual"
        element={<GoScoreDashboardIndividual />}
      />
      <Route path="/test-screen-objective" element={<TestScreenObjective />} />
      <Route path="/test-screen-code" element={<TestScreenCode />} />
    </Routes>
  );
}
export default App;
