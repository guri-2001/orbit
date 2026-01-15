import React from 'react';
import { Clock, MessageSquare, Award, Star, CheckCircle } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: 'Work Done On Time',
      description: 'We respect your schedule. Every project is completed professionally and on time, exactly as promised.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Excellent Communication',
      description: 'Clear updates from start to finish. We keep you informed and answer all your questions promptly.'
    },
    {
      icon: <Award size={24} />,
      title: 'High-Quality Installation',
      description: 'Expert craftsmanship with attention to detail. Every installation meets the highest standards with clean, professional results.'
    },
    {
      icon: <Star size={24} />,
      title: 'Highly Recommended',
      description: '5.0-star rating with 40+ reviews. Our customers trust us and recommend us to family and friends.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.preTitle}>WHY CHOOSE US</h2>
          <h1 className={styles.title}>Why Choose ORBIT TECH</h1>
          <p className={styles.subtitle}>
            Experience the difference with our reliable, professional automation and security installations.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <div className={styles.iconCircle}>
                  {feature.icon}
                </div>
                <div className={styles.checkBadge}>
                  <CheckCircle size={16} />
                </div>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              
              {/* Stats/Highlight */}
              {/* <div className={styles.featureHighlight}>
                {index === 0 && <span>98% On-Time</span>}
                {index === 1 && <span>100% Response</span>}
                {index === 2 && <span>Premium Quality</span>}
                {index === 3 && <span>5.0 Stars</span>}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;