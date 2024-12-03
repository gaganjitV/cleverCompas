import React from 'react';
import '../index.css';
import '../style/about.css';
import Sidebar from '../components/Sidebar'; 

const About = () => {

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not
  //testing



  return (

    
  <div className={`about-page-container ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
      <div className="about-page">
        <header className="about-header">
          <h1>About Clever Compass</h1>
          <p>Your ultimate companion for academic and professional success.</p>
        </header>
        <section className="about-section">
          <h2>Welcome to Clever Compass</h2>
          <p>
            Clever Compass is an innovative platform designed to streamline your academic and professional journey. 
            Whether you are a student seeking support, a tutor managing schedules, or a parent tracking progress, 
            Clever Compass provides the tools you need to succeed.
          </p>
        </section>
        <section className="about-section">
          <h2>Why Choose Clever Compass?</h2>
          <ul>
            <li>
              <strong>Streamlined Learning:</strong> Our platform bridges the gap between students and tutors, ensuring seamless communication and scheduling.
            </li>
            <li>
              <strong>Custom Dashboards:</strong> Personalized dashboards tailored to your role, whether you’re a student or a tutor.
            </li>
            <li>
              <strong>Comprehensive Tools:</strong> From tracking progress to managing time and payroll, Clever Compass simplifies complex tasks.
            </li>
            <li>
              <strong>Secure & Reliable:</strong> Your data is protected with industry-standard security practices, ensuring complete confidentiality.
            </li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature">
              <h3>Personalized Dashboards</h3>
              <p>
                Custom-tailored interfaces for students and tutors, offering intuitive and efficient access to essential information.
              </p>
            </div>
            <div className="feature">
              <h3>Time Tracking & Payroll</h3>
              <p>
                An integrated system to simplify payroll management and ensure accurate tracking for tutors.
              </p>
            </div>
            <div className="feature">
              <h3>Feedback & Performance Reviews</h3>
              <p>
                Continuous improvement tools based on student and parent feedback to foster growth and quality.
              </p>
            </div>
            <div className="feature">
              <h3>Seamless Communication</h3>
              <p>
                Live chat and messaging features to keep students and tutors connected in real-time.
              </p>
            </div>
          </div>
        </section>
        <footer className="about-footer">
          <p>
            Have questions? <a href="/contact">Contact us</a> to learn more about Clever Compass and how it can help you achieve your goals.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
