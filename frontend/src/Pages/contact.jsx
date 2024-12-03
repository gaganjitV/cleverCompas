import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const Contact = () => {

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not


  return (
 <div className={`contact-page-container ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
      <div className="contact-page">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.</p>
        </header>
        <section className="team-section">
          <h2>Our Team</h2>
          <p>The Clever Compass team is a group of dedicated individuals passionate about enhancing the tutoring experience:</p>
          <div className="team-members">
            <ul>
              <li>Cristobel Navarro-Miranda</li>
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
        </section>
        <section className="contact-details-section">
          <h2>Contact Information</h2>
          <p>Reach us through the following channels:</p>
          <div className="contact-details">
            <p>Email: <a href="mailto:support@clevercompass.com">support@clevercompass.com</a></p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 123 Clever Compass Lane, Learning City, Education State</p>
          </div>
        </section>
        <footer className="contact-footer">
          <p>We value your feedback and are committed to improving Clever Compass. Let us know how we can help you!</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
