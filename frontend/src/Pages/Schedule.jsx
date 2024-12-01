import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-page">
    <Sidebar className="sidebar">
      {/* Sidebar contents */}
    </Sidebar>
    <div className= "main-content">
      {/* Now this us where you will out your html code */}
      <h1>Schedule</h1>
      <p>Manage your scheduling needs effectively.</p>
    </div>
  </div>
  )
}

export default Schedule;
