import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const Contact = () => {
  return (
    <Sidebar>
    <div className="contact-page">
          {/* Now this us where you will out your html code */}
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us through the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:support@clevercampus.com">support@clevercampus.com</a></li>
        <li>Phone: +1 (800) 123-4567</li>
        <li>Address: 123 CleverCampus Lane, Learning City, Education State</li>
      </ul>
    </div>
    </Sidebar>
  );
};

export default Contact;
