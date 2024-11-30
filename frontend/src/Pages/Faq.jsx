import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const FAQ = () => {


  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not
  return (

    

    <div className={`home ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
    <div className="faq-page">
          {/* Now this us where you will out your html code */}
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>What is Clever Compass?</h3>
        <p>
          Clever Compass is a platform designed to help students, teachers, and professionals organize their academic and professional lives.
        </p>
      </div>
      <div className="faq-item">
        <h3>How do I create an account?</h3>
        <p>
          You can sign up on our <a href="/signup">Sign Up</a> page with your email address and a secure password.
        </p>
      </div>
      <div className="faq-item">
        <h3>Is Clever Compass free?</h3>
        <p>
          Clever Compass offers both free and premium plans. Check out our pricing page for more details!
        </p>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
