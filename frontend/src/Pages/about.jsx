import React from 'react';
import '../index.css';
import '../style/about.css';
import Sidebar from '../components/Sidebar'; 

const About = () => {

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not
  //testing



  return (

    
    <div className={`home ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}

    <div className="about-page">
  
          {/* Now this us where you will put your html code */}
      <h1>About Clever Compass</h1>
      <div className="title">About Us</div>
      <div className="subtitle">Welcome to Clever Compass!</div>

      {/*About Us Text*/}
      <div className="about-text">
        Clever Compass is your ultimate solution for managing your academic and professional life. 
        From organizing your schedule to staying connected with students and teachers, we make it simple and effective.
      </div>

      {/*Why Clever Compass*/}
      <div className="why-clever-compass">
        <div className="subtitle">Why Clever Compass?</div>
        <div className="images-container">
          <img src="image1.png" alt="Image 1" width="200"/>
          <img src="image2.png" alt="Image 2" width="200"/>
          <img src="image3.png" alt="Image 3" width="200"/>
        </div>
      </div>

      {/*Key features*/}
      <div className="key-features">
        <div className="subtitle"> Key Features</div>
        <div className="feature-box">
          <h3>Personalized Dashboards</h3>
          <p>Custom-tailored interfaces for students, tutors, and parents, ensuring intuitive and efficient access to essential information</p>
        </div>
        <div className="feature-box">
          <h3> Time Tracking & Payroll</h3>
          <p>Efficient time tracking system integrated with payroll for tutors.</p>
        </div>
        <div className="feature-box">
          <h3>Feedback & Performace Reviews</h3>
          <p>Tools for continuous improvement based on student and parent input, supporting quality and growth for tutors.</p>
        </div>
      </div>
    </div>
  </div>
  ); 
};

export default About;
