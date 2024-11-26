import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const FAQ = () => {
  return (

    <Sidebar>
    <div className="faq-page">
          {/* Now this us where you will out your html code */}
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>What is CleverCampus?</h3>
        <p>
          CleverCampus is a platform designed to help students, teachers, and professionals organize their academic and professional lives.
        </p>
      </div>
      <div className="faq-item">
        <h3>How do I create an account?</h3>
        <p>
          You can sign up on our <a href="/signup">Sign Up</a> page with your email address and a secure password.
        </p>
      </div>
      <div className="faq-item">
        <h3>Is CleverCampus free?</h3>
        <p>
          CleverCampus offers both free and premium plans. Check out our pricing page for more details.
        </p>
      </div>
    </div>
    </Sidebar>
  );
};

export default FAQ;
