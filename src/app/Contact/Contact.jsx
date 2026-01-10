/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
    Phone, Mail, MapPin, Clock, Shield, Camera,
    Send, CheckCircle, AlertCircle, User, Building,
    Globe, Wifi, Cloud, Smartphone, Zap, Video
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        province: '',
        serviceType: '',
        message: '',
        consent: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const canadianProvinces = [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Northwest Territories',
        'Nunavut',
        'Yukon'
    ];

    const serviceTypes = [
        'Residential Security Systems',
        'Business CCTV Installation',
        '24/7 Monitoring Service',
        'Smart Home Integration',
        'Video Doorbell Installation',
        'Commercial Access Control',
        'Industrial Surveillance',
        'System Maintenance & Support',
        'Free Security Consultation',
        'Emergency Service Call'
    ];

    const contactOffices = [
        {
            city: 'Toronto, ON',
            address: '123 Security Drive, Suite 400, Toronto, ON M5H 2N9',
            phone: '+1 (416) 555-1234',
            email: 'toronto@securevision.ca',
            //   hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
            //   coverage: 'GTA, Durham, Peel, York Regions'
        },
        // {
        //   city: 'Vancouver, BC',
        //   address: '888 Marine Way, Unit 250, Vancouver, BC V6P 6S9',
        //   phone: '+1 (604) 555-5678',
        //   email: 'vancouver@securevision.ca',
        //   hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
        //   coverage: 'Lower Mainland, Fraser Valley'
        // },
        // {
        //   city: 'Montreal, QC',
        //   address: '1000 de la Gauchetière, Bureau 2400, Montréal, QC H3B 4W5',
        //   phone: '+1 (514) 555-9012',
        //   email: 'montreal@securevision.ca',
        //   hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
        //   coverage: 'Greater Montreal, Laval, South Shore'
        // },
        // {
        //   city: 'Calgary, AB',
        //   address: '500 Centre St S, Suite 1800, Calgary, AB T2G 5A6',
        //   phone: '+1 (403) 555-3456',
        //   email: 'calgary@securevision.ca',
        //   hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
        //   coverage: 'Calgary, Edmonton, Southern Alberta'
        // }
    ];

    // const canadianCertifications = [
    //     { name: 'CSA Certified', description: 'Canadian Standards Association approved' },
    //     { name: 'ULC Listed', description: 'Underwriters Laboratories of Canada certified' },
    //     { name: 'Privacy Compliance', description: 'PIPEDA & Provincial Privacy Laws' },
    //     { name: 'Licensed Installers', description: 'Provincially licensed technicians' },
    //     { name: 'Insured & Bonded', description: 'Full liability coverage across Canada' },
    //     { name: 'RCMP Vetted', description: 'Security cleared personnel' }
    // ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                province: '',
                serviceType: '',
                message: '',
                consent: false
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 2000);
    };

    return (
        <section id="contact" className={styles.contactSection}>
            {/* Background Pattern */}
            <div className={styles.canadaPattern}>
                <div className={styles.mapOutline}></div>
                <div className={styles.provinceGrid}></div>
            </div>

            <div className={styles.contactContainer}>
                {/* Header */}
                <motion.div
                    className={styles.contactHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.headerBadge}>
                        <Shield size={20} />
                        <span>SERVING ALL OF CANADA</span>
                    </div>
                    <h1 className={styles.contactTitle}>
                        Canadian Security Solutions
                        <br />
                        <span className={styles.titleHighlight}>Contact Our Team</span>
                    </h1>
                    <p className={styles.contactSubtitle}>
                        Get professional CCTV installation and security consultation across all Canadian provinces.
                        Licensed, insured, and compliant with Canadian privacy laws.
                    </p>
                </motion.div>

                <div className={styles.contactGrid}>
                    {/* Left Column - Contact Form */}
                    <motion.div
                        className={styles.formColumn}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.formCard}>
                            <div className={styles.formHeader}>
                                <div className={styles.formIcon}>
                                    <Camera size={24} />
                                    <div className={styles.formGlow}></div>
                                </div>
                                <div className={styles.formTitle}>
                                    <h3>Request Free Security Assessment</h3>
                                    <p>Get a customized quote for your Canadian property</p>
                                </div>
                            </div>

                            {submitSuccess ? (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                >
                                    <CheckCircle size={48} />
                                    <h4>Thank You!</h4>
                                    <p>Your security assessment request has been received.
                                        A certified Canadian security consultant will contact you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.contactForm}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>
                                                <User size={16} />
                                                <span>Full Name *</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={styles.formInput}
                                                placeholder="John Smith"
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>
                                                <Mail size={16} />
                                                <span>Email Address *</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={styles.formInput}
                                                placeholder="john@example.ca"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>
                                                <Phone size={16} />
                                                <span>Phone Number *</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={styles.formInput}
                                                placeholder="+1 (123) 456-7890"
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>
                                                <MapPin size={16} />
                                                <span>Province/Territory *</span>
                                            </label>
                                            <select
                                                name="province"
                                                value={formData.province}
                                                onChange={handleChange}
                                                className={styles.formSelect}
                                                required
                                            >
                                                <option value="">Select your province</option>
                                                {canadianProvinces.map(province => (
                                                    <option key={province} value={province}>{province}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>
                                            <Building size={16} />
                                            <span>Service Required *</span>
                                        </label>
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            className={styles.formSelect}
                                            required
                                        >
                                            <option value="">Select service type</option>
                                            {serviceTypes.map(service => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>
                                            <AlertCircle size={16} />
                                            <span>Security Concerns & Requirements</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.formTextarea}
                                            placeholder="Tell us about your security needs, property details, and any specific concerns..."
                                            rows="4"
                                        />
                                    </div>

                                    <div className={styles.consentGroup}>
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            id="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            className={styles.consentCheckbox}
                                            required
                                        />
                                        <label htmlFor="consent" className={styles.consentLabel}>
                                            I agree to receive security consultation and quotes from SecureVision Canada.
                                            We respect your privacy under Canadian privacy laws.
                                        </label>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className={styles.spinner}></div>
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                <span>Submit Security Request</span>
                                            </>
                                        )}
                                    </motion.button>

                                    <p className={styles.formNote}>
                                        <Shield size={14} />
                                        All information is protected under Canadian privacy laws (PIPEDA).
                                        No obligation, free assessment.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Canadian Certifications */}
                        {/* <div className={styles.certifications}>
                            <h4 className={styles.certificationsTitle}>
                                <Shield size={20} />
                                <span>Canadian Certifications & Compliance</span>
                            </h4>
                            <div className={styles.certificationsGrid}>
                                {canadianCertifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.certificationCard}
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className={styles.certIcon}>
                                            <CheckCircle size={20} />
                                        </div>
                                        <div className={styles.certText}>
                                            <div className={styles.certName}>{cert.name}</div>
                                            <div className={styles.certDesc}>{cert.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Emergency Contact */}
                        {/* <div className={styles.emergencyContact}>
              <div className={styles.emergencyHeader}>
                <AlertCircle size={24} />
                <div>
                  <h3>24/7 Emergency Service</h3>
                  <p>Available across all Canadian provinces</p>
                </div>
              </div>
              <div className={styles.emergencyNumber}>
                <Phone size={28} />
                <div>
                  <div className={styles.emergencyLabel}>CANADA-WIDE EMERGENCY</div>
                  <div className={styles.emergencyPhone}>1-888-SECURE-CA</div>
                  <div className={styles.emergencySub}>(1-888-732-8732)</div>
                </div>
              </div>
              <div className={styles.emergencyHours}>
                <Clock size={16} />
                <span>Available 24/7/365 across all time zones</span>
              </div>
            </div> */}

                        {/* Canadian Offices */}
                        <div className={styles.officesSection}>
                            <h3 className={styles.sectionTitle}>
                                <Building size={20} />
                                <span>Our Canadian Offices</span>
                            </h3>
                            <div className={styles.officesGrid}>
                                {contactOffices.map((office, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.officeCard}
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {/* <div className={styles.officeHeader}>
                      <MapPin size={18} />
                      <h4>{office.city}</h4>
                    </div> */}
                                        <div className={styles.officeInfo}>
                                            <div className={styles.officeItem}>
                                                <span>Address:</span>
                                                <span>{office.address}</span>
                                            </div>
                                            <div className={styles.officeItem}>
                                                <span>Phone:</span>
                                                <span>{office.phone}</span>
                                            </div>
                                            <div className={styles.officeItem}>
                                                <span>Email:</span>
                                                <span>{office.email}</span>
                                            </div>
                                            {/* <div className={styles.officeItem}>
                        <span>Hours:</span>
                        <span>{office.hours}</span>
                      </div>
                      <div className={styles.officeItem}>
                        <span>Coverage:</span>
                        <span>{office.coverage}</span>
                      </div> */}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Canadian Coverage */}
                        {/* <div className={styles.coverageSection}>
              <h3 className={styles.sectionTitle}>
                <Globe size={20} />
                <span>Canadian Coverage Areas</span>
              </h3>
              <div className={styles.coverageMap}>
                <div className={styles.provinceCoverage}>
                  <div className={styles.provinceGroup}>
                    <span className={styles.provinceTitle}>Western Canada</span>
                    <span>British Columbia, Alberta, Saskatchewan, Manitoba</span>
                  </div>
                  <div className={styles.provinceGroup}>
                    <span className={styles.provinceTitle}>Central Canada</span>
                    <span>Ontario, Quebec</span>
                  </div>
                  <div className={styles.provinceGroup}>
                    <span className={styles.provinceTitle}>Atlantic Canada</span>
                    <span>New Brunswick, Nova Scotia, PEI, Newfoundland & Labrador</span>
                  </div>
                  <div className={styles.provinceGroup}>
                    <span className={styles.provinceTitle}>Northern Territories</span>
                    <span>Yukon, Northwest Territories, Nunavut</span>
                  </div>
                </div>
                <div className={styles.coverageStats}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>13</div>
                    <div className={styles.statLabel}>Provinces & Territories</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>50+</div>
                    <div className={styles.statLabel}>Cities Covered</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>Canadian Owned</div>
                  </div>
                </div>
              </div>
            </div> */}

                        {/* Quick Services */}
                        <div className={styles.quickServices}>
                            <h3 className={styles.sectionTitle}>
                                <Zap size={20} />
                                <span>Popular Canadian Services</span>
                            </h3>
                            <div className={styles.servicesList}>
                                {[
                                    { icon: <Camera />, text: 'Residential CCTV for Canadian Homes' },
                                    { icon: <Video />, text: 'Business Security for Canadian Companies' },
                                    { icon: <Wifi />, text: 'Smart Home Integration - Works with -40°C' },
                                    { icon: <Cloud />, text: 'Canadian Cloud Storage - PIPEDA Compliant' },
                                    { icon: <Smartphone />, text: 'Mobile App - Works Across Canada' },
                                    { icon: <Shield />, text: '24/7 Monitoring - Canadian Based' }
                                ].map((service, index) => (
                                    <div key={index} className={styles.serviceItem}>
                                        <div className={styles.serviceIcon}>{service.icon}</div>
                                        <span>{service.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Canadian Benefits Bar */}
                <motion.div
                    className={styles.benefitsBar}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className={styles.benefitItem}>
                        <CheckCircle size={24} />
                        <div>
                            <div className={styles.benefitTitle}>Free Canadian-Wide Assessment</div>
                            <div className={styles.benefitDesc}>No cost security evaluation</div>
                        </div>
                    </div>
                    <div className={styles.benefitItem}>
                        <CheckCircle size={24} />
                        <div>
                            <div className={styles.benefitTitle}>CSA & ULC Certified Equipment</div>
                            <div className={styles.benefitDesc}>Meets Canadian standards</div>
                        </div>
                    </div>
                    <div className={styles.benefitItem}>
                        <CheckCircle size={24} />
                        <div>
                            <div className={styles.benefitTitle}>PIPEDA Privacy Compliant</div>
                            <div className={styles.benefitDesc}>Full Canadian privacy protection</div>
                        </div>
                    </div>
                    <div className={styles.benefitItem}>
                        <CheckCircle size={24} />
                        <div>
                            <div className={styles.benefitTitle}>Canadian Based Monitoring</div>
                            <div className={styles.benefitDesc}>24/7 support from Canadian centers</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;