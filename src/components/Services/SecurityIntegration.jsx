/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, Check, Lock, Key, Cpu, Smartphone,
  Zap, Users, Wifi, ChevronLeft, Phone, Calendar,
  Cctv, Database, Network, Terminal
} from 'lucide-react';
import styles from './ServiceDetail.module.css';

const SecurityIntegration = () => {
  const service = {
    id: 3,
    icon: <Shield />,
    title: 'Security System Integration',
    description: 'Complete security solutions including alarms, access control, and smart home integration for comprehensive protection. Unify your systems into a single, intelligent platform.',
    color: '#8B5CF6',
    features: [
      'Advanced Access Control Systems',
      'Intelligent Alarm & Intrusion Detection',
      'Smart Lock Integration & Management',
      'Multi-System Integration Platform',
      'Mobile & Remote Access Control',
      'Automated Security Protocols'
    ],
    stats: {
      integrations: '1500+',
      reliability: '99.8%',
      responseTime: '< 15s',
      compatibility: '95%+'
    },
    process: [
      {
        step: 1,
        title: 'System Audit',
        description: 'Comprehensive assessment of existing security systems and infrastructure.',
        icon: <Cpu />
      },
      {
        step: 2,
        title: 'Integration Planning',
        description: 'Custom integration plan for seamless system connectivity and operation.',
        icon: <Terminal />
      },
      {
        step: 3,
        title: 'Hardware Installation',
        description: 'Professional installation of integrated security hardware components.',
        icon: <Wrench />
      },
      {
        step: 4,
        title: 'Software Configuration',
        description: 'Custom software setup for unified control and monitoring interface.',
        icon: <Settings />
      },
      {
        step: 5,
        title: 'System Testing',
        description: 'Comprehensive testing of all integrated components and protocols.',
        icon: <Check />
      },
      {
        step: 6,
        title: 'Training & Handover',
        description: 'Complete user training and documentation for integrated system operation.',
        icon: <Users />
      }
    ],
    integrations: [
      {
        icon: <Lock />,
        title: 'Access Control',
        systems: ['Card Readers', 'Biometric Scanners', 'Keypad Systems', 'Mobile Access']
      },
      {
        icon: <Zap />,
        title: 'Alarm Systems',
        systems: ['Intrusion Detection', 'Fire Alarms', 'Environmental Sensors', 'Panic Buttons']
      },
      {
        icon: <Smartphone />,
        title: 'Smart Devices',
        systems: ['Smart Locks', 'Lighting Controls', 'Thermostats', 'Voice Assistants']
      },
      {
        icon: <Cctv />,
        title: 'Monitoring Systems',
        systems: ['CCTV Integration', 'Video Analytics', 'Central Monitoring', 'Cloud Storage']
      },
      {
        icon: <Database />,
        title: 'Data Systems',
        systems: ['Visitor Management', 'Asset Tracking', 'Attendance Systems', 'Reports']
      },
      {
        icon: <Network />,
        title: 'Network Integration',
        systems: ['Wi-Fi Systems', 'Network Security', 'Remote Access', 'VPN Integration']
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
              <Shield size={28} />
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
            <span>SECURITY INTEGRATION SERVICE</span>
          </div>

          <h1 className={styles.detailTitle}>
            <span className={styles.detailTitleMain}>{service.title}</span>
          </h1>

          <p className={styles.detailDescription}>
            Transform your security infrastructure with our comprehensive integration services. 
            We unify disparate security systems into a cohesive, intelligent platform that 
            provides complete control and visibility across all your security assets.
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
              <Cpu size={28} color={service.color} />
              <h3>Integration Features</h3>
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
              <Zap size={28} color={service.color} />
              <h3>Performance Metrics</h3>
            </div>
            <div className={styles.detailStatsGrid}>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.integrations}
                </div>
                <div className={styles.detailStatLabel}>Systems Integrated</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.reliability}
                </div>
                <div className={styles.detailStatLabel}>System Reliability</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.responseTime}
                </div>
                <div className={styles.detailStatLabel}>System Response Time</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.compatibility}
                </div>
                <div className={styles.detailStatLabel}>Device Compatibility</div>
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
              <Settings size={28} color={service.color} />
              <h3>Integration Process</h3>
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

        {/* Integrations Section */}
        <div className={styles.detailBenefitsSection}>
          <div className={styles.detailBenefitsTitle}>
            <h3>Supported Systems & Integration</h3>
            <p>Comprehensive support for all major security and smart systems</p>
          </div>

          <div className={styles.detailBenefitsGrid}>
            {service.integrations.map((integration, index) => (
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
                  {integration.icon}
                </div>
                <h4>{integration.title}</h4>
                <div className={styles.detailIntegrationSystems}>
                  {integration.systems.map((system, sysIndex) => (
                    <div key={sysIndex} className={styles.detailSystemItem}>
                      <div 
                        className={styles.detailSystemDot}
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span>{system}</span>
                    </div>
                  ))}
                </div>
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
            <h3 className={styles.detailCTATitle}>Ready to Unify Your Security?</h3>
            <p className={styles.detailCTADescription}>
              Let us integrate your security systems into a single, powerful platform. 
              Contact us for a comprehensive consultation and system assessment.
            </p>
            <div className={styles.detailCTAButtons}>
              <motion.a 
                href="tel:+14373511000" 
                className={styles.detailCTAButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: `linear-gradient(135deg, ${service.color}, #7C3AED)` }}
              >
                <Phone size={20} />
                <span>Schedule Integration Assessment</span>
              </motion.a>
              <motion.a 
                href="/contact" 
                className={`${styles.detailCTAButton} ${styles.detailCTAButtonSecondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Request Integration Quote</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Import Wrench and Settings if not already imported
import { Wrench, Settings } from 'lucide-react';

export default SecurityIntegration;