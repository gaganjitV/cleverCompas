import React, { useState, useEffect } from 'react';
import '../style/Student.css'
import Sidebar from '../components/Sidebar'; 


const StudentDashboard = ()=> {

  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the JWT token for the user that is logged in
        const response = await fetch('http://localhost:4000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('User data received:', data);

        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

    return (
      <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <header className="topbar-student">
          <div className="welcome-student">
            <h1>Welcome, {userData.name}!</h1>
            <p>Let’s make today productive.</p>
          </div>
        
        </header>
        <section className="widgets-student">
          <div className="widget-student">
            <i className="widget-icon fas fa-users"></i>
            <div>
              <h3>Enrolled Courses</h3>
              <p>5</p>
            </div>
          </div>
          <div className="widget-student">
            <i className="widget-icon fas fa-calendar-alt"></i>
            <div>
              <h3>Upcoming Classes</h3>
              <p>3</p>
            </div>
          </div>
          <div className="widget-student">
            <i className="widget-icon-student fas fa-envelope"></i>
            <div>
              <h3>New Messages</h3>
              <p>2</p>
            </div>
          </div>
        </section>
        <section className="content-student">
          <div className="content-card-student">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Upcoming Classes
            </h3>
            <ul>
              <li>Math - 10:00 AM</li>
              <li>Physics - 12:00 PM</li>
              <li>English - 2:00 PM</li>
            </ul>
          </div>
          <div className="content-card-student">
            <h3>
              <i className="fas fa-comments"></i> Recent Messages
            </h3>
            <p>
              <strong>{userData.name}: </strong> Hi Student, I need help with algebra!
            </p>
            <p>
              <strong>{userData.name}: </strong> Can we schedule an extra session?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;