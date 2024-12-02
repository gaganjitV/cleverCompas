import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [images, setImages] = useState([]);
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not

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
      </div>
    </div>
  );
};

export default Home;
