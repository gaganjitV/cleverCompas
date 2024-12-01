import React, { useState } from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is CleverCampus?",
      answer: "CleverCampus is a platform designed to help students, teachers, and professionals organize their academic and professional lives.",
    },
    {
      question: "How do I create an account?",
      answer: "You can sign up on our Sign Up page with your email address and a secure password.",
    },
    {
      question: "Is CleverCampus free?",
      answer: "CleverCampus offers both free and premium plans. Check out our pricing page for more details.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page, and follow the instructions to reset your password.",
    },
    {
      question: "Can I connect with tutors directly?",
      answer: "Yes, our platform allows you to search for tutors and schedule sessions directly through their profiles.",
    },
  ];

  return (
    <Sidebar>
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleItem(index)}
            style={{ cursor: 'pointer', marginBottom: '1rem' }}
          >
            <h3>{item.question}</h3>
            {activeIndex === index && (
              <p style={{ marginTop: '0.5rem', color: '#555' }}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

export default FAQ;