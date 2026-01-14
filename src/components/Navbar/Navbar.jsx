/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Camera, Shield, Menu, X, ChevronRight, Home, Video, Users, Phone, Settings, AlertTriangle, Zap } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', path: '/', label: 'Home', icon: <Home size={18} />, color: '#3B82F6' },
        { id: 'services', path: '/services', label: 'Services', icon: <Settings size={18} />, color: '#10B981' },
        { id: 'products', path: '/products', label: 'Products', icon: <Camera size={18} />, color: '#8B5CF6' },
        { id: 'about', path: '/about', label: 'About Us', icon: <Users size={18} />, color: '#EF4444' },
        { id: 'contact', path: '/contact', label: 'Contact', icon: <Phone size={18} />, color: '#06B6D4' },
    ];

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sidebarVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.07,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    {/* Logo with CCTV Theme */}
                    <motion.div
                        className={styles.logo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* <div className={styles.logoIcon}>
                            <div className={styles.cameraIcon}>
                                <Camera size={28} />
                                <div className={styles.cameraLens}></div>
                            </div>
                            <div className={styles.recordingDot}></div>
                        </div> */}
                        <div className={styles.logoText}>
                            <img
                                src="/images/logo.png"
                                alt="OrbitTech CCTV Control Panel"
                                className={styles.logoImage}
                            />
                            {/* <span className={styles.logoMain}>OrbitTech</span> */}
                            {/* <span className={styles.logoSub}>CCTV Solutions</span> */}
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <div className={styles.navLinks}>
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`${styles.navLink} ${activeLink === item.path ? styles.active : ''}`}
                                    >
                                        <span className={styles.linkIcon} style={{ color: item.color }}>
                                            {item.icon}
                                        </span>
                                        <span className={styles.linkText}>{item.label}</span>
                                        <motion.span
                                            className={styles.linkIndicator}
                                            style={{ backgroundColor: item.color }}
                                            initial={false}
                                            animate={{ width: activeLink === item.path ? '100%' : '0%' }}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className={styles.navActions}>
                        {/* Emergency Contact */}
                        <motion.div
                            className={styles.emergencyContact}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Shield size={16} />
                            <span>Emergency: +1 (437) 351-1000</span>
                        </motion.div>

                        {/* Free Quote Button */}
                        {/* <motion.button 
              className={styles.quoteBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('contact')}
            >
              <span>Free Quote</span>
              <ChevronRight size={18} />
            </motion.button> */}

                        {/* Mobile Menu Button */}
                        <motion.button
                            className={styles.menuBtn}
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Scanning Line Animation */}
                <motion.div
                    className={styles.scanLine}
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </nav>

            {/* Right Sidebar Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Security Camera Grid Backdrop */}
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        >
                            <div className={styles.cameraGrid}>
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className={styles.cameraCell}>
                                        <div className={styles.gridCamera}></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CCTV Themed Sidebar */}
                        <motion.div
                            className={styles.sidebar}
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {/* Sidebar Header */}
                            <div className={styles.sidebarHeader}>
                                <div className={styles.sidebarLogo}>
                                    <div className={styles.sidebarCamera}>
                                        <Camera size={24} />
                                        <div className={styles.sidebarLens}></div>
                                    </div>
                                    <div>
                                        <div className={styles.sidebarLogoMain}>SecureVision</div>
                                        <div className={styles.sidebarLogoSub}>CCTV Control Panel</div>
                                    </div>
                                </div>
                                {/* <div className={styles.sidebarStatus}>
                                    <div className={styles.statusIndicator}>
                                        <div className={styles.statusDot}></div>
                                        <span>System Online</span>
                                    </div>
                                </div> */}
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X size={24} className={styles.closeBtnIcon} />
                                </button>
                            </div>

                            {/* Sidebar Navigation - CCTV Style */}
                            <div className={styles.sidebarNav}>
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`${styles.sidebarLink} ${activeLink === item.path ? styles.active : ''}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className={styles.sidebarLinkInner}>
                                                <motion.div
                                                    className={styles.sidebarLinkIcon}
                                                    style={{ backgroundColor: `${item.color}20` }}
                                                    whileHover={{ rotate: 15 }}
                                                >
                                                    <div style={{ color: item.color }}>
                                                        {item.icon}
                                                    </div>
                                                </motion.div>
                                                <div className={styles.sidebarLinkContent}>
                                                    <span className={styles.sidebarLinkText}>{item.label}</span>
                                                    <span className={styles.sidebarLinkDesc}>
                                                        {index === 2 ? 'Latest CCTV Systems' :
                                                            index === 3 ? 'Live Monitoring' : 'Learn more'}
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronRight size={16} className={styles.sidebarLinkArrow} />
                                            {activeLink === item.path && (
                                                <motion.div
                                                    className={styles.sidebarActiveIndicator}
                                                    style={{ backgroundColor: item.color }}
                                                    layoutId="sidebarActive"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Sidebar Footer - Quick Actions */}
                            <motion.div
                                className={styles.sidebarFooter}
                                variants={itemVariants}
                            >
                                <div className={styles.quickActions}>
                                    {/* <button className={styles.quickBtn}>
                    <Video size={18} />
                    <span>View Live Feed</span>
                  </button> */}
                                    {/* <button className={styles.quickBtn}>
                    <AlertTriangle size={18} />
                    <span>Emergency</span>
                  </button> */}
                                </div>
                                <div className={styles.sidebarContact}>
                                    <div className={styles.contactItem}>
                                        <Zap size={16} />
                                        <span>24/7 Support: 1-800-SECURE</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <Shield size={16} />
                                        <span>Certified Security Experts</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;