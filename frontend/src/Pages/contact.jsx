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
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us through the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:support@clevercompass.com">support@clevercompass.com</a></li>
        <li>Phone: +1 (800) 123-4567</li>
        <li>Address: 123 Clever Compass Lane, Learning City, Education State</li>
      </ul>
      <ul>
        <li>Christobel Navarro-Miranda</li>
        <li>Mohammah Sumair</li>
        <li>Vatsal Maniyar</li>
        <li>Faizan Tariq</li>
        <li>Gaganjit Virdi</li>
        <li>Ryan Smith</li>
        <li>Jack Turner</li>
        <li>Sila Can</li>
      </ul>
    </div>
   </div>
  );
};

export default Contact;
