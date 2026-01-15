/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Camera, Home, Lock, Phone, Shield, Cable, Tv, Music, Radio, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Camera />,
      title: 'CCTV Cameras',
      subtitle: 'Analog & IP',
      description: 'Professional security camera installation for complete property monitoring.',
      features: ['HD & 4K camera options', 'Night vision capability', 'Remote viewing access', 'Professional installation'],
      color: '#3B82F6',
      slug: 'cctv-cameras'
    },
    {
      id: 2,
      icon: <Shield />,
      title: 'Intrusion & Alarm',
      subtitle: 'Security Systems',
      description: 'Advanced security systems to protect your property 24/7.',
      features: ['Motion sensors', 'Door/window sensors', '24/7 monitoring', 'Emergency response'],
      color: '#EF4444',
      slug: 'intrusion-alarm'
    },
    {
      id: 3,
      icon: <Home />,
      title: 'Smart Home',
      subtitle: 'Automation Systems',
      description: 'Modern automation solutions for intelligent home control and security.',
      features: ['Smart lighting', 'Climate control', 'Voice control', 'Mobile app access'],
      color: '#10B981',
      slug: 'smart-home'
    }
  ];

  const allServices = [
    {
      id: 1,
      icon: <Camera />,
      title: 'CCTV Cameras (Analog & IP)',
      description: 'Professional security camera installation for complete property monitoring.',
      slug: 'cctv-cameras'
    },
    {
      id: 2,
      icon: <Home />,
      title: 'Smart Home & Security Systems',
      description: 'Modern automation solutions for intelligent home control and security.',
      slug: 'smart-home-security'
    },
    {
      id: 3,
      icon: <Lock />,
      title: 'Smart Doorbell & Lock Installation',
      description: 'Secure entry systems with remote access and monitoring capabilities.',
      slug: 'smart-doorbell-lock'
    },
    {
      id: 4,
      icon: <Phone />,
      title: 'Intercom & Telephone Entry',
      description: 'Communication systems for residential and commercial properties.',
      slug: 'intercom-telephone'
    },
    {
      id: 5,
      icon: <Shield />,
      title: 'Intrusion / Alarm Systems',
      description: 'Advanced security systems to protect your property 24/7.',
      slug: 'intrusion-alarm'
    },
    {
      id: 6,
      icon: <Cable />,
      title: 'Structured Cabling',
      description: 'Professional wiring infrastructure for reliable connectivity.',
      slug: 'structured-cabling'
    },
    {
      id: 7,
      icon: <Tv />,
      title: 'TV Mounting',
      description: 'Expert TV installation with clean cable management.',
      slug: 'tv-mounting'
    },
    {
      id: 8,
      icon: <Radio />,
      title: 'Home Theatre Installation',
      description: 'Complete home cinema setup for the ultimate viewing experience.',
      slug: 'home-theatre'
    },
    {
      id: 9,
      icon: <Music />,
      title: 'Audio, Video & Lighting Systems',
      description: 'Integrated multimedia and smart lighting solutions.',
      slug: 'audio-video-lighting'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Background Elements */}
      <div className={styles.secBackground}>
        <div className={styles.secGridPattern}></div>
        <div className={styles.secFloatingIcons}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.secFloatingIcon} style={{ animationDelay: `${i * 0.5}s` }}>
              <Camera size={20} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.secContainer}>
        {/* Section Header */}
        <div className={styles.secHeader}>
          <motion.div 
            className={styles.secBadge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield size={16} />
            <span>OUR PROFESSIONAL SERVICES</span>
          </motion.div>

          <motion.h2 
            className={styles.secTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.secTitleMain}>Our Services</span>
          </motion.h2>

          <motion.p 
            className={styles.secDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Professional installation and automation solutions for homes and businesses.
          </motion.p>
        </div>

        {/* All Services Grid */}
        <div className={styles.allServicesSection}>
          <div className={styles.allServicesGrid}>
            {allServices.map((service, index) => (
              // <Link to={`/services/${service.slug}`} key={service.id} className={styles.serviceLink}>
                <motion.div 
                  className={styles.serviceItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.serviceItemIcon}>
                    {service.icon}
                  </div>
                  <div className={styles.serviceItemContent}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                  {/* <div className={styles.serviceItemArrow}>
                    <ArrowIcon />
                  </div> */}
                </motion.div>
              // </Link>
            ))}
          </div>
        </div>

        {/* Hidden Wire Installation CTA Section */}
        <motion.div 
          className={styles.hiddenWireSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.hiddenWireContent}>
            <div className={styles.hiddenWireHeader}>
              <Check size={32} className={styles.checkIcon} />
              <h3>100% Hidden Wire Installation</h3>
            </div>
            <p className={styles.hiddenWireDescription}>
              Professional concealed wiring for a clean, seamless finish with no visible cables.
            </p>
            
            <div className={styles.hiddenWireDivider}></div>
            
            <div className={styles.customSolutionSection}>
              <h4>Need a custom solution?</h4>
              <p>We handle residential and commercial projects.</p>
              
              <motion.a 
                href="tel:+14373511000"
                className={styles.phoneButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>Call +1 (437) 351-1000</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Featured Services Grid - Hidden */}
        <div className={styles.featuredSection} style={{ display: 'none' }}>
          <motion.div 
            className={styles.featuredGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`${styles.featuredCard} ${activeService === service.id ? styles.featuredCardActive : ''}`}
                variants={itemVariants}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={styles.featuredCardHeader}>
                  <div 
                    className={styles.featuredIcon}
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                      borderColor: `${service.color}40`
                    }}
                  >
                    <div className={styles.featuredIconInner} style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <div className={styles.featuredTitleWrapper}>
                    <h3>{service.title}</h3>
                    <p className={styles.featuredSubtitleText}>{service.subtitle}</p>
                  </div>
                </div>

                <p className={styles.featuredDescription}>{service.description}</p>

                <div className={styles.featuredFeatures}>
                  {service.features.map((feature, index) => (
                    <div key={index} className={styles.featuredFeature}>
                      <div 
                        className={styles.featuredFeatureIcon}
                        style={{ backgroundColor: `${service.color}15`, color: service.color }}
                      >
                        <CheckIcon />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`} style={{textDecoration:"none"}}>
                  <motion.button 
                    className={styles.featuredButton}
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}DD)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Details</span>
                    <ArrowIcon />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom Icons
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Services;