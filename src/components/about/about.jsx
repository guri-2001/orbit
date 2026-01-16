import React from 'react';
import './about.css';

const OrbitTechExact = () => {
  const handleCallClick = () => {
    window.open('tel:+14373511000');
  };

  return (
    <div className="orbit-exact-container">
      
      {/* Top Tagline */}
      <div className="orbit-exact-tagline">
        <span className="orbit-tagline-text orbit-tagline-reliable">Reliable.</span>
        <span className="orbit-tagline-dot">•</span>
        <span className="orbit-tagline-text orbit-tagline-professional">Professional.</span>
        <span className="orbit-tagline-dot">•</span>
        <span className="orbit-tagline-text orbit-tagline-ontime">On Time.</span>
      </div>

      {/* Main Content with 2 columns */}
      <div className="orbit-exact-main">
        
        {/* Left Column - Text Content */}
        <div className="orbit-exact-left">
          
          {/* Company Name */}
          <h1 className="orbit-exact-company">ORBIT TECH</h1>
          
          {/* Main Description */}
          <p className="orbit-exact-description">
            provides professional automation and security system installations for homes and businesses. 
            We are known for clean work, clear communication, and completing every job on time. 
            From CCTV systems to smart home solutions, we focus on quality, reliability, and customer satisfaction.
          </p>

          {/* Features with Icons */}
          <div className="orbit-exact-features">
            
            {/* Feature 1 */}
            <div className="orbit-feature">
              <div className="orbit-feature-icon">
                <div className="orbit-icon-circle orbit-icon-clean">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
              </div>
              <div className="orbit-feature-content">
                <h3 className="orbit-feature-title">Clean Professional Work</h3>
                <p className="orbit-feature-desc">
                  Expert installations with attention to detail. We ensure every job is completed to 
                  the highest standards with clean, organized work.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="orbit-feature">
              <div className="orbit-feature-icon">
                <div className="orbit-icon-circle orbit-icon-comm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="orbit-feature-content">
                <h3 className="orbit-feature-title">Clear Communication</h3>
                <p className="orbit-feature-desc">
                  We keep you informed every step of the way. Excellent communication from quote to 
                  completion ensures no surprises.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="orbit-feature">
              <div className="orbit-feature-icon">
                <div className="orbit-icon-circle orbit-icon-time">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
              <div className="orbit-feature-content">
                <h3 className="orbit-feature-title">Always On Time</h3>
                <p className="orbit-feature-desc">
                  We respect your schedule. Our team arrives on time and completes projects as promised 
                  with reliable, punctual service.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="orbit-exact-cta">
            <button className="orbit-cta-button" onClick={handleCallClick}>
              Call Us Today →
            </button>
          </div>

        </div>

        {/* Right Column - Image with Overlay Card */}
        <div className="orbit-exact-right">
          
          {/* Main Image Container */}
          <div className="orbit-image-container">
            <img 
              src="https://locksvegas.com/wp-content/uploads/2021/12/iStock-618550358-scaled.jpg" 
              alt="Professional Security Installation"
              className="orbit-main-image"
            />
            
            {/* Overlay Card on Image */}
            <div className="orbit-image-card">
              <div className="orbit-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="orbit-card-content">
                <h4 className="orbit-card-title">24/7 Security Monitoring</h4>
                <p className="orbit-card-text">Professional surveillance systems installed by experts</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrbitTechExact;