/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, Home, Lock, Phone, Shield, Cable, Tv, Music, Radio,
  CheckCircle, Clock, Users, DollarSign, Star, ChevronRight,
  Wifi, Video, Bell, Smartphone, Zap, Settings, Cloud
} from 'lucide-react';
// import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const servicesData = {
    'cctv-cameras': {
      id: 1,
      title: 'CCTV Cameras',
      subtitle: 'Analog & IP Camera Systems',
      description: 'Professional CCTV camera installation for complete property monitoring with advanced surveillance technology.',
      longDescription: 'Our professional CCTV camera installation services provide comprehensive security coverage for residential, commercial, and industrial properties. We offer both analog and IP camera systems with the latest technology for maximum security, ensuring 24/7 protection and peace of mind.',
      icon: <Camera size={48} />,
      color: '#3B82F6',
      features: [
        { icon: <Video />, title: 'HD & 4K Resolution', description: 'Crystal clear video quality with high-definition and 4K cameras' },
        { icon: <Wifi />, title: 'Remote Monitoring', description: 'Access your camera feeds from anywhere via smartphone or computer' },
        { icon: <Clock />, title: '24/7 Recording', description: 'Continuous recording with motion-activated alerts' },
        { icon: <Cloud />, title: 'Cloud Storage', description: 'Secure cloud backup for your footage' },
        { icon: <Smartphone />, title: 'Mobile App Access', description: 'Full control and monitoring through our dedicated app' },
        { icon: <Settings />, title: 'Motion Detection', description: 'Smart alerts when unusual activity is detected' }
      ],
      benefits: [
        'Deter crime and prevent unauthorized access',
        'Monitor your property remotely in real-time',
        'Gather evidence in case of incidents',
        'Reduce insurance premiums with verified security',
        'Increase property value with professional security systems',
        'Peace of mind knowing your property is protected'
      ],
      process: [
        'Free Site Survey & Consultation - We assess your property and security needs',
        'Custom System Design - Tailored camera placement and system configuration',
        'Professional Installation - Expert installation by certified technicians',
        'System Configuration & Testing - Complete setup and functionality testing',
        'Training & Handover - We teach you how to use your new system',
        'Ongoing Support & Maintenance - 24/7 technical support available'
      ]
    },
    'smart-home': {
      id: 2,
      title: 'Smart Home Systems',
      subtitle: 'Automation & Security Integration',
      description: 'Modern automation solutions for intelligent home control, security, and energy management.',
      longDescription: 'Transform your home into a smart, secure, and energy-efficient living space with our comprehensive smart home automation solutions. We integrate lighting, climate, security, and entertainment systems for seamless control and enhanced comfort.',
      icon: <Home size={48} />,
      color: '#10B981',
      features: [
        { icon: <Smartphone />, title: 'App Control', description: 'Control all smart devices from a single mobile application' },
        { icon: <Zap />, title: 'Energy Management', description: 'Reduce power consumption with automated schedules and monitoring' },
        { icon: <Lock />, title: 'Smart Security', description: 'Integrated security systems with smart locks and sensors' },
        { icon: <Settings />, title: 'Automation', description: 'Custom scenes and routines for different times and occasions' },
        { icon: <Video />, title: 'Video Integration', description: 'Seamless integration with CCTV and video doorbells' },
        { icon: <Cloud />, title: 'Cloud Backup', description: 'Secure cloud storage for your automation settings and data' }
      ],
      benefits: [
        'Enhanced convenience with voice and app control',
        'Improved energy efficiency and cost savings',
        'Increased home security with integrated systems',
        'Personalized living experience with custom automation',
        'Remote monitoring and control from anywhere',
        'Future-proof technology with regular updates'
      ],
      process: [
        'Needs Assessment - Understanding your lifestyle and requirements',
        'System Design - Creating a customized smart home blueprint',
        'Equipment Selection - Choosing compatible devices and systems',
        'Professional Installation - Expert setup and wiring',
        'Programming & Testing - Configuring automation and testing all features',
        'Training & Support - Comprehensive training and ongoing assistance'
      ]
    },
    'intrusion-alarm': {
      id: 3,
      title: 'Intrusion & Alarm Systems',
      subtitle: '24/7 Security Protection',
      description: 'Advanced intrusion detection and alarm systems to protect your property round the clock.',
      longDescription: 'Our intrusion alarm systems provide comprehensive protection with instant alerts and professional monitoring services. We design systems that detect unauthorized entry and alert you immediately, whether you\'re home or away.',
      icon: <Shield size={48} />,
      color: '#EF4444',
      features: [
        { icon: <Bell />, title: 'Instant Alerts', description: 'Immediate notifications to your phone and monitoring center' },
        { icon: <Users />, title: 'Professional Monitoring', description: '24/7 monitoring by certified security professionals' },
        { icon: <Smartphone />, title: 'Remote Control', description: 'Arm and disarm your system from anywhere' },
        { icon: <Video />, title: 'Video Verification', description: 'Visual confirmation of alerts before taking action' },
        { icon: <Cloud />, title: 'Cloud Backup', description: 'Secure event history and activity logs storage' },
        { icon: <Settings />, title: 'Custom Zones', description: 'Create specific protection zones for different areas' }
      ],
      benefits: [
        '24/7 protection with professional monitoring',
        'Immediate emergency response activation',
        'Deter burglars with visible security systems',
        'Reduce false alarms with advanced detection',
        'Peace of mind knowing professionals are watching',
        'Integration with existing security systems'
      ],
      process: [
        'Security Assessment - Identifying vulnerabilities and entry points',
        'System Design - Planning optimal sensor placement and coverage',
        'Sensor Placement - Strategic installation of detectors and sensors',
        'Professional Installation - Expert setup of control panels and wiring',
        'Testing & Commissioning - Complete system functionality testing',
        'Monitoring Setup - Connecting to 24/7 monitoring services'
      ]
    }
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundService = servicesData[serviceSlug];
      setService(foundService);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 300);
  }, [serviceSlug]);

  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading service details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="back-button">
          <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)` }}>
        <div className="container">
          <div className="service-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="service-hero-badge"
              style={{ backgroundColor: `${service.color}20`, color: service.color }}
            >
              {service.icon}
              <span>PROFESSIONAL SERVICE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="service-title"
            >
              {service.title}
              <span className="service-subtitle">{service.subtitle}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="service-description"
            >
              {service.description}
            </motion.p>
            
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="service-hero-actions"
            >
              <button className="cta-button" style={{ backgroundColor: service.color }}>
                <DollarSign size={20} />
                <span>Get Free Quote</span>
              </button>
              <button className="secondary-button">
                <Clock size={20} />
                <span>Book Consultation</span>
              </button>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Service Overview</h2>
              <p>{service.longDescription}</p>
              
              {/* Benefits Section */}
              <div className="benefits-section">
                <h3>Key Benefits</h3>
                <div className="benefits-list">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <CheckCircle size={20} style={{ color: service.color }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="overview-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Installations</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <div className="image-placeholder" style={{ backgroundColor: `${service.color}15` }}>
                {service.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Everything you need for complete security and peace of mind</p>
          </div>
          
          <div className="features-grid">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>From consultation to installation - a seamless experience</p>
          </div>
          
          <div className="process-timeline">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="step-number" style={{ backgroundColor: service.color }}>
                  {index + 1}
                </div>
                <div className="step-content">
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your Property?</h2>
            <p>Contact us today for a free consultation and customized quote</p>
            <div className="cta-actions">
              <button className="primary-cta" style={{ backgroundColor: service.color }}>
                <span>Get Free Quote</span>
                <ChevronRight size={20} />
              </button>
              <button className="secondary-cta">
                <Phone size={20} />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;