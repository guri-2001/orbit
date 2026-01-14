/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Camera, Shield, Zap, Eye, Lock, Play, ChevronRight, Sparkles, Cloud, Smartphone, Wifi, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const [activeCamera, setActiveCamera] = useState(0);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const cameraInterval = setInterval(() => {
      setActiveCamera(prev => (prev + 1) % 3);
    }, 3000);
    
    const liveInterval = setInterval(() => {
      setIsLive(prev => !prev);
    }, 2000);
    
    return () => {
      clearInterval(cameraInterval);
      clearInterval(liveInterval);
    };
  }, []);

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const securityFeatures = [
    { icon: <Eye />, title: '360° Coverage', desc: 'Complete area monitoring' },
    { icon: <Zap />, title: 'AI Detection', desc: 'Smart threat recognition' },
    { icon: <Cloud />, title: 'Cloud Storage', desc: 'Secure video backup' },
    { icon: <Smartphone />, title: 'Mobile Access', desc: 'Remote viewing anytime' },
  ];

  const cameraTypes = [
    { type: 'PTZ Camera', range: '360°', resolution: '4K', color: '#3B82F6' },
    { type: 'Dome Camera', range: '180°', resolution: '8MP', color: '#10B981' },
    { type: 'Bullet Camera', range: '90°', resolution: '5MP', color: '#8B5CF6' },
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.heroBackground}>
        <div className={styles.floatingOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
        <div className={styles.gridLines}></div>
        <div className={styles.securityPattern}></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.contentLeft}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>INNOVATIVE SECURITY TECHNOLOGY</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.titleLine}>Professional Automation</span>
            <span className={styles.titleLine}>
               &  <span className={styles.highlight}> Security Solutions</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.gradientText}> You Can Trust</span>
            </span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
           Expert installation, clean work, and reliable service from start to finish.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.actionButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button 
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              <Shield size={20} />
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </motion.button>
            <motion.button 
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProducts}
            >
              <Play size={18} />
              <span>View Products</span>
            </motion.button>
          </motion.div>

          {/* Interactive Camera Selector */}
          <motion.div 
            className={styles.cameraSelector}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className={styles.selectorHeader}>
              <Camera size={20} />
              <span>Choose Your Camera System</span>
            </div>
            <div className={styles.cameraOptions}>
              {cameraTypes.map((camera, index) => (
                <motion.div
                  key={index}
                  className={`${styles.cameraOption} ${activeCamera === index ? styles.active : ''}`}
                  onClick={() => setActiveCamera(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ borderColor: camera.color }}
                >
                  <div className={styles.cameraIcon} style={{ background: camera.color }}>
                    <Camera size={18} />
                  </div>
                  <div className={styles.cameraInfo}>
                    <div className={styles.cameraName}>{camera.type}</div>
                    <div className={styles.cameraSpecs}>
                      <span>{camera.range}</span>
                      <span>•</span>
                      <span>{camera.resolution}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </div>

        {/* Right Visual */}
        <div className={styles.contentRight}>
          {/* Main 3D Camera Visualization */}
          <motion.div 
            className={styles.cameraVisual}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Camera Body */}
            <div className={styles.camera3d}>
              <div className={styles.cameraLensGroup}>
                <div className={styles.mainLens}>
                  <div className={styles.lensInner}>
                    <div className={styles.lensCore}></div>
                    <div className={styles.lensGlare}></div>
                  </div>
                </div>
                <div className={styles.infraredRing}></div>
              </div>
              
              <div className={styles.cameraBody}>
                <div className={styles.statusIndicators}>
                  <div className={`${styles.statusDot} ${isLive ? styles.live : ''}`}>
                    <div className={styles.pulseRing}></div>
                  </div>
                  <span>{isLive ? 'LIVE FEED' : 'STANDBY'}</span>
                </div>
                
                <div className={styles.techBadges}>
                  <div className={styles.techBadge}>
                    <Wifi size={12} />
                    <span>Wi-Fi</span>
                  </div>
                  <div className={styles.techBadge}>
                    <Activity size={12} />
                    <span>AI</span>
                  </div>
                  <div className={styles.techBadge}>
                    <Lock size={12} />
                    <span>Encrypted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Features */}
            <div className={styles.floatingFeatures}>
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureText}>
                    <div className={styles.featureTitle}>{feature.title}</div>
                    <div className={styles.featureDesc}>{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Connection Lines */}
            <svg className={styles.connectionLines} width="400" height="300">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
                </linearGradient>
                <mask id="mask">
                  <rect width="400" height="300" fill="white" />
                  {securityFeatures.map((_, index) => (
                    <motion.path
                      key={index}
                      d={`M ${200 + index * 20} 150 L ${150 + index * 60} ${100 + index * 40}`}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  ))}
                </mask>
              </defs>
              <rect width="400" height="300" fill="url(#gradient)" mask="url(#mask)" />
            </svg>
          </motion.div>

          {/* Live Monitoring Badge */}
          <motion.div 
            className={styles.liveBadge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className={styles.liveIndicator}>
              <div className={styles.livePulse}></div>
            </div>
            <div className={styles.liveText}>
              <div className={styles.liveTitle}>24/7 LIVE MONITORING</div>
              <div className={styles.liveStatus}>ACTIVE NOW</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Stats Bar */}
      <motion.div 
        className={styles.statsBar}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5,000+</div>
            <div className={styles.statLabel}>Happy Customers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.8%</div>
            <div className={styles.statLabel}>Uptime Record</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Support Team</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Explore More</span>
      </motion.div> */}
    </section>
  );
};

export default Hero;