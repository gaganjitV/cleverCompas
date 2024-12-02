import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const Contact = () => {

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not


  return (
<div className={`home ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
    <div className="contact-page">
          {/* Now this us where you will out your html code */}
      <div className="title-bar">
        Our Team
      </div>
      <p className="subtitle">
      The Clever Compass team comprises dedicated individuals passionate about improving the tutoring experience:
      </p>
      <div className="team-members">
        <ul>
          <li>Christobel Navarro-Miranda</li>
          <li>Mohammad Sumair</li>
          <li>Vatsal Maniyar</li>
          <li>Faizan Tariq</li>
        </ul>
        <ul>
          <li>Gaganjit Virdi</li>
          <li>Ryan Smith</li>
          <li>Jack Turner</li>
          <li>Sila Can</li>
        </ul>
      </div>
      <p className="subtitle">
      We are committed to continuously improving Clever Compass through feedback from our users and staying ahead of industry standards.
      </p>
      <div className="contact-info">
        <p>We'd love to hear from you! Reach out to us through the following channels:</p>
        <div className="details">
          <p>Email: <a href="mailto:support@clevercompass.com">support@clevercompass.com</a></p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 Clever Compass Lane, Learning City, Education State</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Contact;
