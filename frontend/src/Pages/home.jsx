import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [images, setImages] = useState([]);
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not

  const [reviews, setReviews] = useState([
    { id: 1, user: "John Doe", role: "Student", review: "Clever Compass has been a game-changer for my studies!" },
    { id: 2, user: "Jane Smith", role: "Tutor", review: "The platform makes managing my sessions so much easier!" },
    { id: 3, user: "Alex Johnson", role: "Student", review: "I love how easy it is to find the right tutor for my needs." },
  ]);

  // Fetch images from Unsplash API
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?query=education&count=3&client_id=yKlHJE6mNFgMWAi_TWX3DpjwDntKUdOWdlvxOKdyMTI')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className={`home ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
      <div className="home-main-content">
        <header className="hero">
          <div className="hero-content">
            <h1>Welcome to Clever Compass</h1>
            <p>Empower your learning journey with modern tools and resources.</p>
            {!isLoggedIn && <Link to="/login" className="cta-button">Get Started</Link>} {/* Render the get started bytton only if logged in */}
          </div>
        </header>
        <section className="image-gallery">
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.urls.small} alt={image.alt_description} />
              </div>
            ))
          ) : (
            <p>Loading images... to many requests</p>
          )}
        </section>
        <section className="reviews-section">
          <h2>What People Are Saying</h2>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h3>{review.user} <span>({review.role})</span></h3>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
