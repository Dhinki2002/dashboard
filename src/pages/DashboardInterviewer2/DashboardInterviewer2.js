import { useCallback } from "react";
import InterviewerNavbar from "../../components/InterviewerNavbar/InterviewerNavbar";
import InterviewerHeader from "../../components/InterviewerHeader/InterviewerHeader";
import { useNavigate } from "react-router-dom";
import "./DashboardInterviewer2.css";
import { Helmet } from "react-helmet";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

// import 'react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment)

const DashboardInterviewer2 = () => {
  const navigate = useNavigate();


  const onMdicardOutlineClick = useCallback(() => {
    navigate("/dashboardinterviewer");
  }, [navigate]);
  const views= {
    month: true,
  }
    const events= [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
          title:"hi"
       
      }
    ]
    


  
  return (
    <div className="dashboard-interviewer2">
      <Helmet>
        <title>Dashboard Interviewer Schedule</title>
        <meta name="desc"
          content="Dashboard Interviewer Schedule tab" />
      </Helmet>
      <InterviewerNavbar />
      <InterviewerHeader />
      <div className="dashboard-interviewer2-inner">
        <div className="frame-parent46">
          {/* <div className="scheduled-interviews-wrapper">
            <div className="scheduled-interviews">Scheduled interviews</div>
          </div> */}
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "95vh",
              fontSize: "25px" }}
              views={views}
          />


        </div>
      </div>
    </div>
  );
};


export default DashboardInterviewer2;