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
      question: "What is Clever Compass?",
      answer: "Clever Compass is a platform designed to help students, teachers, and professionals organize their academic and professional lives.",
    },
    {
      question: "How do I create an account?",
      answer: "You can sign up on our Sign Up page with your email address and a secure password.",
    },
    {
      question: "Is Clever Compass free?",
      answer: "Clever Compass offers both free and premium plans. Check out our pricing page for more details.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page, and follow the instructions to reset your password.",
    },
    {
      question: "Can I connect with tutors directly?",
      answer: "Yes, our platform allows you to search for tutors and schedule sessions directly through their profiles.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and other secure online payment methods.",
    },
    {
      question: "Can I cancel a tutoring session?",
      answer: "Yes, you can cancel a tutoring session up to 24 hours before the scheduled time. Please check our cancellation policy for details.",
    },
    {
      question: "How do I leave feedback for my tutor?",
      answer: "After each session, you'll have the opportunity to rate and leave a review for your tutor on their profile page.",
    },
    {
      question: "Is my data secure on Clever Compass?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your data.",
    },
    {
      question: "Do you offer support for group tutoring sessions?",
      answer: "Yes, our platform supports group tutoring sessions. Tutors can set up group sessions, and students can join based on availability.",
    },
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically logged and can be viewed in the 'Progress' section of your profile.",
    },
    {
      question: "Are there resources for self-paced learning?",
      answer: "Yes, CleverCampus provides access to various self-paced learning resources like videos, articles, and practice quizzes.",
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
