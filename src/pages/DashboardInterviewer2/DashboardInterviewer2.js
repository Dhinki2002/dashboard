import { useCallback, useState } from "react";
import InterviewerNavbar from "../../components/InterviewerNavbar/InterviewerNavbar.js";
import InterviewerHeader from "../../components/InterviewerHeader/InterviewerHeader.js";
import { useNavigate } from "react-router-dom";
import "./DashboardInterviewer2.css";
import { Helmet } from "react-helmet";
//import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
// import 'react-big-calendar/lib/sass/styles.scss';
import TimePicker from "react-time-picker";

//const localizer = momentLocalizer(moment)

const DashboardInterviewer2 = () => {
  const navigate = useNavigate();

  const onMdicardOutlineClick = useCallback(() => {
    navigate("/dashboardinterviewer");
  }, [navigate]);
  const views = {
    month: true,
  };

  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const today = new Date();
  const handleSelectDate = (date) => {
    if (selectedDateTime && selectedDateTime.getDate() === date.getDate()) {
      // Deselect the date if it's already selected
      setSelectedDateTime(null);
    } else {
      // Select the date if it's not already selected
      const selectedDateTimeWithTime = new Date(date);
      setSelectedDateTime(selectedDateTimeWithTime);
    }
  };
  // const handleDeleteEvent = useCallback((eventToDelete) => {
  //   const updatedEvents = events.filter(event => event !== eventToDelete);
  //   setEvents(updatedEvents);
  // }, [events]);

  return (
    <div className="dashboard-interviewer2">
      <Helmet>
        <title>Dashboard Interviewer Schedule</title>
        <meta name="desc" content="Dashboard Interviewer Schedule tab" />
      </Helmet>
      <InterviewerNavbar />
      <InterviewerHeader />
      <div className="dashboard-interviewer2-inner">
        <div className="frame-parent46">
          {/* <div className="scheduled-interviews-wrapper">
            <div className="scheduled-interviews">Scheduled interviews</div>
          </div> */}
          <div>Select Date And Time</div>
          <Calendar
            onClickDay={handleSelectDate}
            value={selectedDateTime}
            minDate={today}
          />
          {selectedDateTime && (
            <input
              type="time"
              value={
                selectedDateTime
                  ? selectedDateTime.toTimeString().substring(0, 5)
                  : ""
              }
              onChange={(e) => {
                const time = e.target.value.split(":");
                const newDateTime = new Date(selectedDateTime);
                newDateTime.setHours(
                  parseInt(time[0], 10),
                  parseInt(time[1], 10)
                );
                setSelectedDateTime(newDateTime);
              }}
            />
          )}
          {selectedDateTime && (
            <button type="submit" className="submit-button">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardInterviewer2;
