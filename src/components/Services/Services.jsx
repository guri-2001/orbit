/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Camera, Eye, Shield, Zap, Video, Cloud, Smartphone, Users, Bell, Lock, Wifi, Settings, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Camera />,
      title: 'Professional Installation',
      description: 'Expert installation of HD CCTV systems with optimal positioning for maximum coverage.',
      features: ['Site Survey', 'Custom Wiring', 'Camera Calibration', 'System Testing'],
      color: '#3B82F6',
      stats: { completed: '5000+', satisfaction: '99%' }
    },
    {
      id: 2,
      icon: <Eye />,
      title: '24/7 Live Monitoring',
      description: 'Round-the-clock surveillance by certified security professionals with instant alerts.',
      features: ['Live Operators', 'Motion Detection', 'Emergency Response', 'Activity Reports'],
      color: '#10B981',
      stats: { completed: '24/7', satisfaction: '100%' }
    },
    {
      id: 3,
      icon: <Shield />,
      title: 'Security System Integration',
      description: 'Complete security solutions including alarms, access control, and smart home integration.',
      features: ['Access Control', 'Alarm Systems', 'Smart Locks', 'Integration'],
      color: '#8B5CF6',
      stats: { completed: '1500+', satisfaction: '98%' }
    },
    // {
    //   id: 4,
    //   icon: <Zap />,
    //   title: 'AI-Powered Analytics',
    //   description: 'Advanced AI detection for facial recognition, object tracking, and suspicious activity.',
    //   features: ['Face Recognition', 'Object Detection', 'Behavior Analysis', 'Smart Alerts'],
    //   color: '#F59E0B',
    //   stats: { completed: 'AI Active', satisfaction: '95%' }
    // },
    // {
    //   id: 5,
    //   icon: <Cloud />,
    //   title: 'Cloud Storage Solutions',
    //   description: 'Secure cloud storage with encrypted backup and remote access to footage.',
    //   features: ['Encrypted Storage', 'Remote Access', 'Auto Backup', 'Multi-Device'],
    //   color: '#06B6D4',
    //   stats: { completed: 'Unlimited', satisfaction: '97%' }
    // },
    // {
    //   id: 6,
    //   icon: <Smartphone />,
    //   title: 'Mobile App Control',
    //   description: 'Complete control and monitoring through our dedicated mobile application.',
    //   features: ['Live View', 'Playback', 'Notifications', 'Remote Control'],
    //   color: '#EC4899',
    //   stats: { completed: 'App Ready', satisfaction: '96%' }
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            <span>COMPREHENSIVE SECURITY SOLUTIONS</span>
          </motion.div>

          <motion.h2 
            className={styles.secTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.secTitleMain}>Professional Security</span>
            <span className={styles.secTitleSub}>Services</span>
          </motion.h2>

          <motion.p 
            className={styles.secDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From residential protection to enterprise security, we provide end-to-end surveillance 
            solutions tailored to your specific needs with cutting-edge technology.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className={styles.secGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`${styles.secCard} ${activeService === service.id ? styles.secCardActive : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Card Header */}
              <div className={styles.secCardHeader}>
                <div 
                  className={styles.secCardIcon}
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                    borderColor: `${service.color}40`
                  }}
                >
                  <div className={styles.secIconInner} style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <div className={styles.secIconGlow} style={{ backgroundColor: service.color }}></div>
                </div>
                <div className={styles.secCardTitle}>
                  <h3>{service.title}</h3>
                  <div className={styles.secCardStats}>
                    <span className={styles.secStat}>{service.stats.completed}</span>
                    <span className={styles.secStatDivider}>•</span>
                    <span className={styles.secStat}>{service.stats.satisfaction} Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className={styles.secCardContent}>
                <p className={styles.secCardDescription}>{service.description}</p>
                
                {/* Features List */}
                <div className={styles.secFeatures}>
                  {service.features.map((feature, index) => (
                    <div key={index} className={styles.secFeatureItem}>
                      <div 
                        className={styles.secFeatureIcon}
                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                      >
                        <CheckIcon />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Bars */}
                <div className={styles.secStatsBars}>
                  <div className={styles.secStatBar}>
                    <div className={styles.secBarLabel}>Efficiency</div>
                    <div className={styles.secBarContainer}>
                      <motion.div 
                        className={styles.secBarFill}
                        style={{ backgroundColor: service.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <div className={styles.secBarValue}>95%</div>
                  </div>
                  <div className={styles.secStatBar}>
                    <div className={styles.secBarLabel}>Reliability</div>
                    <div className={styles.secBarContainer}>
                      <motion.div 
                        className={styles.secBarFill}
                        style={{ backgroundColor: service.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <div className={styles.secBarValue}>98%</div>
                  </div>
                </div>

                {/* Hover Effect Elements */}
                <div className={styles.secHoverElements}>
                  <div className={styles.secPulseRing} style={{ borderColor: service.color }}></div>
                  <div className={styles.secCornerTopLeft} style={{ backgroundColor: service.color }}></div>
                  <div className={styles.secCornerTopRight} style={{ backgroundColor: service.color }}></div>
                  <div className={styles.secCornerBottomLeft} style={{ backgroundColor: service.color }}></div>
                  <div className={styles.secCornerBottomRight} style={{ backgroundColor: service.color }}></div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button 
                className={styles.secActionBtn}
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}DD)`,
                  '--hover-color': `${service.color}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowIcon />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Comparison */}
        {/* <div className={styles.secComparison}>
          <motion.div 
            className={styles.secComparisonCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.secComparisonHeader}>
              <Settings size={24} />
              <h3>Complete Security Package</h3>
              <div className={styles.secComparisonBadge}>Most Popular</div>
            </div>
            <div className={styles.secComparisonContent}>
              <div className={styles.secComparisonFeatures}>
                {['Installation', 'Monitoring', 'Maintenance', 'Support', 'Updates', 'Warranty'].map((feature) => (
                  <div key={feature} className={styles.secComparisonFeature}>
                    <CheckCircleIcon />
                    <span>{feature} Included</span>
                  </div>
                ))}
              </div>
              <div className={styles.secComparisonCTA}>
                <button className={styles.secPackageBtn}>
                  <span>View Complete Packages</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div> */}
      </div>

      {/* Floating CTAs */}
      {/* <div className={styles.secFloatingCTAs}>
        <motion.div 
          className={styles.secFloatingCTA}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Video size={20} />
          <span>Free Demo Available</span>
        </motion.div>
        <motion.div 
          className={styles.secFloatingCTA}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Users size={20} />
          <span>Expert Consultation</span>
        </motion.div>
      </div> */}
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
    <path d="M3.33301 8H12.6663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="#10B981" strokeWidth="2"/>
    <path d="M6 9L8 11L12 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Services;