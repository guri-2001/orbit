/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Settings, CheckCircle, PhoneCall, ChevronRight, Clock, Shield, Zap, Award, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './InstallationProcess.module.css';

const InstallationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Free Consultation',
      description: 'Discuss your security needs with our experts',
      icon: <PhoneCall size={24} />,
      color: '#3B82F6',
      details: [
        '15-minute initial call',
        'Security requirement analysis',
        'Budget consultation',
        'Timeline discussion'
      ],
      duration: '15 min',
      iconBg: 'linear-gradient(135deg, #3B82F6, #60A5FA)'
    },
    {
      id: 1,
      number: '02',
      title: 'Site Survey',
      description: 'Professional assessment of your property',
      icon: <MapPin size={24} />,
      color: '#10B981',
      details: [
        'Property walkthrough',
        'Risk assessment',
        'Camera placement planning',
        'Technical feasibility check'
      ],
      duration: '1-2 hours',
      iconBg: 'linear-gradient(135deg, #10B981, #34D399)'
    },
    {
      id: 2,
      number: '03',
      title: 'Custom Design',
      description: 'Tailored security system blueprint',
      icon: <Settings size={24} />,
      color: '#8B5CF6',
      details: [
        '3D layout visualization',
        'Equipment selection',
        'Network planning',
        'Final quote preparation'
      ],
      duration: '24-48 hours',
      iconBg: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'
    },
    {
      id: 3,
      number: '04',
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians',
      icon: <Users size={24} />,
      color: '#F59E0B',
      details: [
        'Equipment installation',
        'Cable management',
        'System configuration',
        'Quality testing'
      ],
      duration: '4-8 hours',
      iconBg: 'linear-gradient(135deg, #F59E0B, #FBBF24)'
    },
    {
      id: 4,
      number: '05',
      title: 'Training & Support',
      description: 'Complete system handover and training',
      icon: <CheckCircle size={24} />,
      color: '#EF4444',
      details: [
        'System demonstration',
        'Mobile app setup',
        '24/7 support access',
        'Warranty activation'
      ],
      duration: '1-2 hours',
      iconBg: 'linear-gradient(135deg, #EF4444, #F87171)'
    }
  ];

  const guarantees = [
    { icon: <Shield />, text: 'Certified Installers', count: '150+' },
    { icon: <Clock />, text: 'Same-Day Service', count: '98%' },
    { icon: <Zap />, text: 'Quick Installation', count: '< 8 hours' },
    { icon: <Award />, text: 'Warranty', count: '3 years' }
  ];

  return (
    <section id="installation" className={styles.installationProcess}>
      {/* Background Elements */}
      <div className={styles.processBackground}>
        <div className={styles.techGrid}></div>
        <div className={styles.circuitLines}></div>
        <div className={styles.floatingElements}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.floatingDot} style={{ '--delay': `${i * 0.5}s` }}></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerBadge}>
            <Settings size={18} />
            <span>PROFESSIONAL INSTALLATION</span>
          </div>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleLine}>Our Seamless</span>
            <span className={styles.titleLine}>
              <span className={styles.titleHighlight}>5-Step</span> Installation Process
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From initial consultation to complete system handover, we ensure a smooth and 
            professional installation experience with certified experts.
          </p>
        </motion.div>

        <div className={styles.processContent}>
          {/* Left Side - Steps List */}
          <div className={styles.stepsList}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${styles.stepCard} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className={styles.stepIndicator}>
                  <div 
                    className={styles.stepNumber}
                    style={{ background: step.iconBg }}
                  >
                    {step.number}
                  </div>
                  <div className={styles.stepConnector}></div>
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <div className={styles.stepIcon} style={{ background: step.iconBg }}>
                      {step.icon}
                    </div>
                    <div className={styles.stepInfo}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <div className={styles.stepDuration}>
                        <Clock size={14} />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  <div className={styles.stepPreview}>
                    {step.details.slice(0, 2).map((detail, i) => (
                      <div key={i} className={styles.previewItem}>
                        <ChevronRight size={12} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeStep === index && (
                  <motion.div 
                    className={styles.activeGlow}
                    layoutId="activeGlow"
                    initial={false}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Active Step Details */}
          <div className={styles.stepDetails}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className={styles.detailsCard}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.detailsHeader}>
                  <div className={styles.detailsNumber} style={{ background: steps[activeStep].iconBg }}>
                    {steps[activeStep].number}
                  </div>
                  <div className={styles.detailsTitleSection}>
                    <h3 className={styles.detailsTitle}>{steps[activeStep].title}</h3>
                    <div className={styles.detailsTimeline}>
                      <Clock size={16} />
                      <span>Duration: {steps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.detailsVisual}>
                  <div className={styles.visualContainer}>
                    <div className={styles.processAnimation}>
                      <div className={styles.animationCircle} style={{ '--color': steps[activeStep].color }}>
                        {steps[activeStep].icon}
                      </div>
                      <div className={styles.animationRing}></div>
                      <div className={styles.animationParticles}>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className={styles.particle} style={{ '--i': i }}></div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.visualLabel}>
                      <span>Step {activeStep + 1} of 5</span>
                      <div className={styles.progressBar}>
                        <motion.div 
                          className={styles.progressFill}
                          initial={{ width: '0%' }}
                          animate={{ width: `${(activeStep + 1) * 20}%` }}
                          transition={{ duration: 0.8 }}
                          style={{ background: steps[activeStep].iconBg }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.detailsContent}>
                  <h4 className={styles.contentTitle}>What to Expect</h4>
                  <div className={styles.contentGrid}>
                    {steps[activeStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className={styles.detailItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className={styles.itemIcon} style={{ background: steps[activeStep].color + '20' }}>
                          <CheckCircle size={16} style={{ color: steps[activeStep].color }} />
                        </div>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
{/* 
                  {activeStep === 0 && (
                    <div className={styles.ctaBox}>
                      <div className={styles.ctaContent}>
                        <h4>Ready to Start?</h4>
                        <p>Schedule your free consultation today</p>
                      </div>
                      <button className={styles.ctaButton}>
                        <Calendar size={18} />
                        <span>Book Now</span>
                      </button>
                    </div>
                  )} */}

                  {/* {activeStep === 4 && (
                    <div className={styles.completionBox}>
                      <div className={styles.completionBadge}>
                        <Award size={20} />
                        <span>Installation Complete!</span>
                      </div>
                      <p>Your security system is now active and monitoring</p>
                      <button className={styles.downloadButton}>
                        <Download size={18} />
                        <span>Download User Manual</span>
                      </button>
                    </div>
                  )} */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Installation Guarantees */}
        {/* <motion.div 
          className={styles.guaranteesSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.guaranteesHeader}>
            <h3 className={styles.guaranteesTitle}>Our Installation Guarantee</h3>
            <p className={styles.guaranteesSubtitle}>Quality assurance you can trust</p>
          </div>
          
          <div className={styles.guaranteesGrid}>
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className={styles.guaranteeCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.guaranteeIcon}>
                  {guarantee.icon}
                </div>
                <div className={styles.guaranteeContent}>
                  <div className={styles.guaranteeCount}>{guarantee.count}</div>
                  <div className={styles.guaranteeText}>{guarantee.text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.processDiagram}>
            <div className={styles.diagramLine}></div>
            <div className={styles.diagramPoints}>
              {steps.map((step, index) => (
                <div key={index} className={styles.diagramPoint} style={{ '--position': `${index * 25}%` }}>
                  <div className={styles.pointCircle} style={{ background: step.color }}></div>
                  <div className={styles.pointLabel}>{step.title.split(' ')[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Timeline Overview */}
        <motion.div 
          className={styles.timelineOverview}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.timelineHeader}>
            <h4>Complete Installation Timeline</h4>
            <p>From consultation to completion in just 3-7 days</p>
          </div>
          <div className={styles.timelineVisual}>
            {steps.map((step, index) => (
              <div key={index} className={styles.timelineStep}>
                <div className={styles.timelineDot} style={{ background: step.color }}>
                  {step.number}
                </div>
                <div className={styles.timelineConnector}></div>
                <div className={styles.timelineInfo}>
                  <div className={styles.timelineTitle}>{step.title}</div>
                  <div className={styles.timelineDuration}>{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallationProcess;