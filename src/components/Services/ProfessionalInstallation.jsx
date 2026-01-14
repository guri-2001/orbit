/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, Shield, Check, Settings, Wrench, 
  Clock, Users, Award, ChevronLeft, Phone, Calendar,
  MapPin, Cpu, Zap, FileCheck
} from 'lucide-react';
import styles from './ServiceDetail.module.css';

const ProfessionalInstallation = () => {
  const service = {
    id: 1,
    icon: <Camera />,
    title: 'Professional Installation',
    description: 'Expert installation of HD CCTV systems with optimal positioning for maximum coverage and security efficiency. Our certified technicians ensure flawless setup and configuration.',
    color: '#3B82F6',
    features: [
      'Comprehensive Site Survey & Analysis',
      'Custom Wiring & Cable Management',
      'Precision Camera Calibration',
      'Rigorous System Testing & Validation',
      'Network Configuration & Optimization',
      'User Training & Documentation'
    ],
    stats: {
      completed: '5000+',
      satisfaction: '99%',
      responseTime: '< 24h',
      warranty: '3 Years'
    },
    process: [
      {
        step: 1,
        title: 'Site Assessment',
        description: 'Thorough evaluation of your property to identify optimal camera locations and coverage areas.',
        icon: <MapPin />
      },
      {
        step: 2,
        title: 'System Design',
        description: 'Customized security system design tailored to your specific needs and requirements.',
        icon: <Settings />
      },
      {
        step: 3,
        title: 'Equipment Selection',
        description: 'Recommendation and selection of high-quality cameras and equipment for optimal performance.',
        icon: <Camera />
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Expert installation by certified technicians with minimal disruption to your daily operations.',
        icon: <Wrench />
      },
      {
        step: 5,
        title: 'Configuration & Testing',
        description: 'Complete system setup, network configuration, and rigorous testing for optimal performance.',
        icon: <Cpu />
      },
      {
        step: 6,
        title: 'Training & Handover',
        description: 'Comprehensive user training and documentation for smooth system operation.',
        icon: <FileCheck />
      }
    ],
    benefits: [
      {
        icon: <Shield />,
        title: 'Enhanced Security Coverage',
        description: 'Strategic camera placement ensures maximum coverage and eliminates blind spots.'
      },
      {
        icon: <Settings />,
        title: 'Expert Configuration',
        description: 'Professional setup and optimization for optimal performance and reliability.'
      },
      {
        icon: <Clock />,
        title: 'Time Efficiency',
        description: 'Quick and efficient installation process with minimal disruption to your business.'
      },
      {
        icon: <Wrench />,
        title: 'Quality Workmanship',
        description: 'Certified technicians using professional-grade tools and techniques.'
      },
      {
        icon: <Users />,
        title: 'Comprehensive Support',
        description: 'Ongoing technical support and maintenance services available.'
      },
      {
        icon: <Award />,
        title: 'Warranty Protection',
        description: '3-year warranty on installation work and equipment support.'
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.detailContainer}>
      {/* Background Elements */}
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
              <Camera size={28} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.detailContent}>
        {/* Header */}
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
            <span>PROFESSIONAL INSTALLATION SERVICE</span>
          </div>

          <h1 className={styles.detailTitle}>
            <span className={styles.detailTitleMain}>{service.title}</span>
          </h1>

          <p className={styles.detailDescription}>
            Our professional installation service ensures your security system is installed correctly, 
            optimally positioned, and fully functional from day one. We handle everything from site 
            assessment to final testing and user training with precision and expertise.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.detailGrid}>
          {/* Features Card */}
          <motion.div 
            className={styles.detailFeaturesCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.detailCardTitle}>
              <Camera size={28} color={service.color} />
              <h3>Comprehensive Service Features</h3>
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

          {/* Stats Card */}
          <motion.div 
            className={styles.detailStatsCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.detailCardTitle}>
              <Award size={28} color={service.color} />
              <h3>Performance Excellence</h3>
            </div>
            <div className={styles.detailStatsGrid}>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.completed}
                </div>
                <div className={styles.detailStatLabel}>Installations Completed</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.satisfaction}
                </div>
                <div className={styles.detailStatLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.responseTime}
                </div>
                <div className={styles.detailStatLabel}>Response Time</div>
              </div>
              <div className={styles.detailStatItem}>
                <div className={styles.detailStatValue} style={{ color: service.color }}>
                  {service.stats.warranty}
                </div>
                <div className={styles.detailStatLabel}>Warranty Period</div>
              </div>
            </div>
          </motion.div>

          {/* Process Card */}
          <motion.div 
            className={styles.detailProcessCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.detailCardTitle}>
              <Settings size={28} color={service.color} />
              <h3>Our Installation Process</h3>
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

        {/* Benefits Section */}
        <div className={styles.detailBenefitsSection}>
          <div className={styles.detailBenefitsTitle}>
            <h3>Why Choose Our Installation Service</h3>
            <p>Experience peace of mind with our comprehensive professional installation package</p>
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

        {/* CTA Section */}
        <motion.div 
          className={styles.detailCTASection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.detailCTAContent}>
            <h3 className={styles.detailCTATitle}>Ready to Secure Your Property?</h3>
            <p className={styles.detailCTADescription}>
              Contact us today for a free consultation and site assessment. 
              Let our experts design and install the perfect security solution tailored to your specific needs.
            </p>
            <div className={styles.detailCTAButtons}>
              <motion.a 
                href="tel:+14373511000" 
                className={styles.detailCTAButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: `linear-gradient(135deg, ${service.color}, #2563EB)` }}
              >
                <Phone size={20} />
                <span>Schedule a Consultation</span>
              </motion.a>
              <motion.a 
                href="/contact" 
                className={`${styles.detailCTAButton} ${styles.detailCTAButtonSecondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>Request a Free Quote</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalInstallation;