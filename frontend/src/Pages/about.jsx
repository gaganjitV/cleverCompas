import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const About = () => {

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not




  return (

    
    <div className={`home ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}

    <div className="about-page">
  
          {/* Now this us where you will put your html code */}
      <h1>About Clever Compass</h1>
      <p>
        Clever Compass is your ultimate solution for managing your academic and professional life. 
        From organizing your schedule to staying connected with students and teachers, we make it simple and effective.
      </p>
      <p>
        Our mission is to empower learners and educators with tools that foster success, no matter the cost.
      </p>
    </div>
    </div>
  ); 
};

export default About;
