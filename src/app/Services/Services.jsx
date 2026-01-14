/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
    Camera, Home, Lock, Phone, Tv, Cable,
    ChevronRight, Shield, Radio, Music
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Services data exactly as shown in the screenshot
    const services = [
        {
            id: 'cctv',
            title: 'CCTV Cameras (Analog & IP)',
            description: 'Professional security camera installation for complete property monitoring.',
            icon: <Camera size={28} />,
            color: '#3B82F6'
        },
        {
            id: 'smart-home',
            title: 'Smart Home & Security Systems',
            description: 'Modern automation solutions for intelligent home control and security.',
            icon: <Home size={28} />,
            color: '#10B981'
        },
        {
            id: 'smart-locks',
            title: 'Smart Doorbell & Lock Installation',
            description: 'Secure entry systems with remote access and monitoring capabilities.',
            icon: <Lock size={28} />,
            color: '#8B5CF6'
        },
        {
            id: 'intercom',
            title: 'Intercom & Telephone Entry',
            description: 'Communication systems for residential and commercial properties.',
            icon: <Phone size={28} />,
            color: '#F59E0B'
        },
        {
            id: 'intrusion-alarm',
            title: 'Intrusion / Alarm Systems',
            description: 'Advanced security systems to protect your property 24/7.',
            icon: <Shield size={28} />,
            color: '#EF4444'
        },
        {
            id: 'cabling',
            title: 'Structured Cabling',
            description: 'Professional wiring infrastructure for reliable connectivity.',
            icon: <Cable size={28} />,
            color: '#6366F1'
        },
        {
            id: 'tv-mounting',
            title: 'TV Mounting',
            description: 'Expert TV installation with clean cable management.',
            icon: <Tv size={28} />,
            color: '#EC4899'
        },
        {
            id: 'home-theatre',
            title: 'Home Theatre Installation',
            description: 'Complete home cinema setup for the ultimate viewing experience.',
            icon: <Radio size={28} />,
            color: '#14B8A6'
        },
        {
            id: 'audio-video',
            title: 'Audio, Video & Lighting Systems',
            description: 'Integrated multimedia and smart lighting solutions.',
            icon: <Music size={28} />,
            color: '#F97316'
        }
    ];

    const scrollToQuote = () => {
        const quoteForm = document.getElementById('quote-form');
        if (quoteForm) {
            quoteForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    return (
        <div className={styles.servicesPage}>
            {/* Hero Section */}
            <section className={styles.servicesHero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.gradientText}>Our Professional Services</span>
                        </motion.h1>
                        
                        <motion.p
                            className={styles.heroDescription}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Expert installation and setup services for homes and businesses across Canada
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className={styles.servicesDisplay}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    className={styles.serviceCardSimple}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div 
                                        className={styles.serviceIconWrapper}
                                        style={{ backgroundColor: `${service.color}15` }}
                                    >
                                        <div 
                                            className={styles.serviceIcon}
                                            style={{ color: service.color }}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                    
                                    {/* <motion.button
                                        className={styles.serviceButton}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={scrollToQuote}
                                    >
                                        <span>Get Service</span>
                                        <ChevronRight size={18} />
                                    </motion.button> */}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Form Section */}
            <section id="quote-form" className={styles.quoteSection}>
                <div className={styles.container}>
                    <div className={styles.quoteContent}>
                        <div className={styles.quoteInfo}>
                            <motion.h2
                                className={styles.quoteTitle}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Get Your Free Quote
                            </motion.h2>
                            <motion.p
                                className={styles.quoteDescription}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Contact us for professional installation services. Our team will provide you with a detailed quote and schedule your service.
                            </motion.p>
                        </div>

                        <motion.div
                            className={styles.quoteForm}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.formHeader}>
                                <h3>Request Service Quote</h3>
                                <p>Fill out the form and we'll get back to you within 24 hours</p>
                            </div>

                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="Full Name *" 
                                        required 
                                    />
                                </div>
                                
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="email" 
                                            placeholder="Email Address *" 
                                            required 
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="tel" 
                                            placeholder="Phone Number *" 
                                            required 
                                        />
                                    </div>
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <select required>
                                        <option value="">Select Service Type *</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.id}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <textarea
                                        placeholder="Tell us about your specific needs and requirements..."
                                        rows="4"
                                        required
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    className={styles.submitButton}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Submit Quote Request</span>
                                    <ChevronRight size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;