/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
    Shield, Camera, Home, Building, Factory, Store,
    Wifi, Cloud, Zap, Smartphone, Clock, Users,
    CheckCircle, ChevronRight, MapPin, Award, Star,
    ThermometerSnowflake, Snowflake, Leaf, Truck,
    Phone, Tv, Lock, Cable, Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('security-assessments');

       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'security-assessments', label: 'Security Assessments', icon: <Search size={20} /> },
        { id: 'cctv', label: 'CCTV Cameras', icon: <Camera size={20} /> },
        { id: 'intercom', label: 'Intercom & Entry Systems', icon: <Phone size={20} /> },
        { id: 'cabling', label: 'Structured Cabling', icon: <Cable size={20} /> },
        { id: 'tv-mounting', label: 'TV Mounting', icon: <Tv size={20} /> },
        { id: 'smart-home', label: 'Smart Home & Security', icon: <Home size={20} /> },
        { id: 'smart-locks', label: 'Smart Doorbell & Locks', icon: <Lock size={20} /> },
        { id: 'home-theatre', label: 'Home Theatre', icon: <Tv size={20} /> },
    ];

    const canadianStandards = [
        'CSA Certified Installations',
        'Canadian Privacy Act Compliant',
        'ULC Monitoring Certified',
        'Weatherproof Installations',
        'Energy Efficient Systems',
        'Bilingual Support Available'
    ];

    const canadianRegions = [
        { name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton'], icon: <Leaf /> },
        { name: 'British Columbia', cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond'], icon: <Snowflake /> },
        { name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'], icon: <ThermometerSnowflake /> },
        { name: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau'], icon: <Truck /> },
    ];

    const securityAssessmentsServices = [
        {
            title: 'Home Security Assessment',
            description: 'Comprehensive evaluation of your home security needs and vulnerabilities',
            features: [
                'On-site security risk analysis',
                'Customized security plan development',
                'Entry point vulnerability assessment',
                'Canadian compliance review',
                'Written report with recommendations'
            ],
            price: 'From $199',
            badge: 'Essential',
            icon: <Shield size={24} />
        },
        {
            title: 'Business Security Audit',
            description: 'Professional security audit for commercial properties',
            features: [
                'Complete facility security review',
                'Employee safety assessment',
                'Asset protection evaluation',
                'Emergency response planning',
                'Regulatory compliance check'
            ],
            price: 'From $499',
            badge: 'Professional',
            icon: <Building size={24} />
        }
    ];

    const cctvServices = [
        {
            title: 'Residential CCTV Installation',
            description: 'Professional CCTV camera installation for Canadian homes',
            features: [
                '4K Ultra HD CCTV cameras',
                'Night vision & motion detection',
                'Remote viewing via mobile app',
                'Canadian weatherproof installation',
                'Professional wiring & setup'
            ],
            price: 'From $399 setup',
            badge: 'Most Popular',
            icon: <Home size={24} />
        },
        {
            title: 'Commercial CCTV Systems',
            description: 'Professional CCTV surveillance for businesses',
            features: [
                'High-resolution commercial cameras',
                'Multiple monitor setup',
                'Backup power system installation',
                'POS system integration',
                '24/7 monitoring available'
            ],
            price: 'From $1,499 setup',
            badge: 'Business Grade',
            icon: <Building size={24} />
        },
        {
            title: 'Wireless CCTV Solutions',
            description: 'Easy-to-install wireless CCTV for quick security',
            features: [
                'Wi-Fi enabled CCTV cameras',
                'No wiring required',
                'Battery-powered options',
                'Smart home integration',
                'Cloud storage setup'
            ],
            price: 'From $299 setup',
            badge: 'Wireless',
            icon: <Wifi size={24} />
        }
    ];

    const intercomServices = [
        {
            title: 'Video Intercom Systems',
            description: 'Advanced video intercom systems for secure entry',
            features: [
                'HD video calling to smartphones',
                'Remote door unlocking',
                'Multiple unit support',
                'Night vision capability',
                'Weather-resistant installation'
            ],
            price: 'From $699 installed',
            badge: 'Smart Entry',
            icon: <Phone size={24} />
        },
        {
            title: 'Telephone Entry Systems',
            description: 'Professional telephone entry systems for apartments',
            features: [
                'Multi-tenant directory',
                'Smartphone integration',
                'Visitor management',
                'Delivery management features',
                '24/7 monitoring support'
            ],
            price: 'From $899 installed',
            badge: 'Multi-Unit',
            icon: <Users size={24} />
        }
    ];

    const cablingServices = [
        {
            title: 'Network Cabling Installation',
            description: 'Professional structured cabling for homes and businesses',
            features: [
                'CAT6/CAT6A cable installation',
                'Network rack installation',
                'Wall plate terminations',
                'Cable management',
                'Testing & certification'
            ],
            price: 'From $499 setup',
            badge: 'Professional',
            icon: <Cable size={24} />
        },
        {
            title: 'Data Center Cabling',
            description: 'Enterprise-grade cabling solutions',
            features: [
                'Fiber optic installation',
                'Server room organization',
                'Cable labeling system',
                'Future-proof design',
                'Comprehensive documentation'
            ],
            price: 'Custom Quote',
            badge: 'Enterprise',
            icon: <Zap size={24} />
        }
    ];

    const tvMountingServices = [
        {
            title: 'TV Wall Mounting',
            description: 'Professional TV mounting services',
            features: [
                'TV size up to 85"',
                'Stud finding & secure mounting',
                'Cable management system',
                'Leveling & alignment',
                'Furniture assembly if needed'
            ],
            price: 'From $149',
            badge: 'Basic',
            icon: <Tv size={24} />
        },
        {
            title: 'Premium TV Installation',
            description: 'Complete home entertainment setup',
            features: [
                'Full motion mounts',
                'Soundbar mounting',
                'Gaming console setup',
                'Cable concealment',
                'Smart home integration'
            ],
            price: 'From $249',
            badge: 'Premium',
            icon: <Tv size={24} />
        }
    ];

    const smartHomeServices = [
        {
            title: 'Smart Home Automation',
            description: 'Complete smart home system integration',
            features: [
                'Lighting control systems',
                'Thermostat automation',
                'Smart plug installation',
                'Voice control setup',
                'Scene programming'
            ],
            price: 'From $799',
            badge: 'Complete',
            icon: <Home size={24} />
        },
        {
            title: 'Home Security Systems',
            description: 'Integrated smart home security',
            features: [
                'Motion sensors installation',
                'Door/window sensors',
                'Glass break detectors',
                'Siren installation',
                'Professional monitoring'
            ],
            price: 'From $599',
            badge: 'Security',
            icon: <Shield size={24} />
        }
    ];

    const smartLockServices = [
        {
            title: 'Smart Doorbell Installation',
            description: 'Professional smart doorbell setup',
            features: [
                'Video doorbell installation',
                'Chime integration',
                'Mobile app setup',
                'Wi-Fi configuration',
                'Visitor management'
            ],
            price: 'From $199 installed',
            badge: 'Popular',
            icon: <Phone size={24} />
        },
        {
            title: 'Smart Lock Installation',
            description: 'Keyless entry system installation',
            features: [
                'Smart lock installation',
                'Keypad programming',
                'Mobile access setup',
                'Guest access management',
                'Battery monitoring'
            ],
            price: 'From $249 installed',
            badge: 'Keyless',
            icon: <Lock size={24} />
        }
    ];

    const homeTheatreServices = [
        {
            title: 'Home Theatre Setup',
            description: 'Complete home theatre installation',
            features: [
                'Surround sound system setup',
                'Projector installation',
                'Screen mounting',
                'Receiver configuration',
                'Streaming device setup'
            ],
            price: 'From $899',
            badge: 'Premium',
            icon: <Tv size={24} />
        },
        {
            title: 'Media Room Design',
            description: 'Custom media room design & installation',
            features: [
                'Acoustic treatment',
                'Lighting control',
                'Seating arrangement',
                'Equipment rack setup',
                'Calibration services'
            ],
            price: 'Custom Quote',
            badge: 'Luxury',
            icon: <Home size={24} />
        }
    ];

    const serviceFeatures = [
        {
            icon: <Search size={24} />,
            title: 'Security Assessments',
            description: 'Professional evaluation of security needs and risks'
        },
        {
            icon: <Camera size={24} />,
            title: 'CCTV Installation',
            description: 'High-quality camera systems with professional setup'
        },
        {
            icon: <Phone size={24} />,
            title: 'Intercom Systems',
            description: 'Secure entry systems with video capabilities'
        },
        {
            icon: <Cable size={24} />,
            title: 'Structured Cabling',
            description: 'Professional network and audio/video wiring'
        },
        {
            icon: <Tv size={24} />,
            title: 'TV Mounting',
            description: 'Secure and professional TV installation'
        },
        {
            icon: <Home size={24} />,
            title: 'Smart Home',
            description: 'Complete home automation and security systems'
        },
        {
            icon: <Lock size={24} />,
            title: 'Smart Locks',
            description: 'Keyless entry and smart doorbell installation'
        },
        {
            icon: <Tv size={24} />,
            title: 'Home Theatre',
            description: 'Premium entertainment system installation'
        }
    ];

    const canadianBenefits = [
        'All services compliant with Canadian regulations',
        'Weather-resistant installations for Canadian climate',
        'Local technicians in all major Canadian cities',
        'Bilingual support available nationwide',
        'Canadian-made components where possible',
        'Flexible maintenance and service plans'
    ];

    const getActiveServices = () => {
        switch (activeCategory) {
            case 'security-assessments': return securityAssessmentsServices;
            case 'cctv': return cctvServices;
            case 'intercom': return intercomServices;
            case 'cabling': return cablingServices;
            case 'tv-mounting': return tvMountingServices;
            case 'smart-home': return smartHomeServices;
            case 'smart-locks': return smartLockServices;
            case 'home-theatre': return homeTheatreServices;
            default: return securityAssessmentsServices;
        }
    };

    const scrollToQuote = () => {
        document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.servicesPage}>
            {/* Hero Section */}
            <section className={styles.servicesHero}>
                <div className={styles.heroBackground}>
                    <div className={styles.canadaPattern}></div>
                    <div className={styles.mapOverlay}></div>
                </div>

                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Shield size={18} />
                        <span>TRUSTED ACROSS CANADA</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className={styles.gradientText}>Complete Security & Tech Solutions</span>
                        <br />
                    </motion.h1>

                    <motion.p
                        className={styles.heroDescription}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Professional security assessments, CCTV installation, smart home integration, and more.
                        Serving homes and businesses across Canada with reliable, certified solutions.
                    </motion.p>

                    <motion.div
                        className={styles.heroStats}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>15,000+</div>
                            <div className={styles.statLabel}>Properties Secured</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>8</div>
                            <div className={styles.statLabel}>Comprehensive Services</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Customer Satisfaction</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Navigation */}
            <section className={styles.categoriesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Comprehensive Services</h2>
                    <p className={styles.sectionSubtitle}>
                        Choose from our range of professional security and technology services
                    </p>

                    <div className={styles.categoriesGrid}>
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={styles.categoryIcon}>{category.icon}</div>
                                <span className={styles.categoryLabel}>{category.label}</span>
                                {activeCategory === category.id && (
                                    <motion.div
                                        className={styles.activeIndicator}
                                        layoutId="activeIndicator"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesGridSection}>
                <div className={styles.container}>
                    <div className={styles.servicesHeader}>
                        <h3 className={styles.servicesTitle}>
                            {activeCategory === 'security-assessments' ? 'Security Assessments' :
                                activeCategory === 'cctv' ? 'CCTV Camera Systems' :
                                activeCategory === 'intercom' ? 'Intercom & Entry Systems' :
                                activeCategory === 'cabling' ? 'Structured Cabling Solutions' :
                                activeCategory === 'tv-mounting' ? 'TV Mounting Services' :
                                activeCategory === 'smart-home' ? 'Smart Home & Security Systems' :
                                activeCategory === 'smart-locks' ? 'Smart Doorbell & Lock Installation' :
                                'Home Theatre Installation'}
                            <span className={styles.canadaFlag}> 🇨🇦</span>
                        </h3>
                        <p className={styles.servicesSubtitle}>
                            Professional installation and setup services across Canada
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {getActiveServices().map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.serviceIcon}>{service.icon}</div>
                                    {service.badge && (
                                        <span className={styles.serviceBadge}>{service.badge}</span>
                                    )}
                                </div>

                                <h4 className={styles.serviceName}>{service.title}</h4>
                                <p className={styles.serviceDescription}>{service.description}</p>

                                <div className={styles.serviceFeatures}>
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className={styles.featureItem}>
                                            <CheckCircle size={16} className={styles.checkIcon} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.priceTag}>{service.price}</div>
                                    <motion.button
                                        className={styles.detailsButton}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={scrollToQuote}
                                    >
                                        <span>Get Quote</span>
                                        <ChevronRight size={18} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Canadian Standards & Features */}
            <section className={styles.standardsSection}>
                <div className={styles.container}>
                    <div className={styles.standardsContent}>
                        <div className={styles.standardsInfo}>
                            <h2 className={styles.sectionTitle}>
                                Built for <span className={styles.canadaText}>Canadian</span> Excellence
                            </h2>
                            <p className={styles.standardsDescription}>
                                Our services are specifically designed and certified
                                to meet and exceed Canadian standards and regulations.
                            </p>

                            <div className={styles.benefitsList}>
                                {canadianBenefits.map((benefit, index) => (
                                    <div key={index} className={styles.benefitItem}>
                                        <Star size={16} className={styles.starIcon} />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.standardsVisual}>
                            <div className={styles.certificationsGrid}>
                                {canadianStandards.map((standard, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.certificationBadge}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Shield size={20} className={styles.certIcon} />
                                        <span>{standard}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Service Features */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.featuresTitle}>Our Complete Service Portfolio</h3>
                        <div className={styles.featuresGrid}>
                            {serviceFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={styles.featureIcon}>{feature.icon}</div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Canadian Coverage */}
            <section className={styles.coverageSection}>
                <div className={styles.container}>
                    <div className={styles.coverageHeader}>
                        <h2 className={styles.sectionTitle}>Serving All of Canada</h2>
                        <p className={styles.coverageSubtitle}>
                            Professional security and tech services available nationwide
                        </p>
                    </div>

                    <div className={styles.regionsGrid}>
                        {canadianRegions.map((region, index) => (
                            <motion.div
                                key={index}
                                className={styles.regionCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={styles.regionHeader}>
                                    <div className={styles.regionIcon}>{region.icon}</div>
                                    <h3 className={styles.regionName}>{region.name}</h3>
                                </div>
                                <div className={styles.citiesList}>
                                    {region.cities.map((city, idx) => (
                                        <div key={idx} className={styles.cityItem}>
                                            <MapPin size={14} />
                                            <span>{city}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className={styles.regionButton}>
                                    <span>Services in {region.name}</span>
                                    <ChevronRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.coverageNote}>
                        <p>
                            <strong>Note:</strong> All our services comply with provincial regulations
                            and include local technical support in each region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section id="quote-form" className={styles.quoteSection}>
                <div className={styles.container}>
                    <div className={styles.quoteContent}>
                        <div className={styles.quoteInfo}>
                            <h2 className={styles.quoteTitle}>Get Your Free Canadian Security Assessment</h2>
                            <p className={styles.quoteDescription}>
                                Receive a personalized security plan and quote for your Canadian property.
                                Our experts will assess your needs and recommend the best solution.
                            </p>

                            <div className={styles.quoteFeatures}>
                                <div className={styles.quoteFeature}>
                                    <CheckCircle size={20} />
                                    <div>
                                        <h4>Free Assessment</h4>
                                        <p>Professional evaluation of your needs</p>
                                    </div>
                                </div>
                                <div className={styles.quoteFeature}>
                                    <CheckCircle size={20} />
                                    <div>
                                        <h4>No-Obligation Quote</h4>
                                        <p>Transparent pricing in Canadian Dollars</p>
                                    </div>
                                </div>
                                <div className={styles.quoteFeature}>
                                    <CheckCircle size={20} />
                                    <div>
                                        <h4>Canadian Compliance</h4>
                                        <p>All solutions meet Canadian regulations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.quoteForm}>
                            <div className={styles.formHeader}>
                                <h3>Request Your Quote</h3>
                                <p>Fill out the form below for a free consultation</p>
                            </div>

                            <form className={styles.contactForm}>
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Full Name *" required />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <input type="email" placeholder="Email *" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input type="tel" placeholder="Phone Number *" required />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <select required>
                                        <option value="">Select Province *</option>
                                        <option value="ON">Ontario</option>
                                        <option value="BC">British Columbia</option>
                                        <option value="QC">Quebec</option>
                                        <option value="AB">Alberta</option>
                                        <option value="MB">Manitoba</option>
                                        <option value="SK">Saskatchewan</option>
                                        <option value="NS">Nova Scotia</option>
                                        <option value="NB">New Brunswick</option>
                                        <option value="NL">Newfoundland and Labrador</option>
                                        <option value="PE">Prince Edward Island</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <select required>
                                        <option value="">Service Type *</option>
                                        <option value="security-assessments">Security Assessments</option>
                                        <option value="cctv">CCTV Cameras</option>
                                        <option value="intercom">Intercom & Entry Systems</option>
                                        <option value="cabling">Structured Cabling</option>
                                        <option value="tv-mounting">TV Mounting</option>
                                        <option value="smart-home">Smart Home Systems</option>
                                        <option value="smart-locks">Smart Doorbell & Locks</option>
                                        <option value="home-theatre">Home Theatre</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <textarea
                                        placeholder="Tell us about your security or tech needs..."
                                        rows="4"
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className={styles.submitButton}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Get Free Canadian Security Assessment</span>
                                    <ChevronRight size={20} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;