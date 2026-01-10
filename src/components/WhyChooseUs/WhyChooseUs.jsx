/* eslint-disable no-unused-vars */
import React, { useState, useRef, useMemo } from 'react';
import { Shield, Award, Clock, Users, Zap, CheckCircle, TrendingUp, Globe, Cpu, Battery, ShieldCheck, Lock, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const particleAnimations = useMemo(() => {
    return Array.from({ length: 12 }).map(() => {
      const getRandomValue = () => crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff;
      return {
        randomDuration: 3 + getRandomValue() * 2,
        randomDelay: getRandomValue() * 2,
        randomX: getRandomValue() * 20 - 10,
      };
    });
  }, []);

  const features = [
    {
      id: 1,
      icon: <Shield />,
      title: '5+ Years Security Excellence',
      description: 'Industry-leading experience protecting thousands of properties',
      stats: '5000+ Systems',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    },
    {
      id: 2,
      icon: <Award />,
      title: 'Certified Security Experts',
      description: 'Our team holds top security certifications and ongoing training',
      stats: '150+ Experts',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #34D399)',
    },
    {
      id: 3,
      icon: <Clock />,
      title: '24/7 Live Monitoring',
      description: 'Round-the-clock surveillance with instant emergency response',
      stats: '100% Uptime',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    },
    {
      id: 4,
      icon: <Zap />,
      title: 'Advanced AI Technology',
      description: 'Smart detection and analytics powered by artificial intelligence',
      stats: '99.8% Accuracy',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    },
  ];

  const advantages = [
    {
      icon: <Cpu />,
      title: 'Smart Technology',
      items: ['AI Motion Detection', 'Facial Recognition', 'Object Tracking'],
    },
    {
      icon: <Globe />,
      title: 'Global Standards',
      items: ['ISO 27001 Certified', 'GDPR Compliant', 'Industry Certified'],
    },
    {
      icon: <Battery />,
      title: 'Reliable Systems',
      items: ['Backup Power', 'Redundant Storage', 'Auto Updates'],
    },
    {
      icon: <ShieldCheck />,
      title: 'Complete Protection',
      items: ['End-to-End Encryption', 'Privacy Controls', 'Regular Audits'],
    },
  ];

  const stats = [
    { value: '99.9%', label: 'System Reliability', icon: <TrendingUp /> },
    { value: '<30min', label: 'Response Time', icon: <Clock /> },
    { value: '24/7', label: 'Support Available', icon: <Users /> },
    { value: '5★', label: 'Customer Rating', icon: <Star /> },
  ];

  return (
    <section id="why-choose-us" className={styles.section} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.securityGrid}></div>
      <div className={styles.protectionSphere}></div>
      <div className={styles.connectionLines}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Shield size={18} />
            <span>TRUSTED SECURITY PARTNER</span>
          </div>
          <h2 className={styles.title}>
            Why <span className={styles.highlight}>Thousands Trust</span> Our Security Solutions
          </h2>
          <p className={styles.subtitle}>
            Experience the difference with industry-leading technology, certified expertise, 
            and unparalleled customer support for complete peace of mind.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className={styles.featuresContainer}>
          <div className={styles.featuresVisual}>
            {/* Animated Core */}
            <motion.div 
              className={styles.securityCore}
              animate={{ 
                rotate: 360,
                boxShadow: [
                  '0 0 60px rgba(59, 130, 246, 0.3)',
                  '0 0 80px rgba(59, 130, 246, 0.5)',
                  '0 0 60px rgba(59, 130, 246, 0.3)',
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <div className={styles.coreInner}>
                <Lock size={40} className={styles.coreIcon} />
              </div>
              
              {/* Rotating Orbits */}
              <div className={styles.orbit1}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={`${styles.orbitItem} ${activeFeature === index ? styles.active : ''}`}
                    style={{ 
                      background: feature.gradient,
                      transform: `rotate(${index * 90}deg) translateX(100px) rotate(-${index * 90}deg)`
                    }}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={styles.orbitIcon}>{feature.icon}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className={styles.orbit2}>
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    className={styles.orbitDot}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Active Feature Display */}
            <motion.div 
              className={styles.activeFeature}
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className={styles.featureHighlight}
                style={{ background: features[activeFeature].gradient }}
              >
                <div className={styles.featureIconLarge}>
                  {features[activeFeature].icon}
                </div>
                <div className={styles.featureStats}>
                  <div className={styles.statsValue}>{features[activeFeature].stats}</div>
                  <div className={stats.label}>PROVEN RESULTS</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.featuresContent}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div 
                  className={styles.featureIndicator}
                  style={{ background: feature.gradient }}
                ></div>
                <div className={styles.featureMain}>
                  <div className={styles.featureHeader}>
                    <div 
                      className={styles.featureIcon}
                      style={{ background: feature.color + '20', color: feature.color }}
                    >
                      {feature.icon}
                    </div>
                    <div className={styles.featureTitle}>
                      {feature.title}
                      <div className={styles.featureBadge}>
                        <CheckCircle size={14} />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  <div className={styles.featureProgress}>
                    <motion.div 
                      className={styles.progressBar}
                      style={{ background: feature.gradient }}
                      initial={{ width: '0%' }}
                      animate={activeFeature === index ? { width: '100%' } : { width: '0%' }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advantages Grid */}
        <motion.div 
          className={styles.advantagesGrid}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className={styles.advantageCard}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className={styles.advantageIconWrapper}>
                <div className={styles.advantageIcon}>
                  {advantage.icon}
                </div>
                <div className={styles.iconGlow}></div>
              </div>
              <h3 className={styles.advantageTitle}>{advantage.title}</h3>
              <ul className={styles.advantageList}>
                {advantage.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.advantageItem}>
                    <div className={styles.itemMarker}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        {/* <motion.div 
          className={styles.statsBanner}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
                <div className={styles.statConnector}></div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Trust Indicators */}
        {/* <motion.div 
          className={styles.trustIndicators}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.trustHeader}>
            <Award size={24} />
            <h3>Certified & Accredited</h3>
          </div>
          <div className={styles.certifications}>
            {['ISO 27001', 'SSAIB', 'NSI Gold', 'Cyber Essentials', 'GDPR Compliant'].map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certBadge}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShieldCheck size={16} />
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Floating Particles */}
      <div className={styles.floatingParticles}>
        {particleAnimations.map((animation, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -20, 0],
              x: [0, animation.randomX, 0],
            }}
            transition={{
              duration: animation.randomDuration,
              repeat: Infinity,
              delay: animation.randomDelay,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;