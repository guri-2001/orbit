/* eslint-disable no-unused-vars */
import React from 'react';
import { Camera, Shield, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, Zap, Wifi, Cloud, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Support Center', path: '/support' },
  ];

  const services = [
    { name: '24/7 Monitoring', icon: <Clock size={16} />, color: '#3B82F6' },
    { name: 'Cloud Storage', icon: <Cloud size={16} />, color: '#8B5CF6' },
    { name: 'Mobile Access', icon: <Smartphone size={16} />, color: '#10B981' },
    { name: 'AI Analytics', icon: <Zap size={16} />, color: '#F59E0B' },
    { name: 'Remote Viewing', icon: <Wifi size={16} />, color: '#06B6D4' },
    { name: 'Maintenance', icon: <Shield size={16} />, color: '#EF4444' },
  ];

  const contactInfo = [
    { icon: <Phone size={18} />, text: 'Emergency: 1-800-SECURE', type: 'emergency' },
    { icon: <Phone size={18} />, text: 'Sales: (555) 123-4567', type: 'sales' },
    // { icon: <Mail size={18} />, text: 'support@securevision.com', type: 'email' },
    { icon: <MapPin size={18} />, text: '123 Security Plaza, Suite 100', type: 'address' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: '#', color: '#0A66C2' },
    { icon: <Youtube size={20} />, name: 'YouTube', url: '#', color: '#FF0000' },
  ];

  const certifications = [
    'ISO 27001 Certified',
    'UL Listed',
    'NDAA Compliant',
    'GDPR Compliant',
    'Privacy Shield',
  ];

  return (
    <footer className={styles.securityFooter}>
      {/* Top Wave Pattern - Light Version */}
      <div className={styles.footerWave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <motion.div 
              className={styles.brandContainer}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.securityBrand}>
                <div className={styles.footerLogo}>
                  <div className={styles.logoGlow}></div>
                  <Camera size={32} className={styles.logoIcon} />
                  <div className={styles.cameraLens}></div>
                  <div className={styles.recordingDot}></div>
                </div>
                <div className={styles.brandText}>
                  <h3 className={styles.brandName}>OrbitTech</h3>
                  {/* <p className={styles.brandTagline}>Advanced Security Solutions</p> */}
                </div>
              </div>
              
              <p className={styles.brandDescription}>
                Professional CCTV installation and 24/7 monitoring services 
                for homes and businesses. Your safety is our priority.
              </p>
              
              {/* Emergency Badge */}
              {/* <motion.div 
                className={styles.emergencyBadge}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.emergencyIcon}>
                  <Shield size={20} />
                  <div className={styles.pulseRing}></div>
                </div>
                <div className={styles.emergencyText}>
                  <span className={styles.emergencyLabel}>24/7 EMERGENCY</span>
                  <span className={styles.emergencyNumber}>1-800-SECURE</span>
                </div>
              </motion.div> */}

              {/* Live Status Indicator */}
              {/* <div className={styles.liveStatus}>
                <div className={styles.statusIndicator}>
                  <div className={styles.statusDot}></div>
                  <span>SYSTEM ONLINE</span>
                </div>
                <div className={styles.statusStats}>
                  <div className={styles.statItem}>
                    <span>Uptime</span>
                    <span className={styles.statValue}>99.98%</span>
                  </div>
                  <div className={styles.statItem}>
                    <span>Response</span>
                    <span className={styles.statValue}>≤ 30s</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>
              <span className={styles.titleIcon}>🔗</span>
              Quick Links
            </h4>
            <ul className={styles.securityLinks}>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  className={styles.linkItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Link to={link.path} className={styles.linkAnchor}>
                    <ChevronRight size={14} className={styles.linkArrow} />
                    <span className={styles.linkText}>{link.name}</span>
                    <span className={styles.linkHover}></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Security Tips */}
            {/* <div className={styles.securityTips}>
              <h5 className={styles.tipsTitle}>Security Tip</h5>
              <p className={styles.tipsText}>
                Always position cameras at entry points and blind spots for maximum coverage.
              </p>
            </div> */}
          </div>

          {/* Services Column */}
          <div className={styles.servicesColumn}>
            <h4 className={styles.columnTitle}>
              <span className={styles.titleIcon}>🛡️</span>
              Our Services
            </h4>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className={styles.serviceChip}
                  style={{ '--chip-color': service.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.chipIcon} style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <span className={styles.chipText}>{service.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Newsletter Subscription */}
            {/* <div className={styles.newsletterBox}>
              <h5 className={styles.newsletterTitle}>Security Updates</h5>
              <p className={styles.newsletterText}>Get latest security tips & offers</p>
              <div className={styles.subscribeForm}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={styles.emailInput}
                />
                <motion.button 
                  className={styles.subscribeBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap size={18} />
                </motion.button>
              </div>
            </div> */}
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>
              <span className={styles.titleIcon}>📞</span>
              Contact Info
            </h4>
            <div className={styles.contactList}>
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index} 
                  className={`${styles.contactItem} ${styles[contact.type]}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.contactIcon}>{contact.icon}</div>
                  <span className={styles.contactText}>{contact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Operating Hours */}
            {/* <div className={styles.hoursBox}>
              <div className={styles.hoursHeader}>
                <Clock size={18} />
                <span>Operating Hours</span>
              </div>
              <div className={styles.hoursGrid}>
                <div className={styles.hourSlot}>
                  <span>Monitoring</span>
                  <span className={styles.hourValue}>24/7</span>
                </div>
                <div className={styles.hourSlot}>
                  <span>Support</span>
                  <span className={styles.hourValue}>8AM-10PM</span>
                </div>
                <div className={styles.hourSlot}>
                  <span>Emergency</span>
                  <span className={styles.hourValue}>24/7</span>
                </div>
              </div>
            </div> */}

            {/* Map Link */}
            {/* <motion.a 
              href="#" 
              className={styles.mapLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={16} />
              <span>View Office Location</span>
            </motion.a> */}
          </div>
        </div>

        {/* Certifications Bar */}
        {/* <div className={styles.certificationsBar}>
          <h5 className={styles.certTitle}>Certified & Compliant</h5>
          <div className={styles.certBadges}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certBadge}>
                <Shield size={14} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Social & Legal Bar */}
        <div className={styles.footerBottom}>
          {/* Social Links */}
          <div className={styles.socialBar}>
            <span className={styles.socialLabel}>Follow Our Security Updates</span>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={styles.socialIcon}
                  style={{ '--social-color': social.color }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className={styles.socialTooltip}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className={styles.legalBar}>
            <p className={styles.copyrightText}>
              © {currentYear} OrbitTech. All rights reserved.
            </p>
            {/* <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <span className={styles.linkDivider}>•</span>
              <a href="/terms" className={styles.legalLink}>Terms of Service</a>
              <span className={styles.linkDivider}>•</span>
              <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
              <span className={styles.linkDivider}>•</span>
              <a href="/sitemap" className={styles.legalLink}>Sitemap</a>
            </div> */}
          </div>

          {/* Security Badges */}
          <div className={styles.securityBadges}>
            <div className={styles.securityStamp}>
              <div className={styles.stampIcon}>
                <LockIcon />
              </div>
              <span>SSL Encrypted</span>
            </div>
            <div className={styles.securityStamp}>
              <div className={styles.stampIcon}>
                <VerifiedIcon />
              </div>
              <span>Verified Secure</span>
            </div>
          </div>
        </div>

        {/* Scanning Animation */}
        <div className={styles.footerScan}>
          <div className={styles.scanBeam}></div>
        </div>
      </div>
    </footer>
  );
};

// Custom Icons
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="#10B981" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#10B981" strokeWidth="2" />
  </svg>
);

const VerifiedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 12l2 2 4-4" stroke="#3B82F6" strokeWidth="2" />
    <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" fill="none" />
  </svg>
);

export default Footer;