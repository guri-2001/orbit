// Hero.jsx
import React from 'react';
import { Star, Clock, MapPin, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:4373511000';
  };

  return (
    <section id="home" className="hero">
      {/* Background Image with overlay */}
      <div className="hero-background"></div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="hero-title">
            Professional Automation & <span className="highlight">Security Solutions</span> You Can Trust
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Expert installation, clean work, and reliable service from start to finish.
          </p>
          
          {/* Call to Action Button */}
          <div className="cta-container">
            <button 
              className="cta-button" 
              onClick={handleCallClick}
              aria-label="Call Now: (437) 351-1000"
            >
              Call Now: (437) 351-1000
            </button>
          </div>
          
          {/* Divider */}
          <div className="divider"></div>
          
          {/* Reviews and Features Container */}
          <div className="info-container">
            {/* Reviews Section */}
            <div className="reviews-container">
              <div className="rating-group">
                <div className="stars">
                  {[...Array(1)].map((_, i) => (
                    <div className="star-container" key={i}>
                      <Star className="star-icon" size={20} />
                    </div>
                  ))}
                </div>
                <div className="rating-text">
                  <span className="bold">5.0 Stars</span>
                  {/* <span className="divider-dot">•</span> */}
                  <span>40 Reviews</span>
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="features-container">
              <div className="feature">
                <div className="feature-icon-container">
                  <Clock className="feature-icon" size={18} />
                </div>
                <div className="feature-text">
                  <div className="feature-title bold">On-Time Work</div>
                  <div className="feature-subtitle">Professional</div>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon-container">
                  <MapPin className="feature-icon" size={18} />
                </div>
                <div className="feature-text">
                  <div className="feature-title bold">GTA</div>
                  <div className="feature-subtitle">& Nearby Areas</div>
                </div>
              </div>
              
              {/* <div className="feature">
                <div className="feature-icon-container">
                  <Globe className="feature-icon" size={18} />
                </div>
                <div className="feature-text">
                  <div className="feature-title bold">Your Website is Ready</div>
                  <div className="feature-subtitle link">Click to view more info →</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Right Side - Empty for layout balance */}
        <div className="hero-image"></div>
      </div>
    </section>
  );
};

export default Hero;