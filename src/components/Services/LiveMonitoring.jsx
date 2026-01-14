/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, Shield, Check, Clock, AlertTriangle, 
  Users, BarChart3, Headphones, ChevronLeft, Phone, Calendar,
  Activity, AlertCircle, Monitor, Zap
} from 'lucide-react';
import styles from './ServiceDetail.module.css';

const LiveMonitoring = () => {
  const service = {
    id: 2,
    icon: <Eye />,
    title: '24/7 Live Monitoring',
    description: 'Round-the-clock surveillance by certified security professionals with instant alerts and rapid response protocols for maximum protection.',
    color: '#10B981',
    features: [
      'Certified Live Monitoring Operators',
      'Advanced Motion Detection & Analytics',
      'Instant Emergency Response Coordination',
      'Detailed Activity & Incident Reports',
      'Multi-Site Monitoring Capability',
      'Custom Alert Protocols & Escalation'
    ],
    stats: {
      operators: '50+',
      responseTime: '< 30s',
      uptime: '99.99%',
      incidents: '1000+'
    },
    process: [
      {
        step: 1,
        title: 'Signal Detection',
        description: 'Continuous monitoring of all connected security devices and sensors.',
        icon: <Activity />
      },
      {
        step: 2,
        title: 'Alert Verification',
        description: 'Immediate verification of alerts by trained monitoring specialists.',
        icon: <AlertCircle />
      },
      {
        step: 3,
        title: 'Situation Assessment',
        description: 'Real-time assessment using multiple camera angles and sensor data.',
        icon: <Monitor />
      },
      {
        step: 4,
        title: 'Rapid Response',
        description: 'Immediate dispatch of appropriate response teams when needed.',
        icon: <Zap />
      },
      {
        step: 5,
        title: 'Owner Notification',
        description: 'Instant notification to property owners via multiple channels.',
        icon: <AlertTriangle />
      },
      {
        step: 6,
        title: 'Incident Documentation',
        description: 'Comprehensive documentation and reporting for all incidents.',
        icon: <Check />
      }
    ],
    benefits: [
      {
        icon: <Clock />,
        title: '24/7 Protection',
        description: 'Continuous monitoring ensures your property is protected around the clock.'
      },
      {
        icon: <AlertTriangle />,
        title: 'Instant Alerts',
        description: 'Real-time notifications for any suspicious activity or security breaches.'
      },
      {
        icon: <Users />,
        title: 'Expert Monitoring',
        description: 'Trained security professionals monitor your property with expertise.'
      },
      {
        icon: <BarChart3 />,
        title: 'Advanced Analytics',
        description: 'AI-powered analytics for intelligent threat detection and prevention.'
      },
      {
        icon: <Headphones />,
        title: 'Direct Communication',
        description: 'Two-way audio communication with monitoring center when needed.'
      },
      {
        icon: <Shield />,
        title: 'Insurance Benefits',
        description: 'May qualify for insurance discounts with professional monitoring.'
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBackground}>
        <div className={styles.detailGridPattern}></div>
        <div className={styles.detailFloatingElements}>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={styles.detailFloatingElement}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 3}s`
              }}
            >
              <Eye size={28} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.detailContent}>
        <div className={styles.detailHeader}>
          <Link to="/services" className={styles.detailBackButton}>
            <ChevronLeft size={20} />
            Back to All Services
          </Link>

          <div 
            className={styles.detailServiceIcon}
            style={{ color: service.color }}
          >
            <div 
              className={styles.detailIconInner}
              style={{ 
                backgroundColor: `${service.color}15`,
                border: `1px solid ${service.color}30`
              }}
            >
              {service.icon}
            </div>
          </div>

          <div className={styles.detailBadge}>
            <Shield size={16} />
            <span>24/7 LIVE MONITORING SERVICE</span>
          </div>

          <h1 className={styles.detailTitle}>
            <span className={styles.detailTitleMain}>{service.title}</span>
          </h1>

          <p className={styles.detailDescription}>
            Our 24/7 live monitoring service provides constant surveillance of your property by certified 
            security professionals. With instant alert systems and rapid response protocols, we ensure 
            your security is never compromised, giving you peace of mind day and night.
          </p>
        </div>

        <div className={styles.detailGrid}>
          <motion.div 
            className={styles.detailFeaturesCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.detailCardTitle}>
              <Eye size={28} color={service.color} />
              <h3>Monitoring Features</h3>
            </div>
            <div className={styles.detailFeaturesList}>
              {service.features.map((feature, index) => (
                <div key={index} className={styles.detailFeatureItem}>
                  <div 
                    className={styles.detailFeatureIcon}
                    style={{ 
                      backgroundColor: `${service.color}10`,
                      borderColor: `${service.color}20`,
                      color: service.color
                    }}
                  >
                    <Check size={20} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.detailStatsCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.detailCardTitle}>
              <BarChart3 size={28} color={service.color} />
              <h3>Performance Metrics</h3>
            </div>
            <div className={styles.detailStatsGrid}>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.operators}
                </div>
                <div className={styles.detailStatLabel}>Certified Operators</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.responseTime}
                </div>
                <div className={styles.detailStatLabel}>Average Response Time</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.uptime}
                </div>
                <div className={styles.detailStatLabel}>System Uptime</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.incidents}
                </div>
                <div className={styles.detailStatLabel}>Incidents Resolved</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.detailProcessCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.detailCardTitle}>
              <AlertTriangle size={28} color={service.color} />
              <h3>Response Protocol</h3>
            </div>
            <div className={styles.detailProcessSteps}>
              {service.process.map((step) => (
                <motion.div 
                  key={step.step} 
                  className={styles.detailProcessStep}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={styles.detailStepNumber}
                    style={{ 
                      backgroundColor: `${service.color}10`,
                      borderColor: `${service.color}30`,
                      color: service.color
                    }}
                  >
                    {step.icon}
                  </div>
                  <h4 className={styles.detailStepTitle}>{step.title}</h4>
                  <p className={styles.detailStepDescription}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.detailBenefitsSection}>
          <div className={styles.detailBenefitsTitle}>
            <h3>Benefits of Professional Monitoring</h3>
            <p>Experience comprehensive protection with our advanced monitoring solutions</p>
          </div>

          <div className={styles.detailBenefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.detailBenefitCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div 
                  className={styles.detailBenefitIcon}
                  style={{ 
                    backgroundColor: `${service.color}10`,
                    borderColor: `${service.color}20`,
                    color: service.color
                  }}
                >
                  {benefit.icon}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className={styles.detailCTASection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.detailCTAContent}>
            <h3 className={styles.detailCTATitle}>Need 24/7 Protection?</h3>
            <p className={styles.detailCTADescription}>
              Get peace of mind with our professional monitoring service. 
              Contact us today to learn about our monitoring packages and pricing options.
            </p>
            <div className={styles.detailCTAButtons}>
              <motion.a 
                href="tel:+14373511000" 
                className={styles.detailCTAButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: `linear-gradient(135deg, ${service.color}, #0DA675)` }}
              >
                <Phone size={20} />
                <span>Start Monitoring Today</span>
              </motion.a>
              <motion.a 
                href="/contact" 
                className={`${styles.detailCTAButton} ${styles.detailCTAButtonSecondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Get Pricing Information</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveMonitoring;