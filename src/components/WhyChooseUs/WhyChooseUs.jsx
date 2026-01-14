/* eslint-disable no-unused-vars */
import React, { useState, useRef, useMemo } from 'react';
import { Shield, Clock, MessageSquare, Star, Users, Award, CheckCircle } from 'lucide-react';
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
      icon: <Clock />,
      title: 'Work Done On Time',
      description: 'We respect your schedule. Every project is completed professionally and on time, exactly as promised.',
      stats: '98% On-Time',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    },
    {
      id: 2,
      icon: <MessageSquare />,
      title: 'Excellent Communication',
      description: 'Clear updates from start to finish. We keep you informed and answer all your questions promptly.',
      stats: '100% Response',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #34D399)',
    },
    {
      id: 3,
      icon: <Award />,
      title: 'High-Quality Installation',
      description: 'Expert craftsmanship with attention to detail. Every installation meets the highest standards with clean, professional results.',
      stats: 'Premium Quality',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    },
    {
      id: 4,
      icon: <Star />,
      title: 'Highly Recommended',
      description: '5.0-star rating with 40+ reviews. Our customers trust us and recommend us to family and friends.',
      stats: '5.0 Stars',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    },
  ];

  const advantages = [
    {
      icon: <Users />,
      title: 'Professional Team',
      items: ['Certified Technicians', 'Experienced Installers', 'Friendly Customer Service'],
    },
    {
      icon: <Clock />,
      title: 'Reliable Service',
      items: ['Prompt Response', 'Flexible Scheduling', 'On-Time Completion'],
    },
    {
      icon: <Award />,
      title: 'Quality Guarantee',
      items: ['Premium Materials', 'Expert Installation', 'Workmanship Warranty'],
    },
    {
      icon: <Shield />,
      title: 'Customer Trust',
      items: ['Transparent Pricing', 'Honest Communication', 'Satisfaction Guaranteed'],
    },
  ];

  const stats = [
    { value: '40+', label: '5-Star Reviews', icon: <Star /> },
    { value: '98%', label: 'On-Time Rate', icon: <Clock /> },
    { value: '100%', label: 'Satisfaction', icon: <Award /> },
    { value: '24/7', label: 'Support', icon: <Shield /> },
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
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className={styles.title}>
            The <span className={styles.highlight}>Trusted Choice</span> for Security & Installation Services
          </h2>
          <p className={styles.subtitle}>
            We deliver professional, reliable service with a commitment to quality, communication, and customer satisfaction.
            Experience the difference with a team that truly cares about your security needs.
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
                <Shield size={40} className={styles.coreIcon} />
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
                  <div className={styles.statsLabel}>TRUSTED SERVICE</div>
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
                        <span>Guaranteed</span>
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
        <motion.div 
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
        </motion.div>
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