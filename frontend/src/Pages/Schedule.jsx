// Calendar.jsx
import React, { useState } from "react";
import "../style/schedule.css";
import Sidebar from '../components/Sidebar'; 

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const appointments = {
    "2024-11-30": "Math Tutor at 2 PM",
    "2024-12-10": "Physics Tutor at 4 PM",
    "2024-12-15": "Chemistry Tutor at 1 PM",
  };

  const renderCalendar = () => {
    const currentDate = new Date(date);
    currentDate.setDate(1);

    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const firstDayIndex = currentDate.getDay();

    const lastDayIndex = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [];

    // Add days from the previous month
    for (let x = firstDayIndex; x > 0; x--) {
      days.push(<div className="prev-date" key={`prev-${x}`}>{prevLastDay - x + 1}</div>);
    }

    // Add days of the current month
    for (let i = 1; i <= lastDay; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      const formattedDate = currentDate.toISOString().split("T")[0];

      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days.push(<div className="today" key={`today-${i}`}>{i}</div>);
      } else if (appointments[formattedDate]) {
        days.push(
          <div className="appointment" title={appointments[formattedDate]} key={`app-${i}`}>
            {i}
          </div>
        );
      } else {
        days.push(<div key={`current-${i}`}>{i}</div>);
      }
    }

    // Add days from the next month
    for (let j = 1; j <= nextDays; j++) {
      days.push(<div className="next-date" key={`next-${j}`}>{j}</div>);
    }

    return days;
  };

  const handlePrev = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const handleNext = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
 


    <Sidebar>
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev" onClick={handlePrev}></i>
          <div className="date">
            <h1>{months[date.getMonth()]}</h1>
            <p>{new Date().toDateString()}</p>
          </div>
          <i className="fas fa-angle-right next" onClick={handleNext}></i>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">{renderCalendar()}</div>
      </div>
      </Sidebar>


  );
};

export default Calendar;
/*
import React, { useState } from "react";
import '../style/schedule.css'

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const appointments = {
    "2024-11-30": "Math Tutor at 2 PM",
    "2024-12-10": "Physics Tutor at 4 PM",
    "2024-12-15": "Chemistry Tutor at 1 PM",
  };

  const renderDays = () => {
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const days = [];

    // Add previous month days
    for (let x = firstDayIndex; x > 0; x--) {
      days.push(
        <div key={`prev-${x}`} className="prev-date">
          {prevLastDay - x + 1}
        </div>
      );
    }

    // Add current month days
    for (let i = 1; i <= lastDay; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      const formattedDate = currentDate.toISOString().split("T")[0];

      days.push(
        <div
          key={`current-${i}`}
          className={
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
              ? "today"
              : appointments[formattedDate]
              ? "appointment"
              : ""
          }
          title={appointments[formattedDate] || ""}
        >
          {i}
        </div>
      );
    }

    // Add next month days
    for (let j = 1; j <= nextDays; j++) {
      days.push(
        <div key={`next-${j}`} className="next-date">
          {j}
        </div>
      );
    }

    return days;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar">
      <div className="date">
        <h1>{months[date.getMonth()]}</h1>
        <p>{new Date().toDateString()}</p>
      </div>
      <div className="navigation">
        <button onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}>Prev</button>
        <button onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}>Next</button>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
*/
