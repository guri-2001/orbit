/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Shield, Camera, Users, Award, MapPin, Clock, Zap, Cloud, Smartphone, Lock, Wifi, Battery, Globe, Snowflake, Thermometer, Home, Building, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const AboutUs = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const canadianProvinces = [
    'Ontario', 'Quebec', 'British Columbia', 'Alberta', 
    'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick',
    'Newfoundland & Labrador', 'Prince Edward Island'
  ];

  const canadianStandards = [
    { name: 'CSA Certified', desc: 'Canadian Standards Association compliance' },
    { name: 'ULC Listed', desc: 'Underwriters Laboratories of Canada' },
    { name: 'PIPEDA Compliant', desc: 'Canadian privacy law compliance' },
    { name: 'Industry Canada Approved', desc: 'Radio standards compliance' },
  ];

  const servicesForCanada = [
    {
      category: 'Residential Security',
      icon: <Home size={24} />,
      services: [
        'Smart Home CCTV Systems',
        'Winter-Ready Outdoor Cameras',
        'Remote Vacation Monitoring',
        'Energy-Efficient Solutions',
        'Home Automation Integration'
      ],
      features: [
        'Withstands -40°C temperatures',
        'PIR motion detection for wildlife',
        'Cloud storage with Canadian servers',
        'Bilingual support (English/French)'
      ]
    },
    {
      category: 'Commercial Security',
      icon: <Building size={24} />,
      services: [
        'Retail Store Surveillance',
        'Office Building Security',
        'Parking Lot Monitoring',
        'Access Control Systems',
        '24/7 Professional Monitoring'
      ],
      features: [
        'Compliance with Canadian business regulations',
        'Integration with local law enforcement',
        'Multi-location management',
        'Canadian-hosted video analytics'
      ]
    },
    {
      category: 'Industrial & Government',
      icon: <Factory size={24} />,
      services: [
        'Industrial Site Security',
        'Government Facility Protection',
        'Critical Infrastructure Monitoring',
        'Construction Site Surveillance',
        'Remote Area Security'
      ],
      features: [
        'Extreme weather resilience',
        'Solar-powered solutions for remote sites',
        'Compliance with Canadian security protocols',
        'Redundant connectivity options'
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: 'Canadian Expertise',
      description: '15+ years serving Canadian homes and businesses',
      icon: <MapPin size={20} />,
      details: [
        'Local technicians across all major provinces',
        'Understanding of regional security needs',
        'Knowledge of Canadian climate challenges'
      ]
    },
    {
      title: 'Climate-Adapted Technology',
      description: 'Systems designed for Canadian weather conditions',
      icon: <Snowflake size={20} />,
      details: [
        'Winterized camera housings (-40°C to +60°C)',
        'Heated domes for snow and ice prevention',
        'Weatherproof connectors and cabling'
      ]
    },
    {
      title: 'Canadian Compliance',
      description: 'Fully compliant with Canadian laws and regulations',
      icon: <Shield size={20} />,
      details: [
        'PIPEDA-compliant data handling',
        'CSA/ULC certified equipment',
        'Industry Canada frequency compliance'
      ]
    }
  ];

  const canadianPartners = [
    'Royal Canadian Mounted Police (RCMP) Partner',
    'Canadian Security Association Member',
    'Alarm Industry Association of Canada',
    'Canadian Institute for Cybersecurity',
    'Various Municipal Police Services'
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Canadian Background Pattern */}
      <div className={styles.canadianBackground}>
        <div className={styles.mapPattern}></div>
        <div className={styles.snowflakePattern}></div>
        <div className={styles.leafPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Hero Header */}
        <div className={styles.aboutHero}>
          <motion.div 
            className={styles.canadianBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.flagMarkers}>
              <span className={styles.flagRed}>🇨🇦</span>
              <span className={styles.flagWhite}>SECURING CANADA</span>
              <span className={styles.flagRed}>🇨🇦</span>
            </div>
            <span className={styles.badgeText}>SINCE 2022</span>
          </motion.div>

          <motion.h1 
            className={styles.aboutTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Protecting <span className={styles.titleHighlight}>Canadian Homes</span>
            <br />
            & <span className={styles.titleHighlight}>Businesses</span>
          </motion.h1>

          <motion.p 
            className={styles.aboutIntro}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            SecureVision Pro is Canada's trusted CCTV and security solutions provider, 
            offering climate-adapted surveillance systems designed specifically for 
            Canadian weather conditions and security requirements.
          </motion.p>
        </div>

        {/* Company Overview */}
        <div className={styles.companyOverview}>
          <div className={styles.overviewCard}>
            <motion.div 
              className={styles.overviewVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.canadianNetwork}>
                <div className={styles.networkHub}>
                  <div className={styles.hubGlow}></div>
                  <MapPin size={32} />
                </div>
                <div className={styles.networkNodes}>
                  {canadianProvinces.slice(0, 6).map((_, i) => (
                    <div key={i} className={styles.networkNode}></div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className={styles.overviewContent}>
              <h2 className={styles.overviewTitle}>About Us</h2>
              <p className={styles.overviewText}>
                OrbitTech is Canada's premier CCTV and advanced surveillance specialist, founded in 2010 with a singular mission: to provide intelligent, climate-adapted security systems that protect Canadian homes and businesses in every season. Based in Toronto with satellite offices across major provinces, we combine cutting-edge technology with deep local expertise to deliver security solutions that withstand Canada's unique environmental challenges while meeting rigorous national standards.
              </p>

              <p className={styles.overviewText}>
                Our name "OrbitTech" reflects our approach to security—creating comprehensive 360° protection orbits around your property using smart technology. We understand that Canadian security needs are distinct, requiring systems that perform flawlessly through harsh winters, humid summers, and everything in between. That's why every OrbitTech installation is engineered specifically for Canadian conditions, from our winter-rated camera housings (-40°C certified) to our CSA-approved equipment and PIPEDA-compliant data management.
              </p>
              
              {/* <div className={styles.provinceCoverage}>
                <h3>Service Coverage</h3>
                <div className={styles.provinceGrid}>
                  {canadianProvinces.map((province, index) => (
                    <div key={index} className={styles.provinceBadge}>
                      <MapPin size={12} />
                      <span>{province}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Services for Canada */}
        <div className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Security Services</h2>
            <p className={styles.sectionSubtitle}>
              Climate-adapted solutions designed according to conditions
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesForCanada.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceCategory}>{service.category}</h3>
                </div>

                <div className={styles.serviceList}>
                  <h4 className={styles.listTitle}>Services Include:</h4>
                  <ul className={styles.serviceItems}>
                    {service.services.map((item, idx) => (
                      <li key={idx} className={styles.serviceItem}>
                        <Shield size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.canadianFeatures}>
                  <h4 className={styles.featuresTitle}>Features:</h4>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                          {index === 0 && idx === 0 ? <Thermometer size={12} /> :
                           index === 0 && idx === 1 ? <Zap size={12} /> :
                           <Cloud size={12} />}
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceBadge}>
                  <span>🇨🇦 Canadian-Specific</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us for Canada */}
        <div className={styles.whyChooseSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose SecureVision in Canada</h2>
            <p className={styles.sectionSubtitle}>
              Expertise tailored for Canadian security needs
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className={styles.reasonCard}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.reasonHeader}>
                  <div className={styles.reasonIcon}>
                    {reason.icon}
                  </div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                </div>
                <p className={styles.reasonDescription}>{reason.description}</p>
                <ul className={styles.reasonDetails}>
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      <div className={styles.detailMarker}></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Canadian Standards & Compliance */}
        <div className={styles.standardsSection}>
          <div className={styles.standardsCard}>
            <div className={styles.standardsHeader}>
              <div className={styles.standardsLogo}>
                <Award size={32} />
              </div>
              <div>
                <h2 className={styles.standardsTitle}>Standards Compliant</h2>
                <p className={styles.standardsSubtitle}>
                  Meeting and exceeding Canadian security requirements
                </p>
              </div>
            </div>

            <div className={styles.standardsGrid}>
              {canadianStandards.map((standard, index) => (
                <div key={index} className={styles.standardItem}>
                  <div className={styles.standardBadge}>
                    <Lock size={16} />
                  </div>
                  <div className={styles.standardContent}>
                    <h4 className={styles.standardName}>{standard.name}</h4>
                    <p className={styles.standardDesc}>{standard.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.complianceNote}>
              <div className={styles.complianceIcon}>
                <Shield size={20} />
              </div>
              <p>
                All our systems are designed to comply with Canadian privacy laws 
                (PIPEDA) and use Canadian-hosted cloud services when available.
              </p>
            </div>
          </div>
        </div>

        {/* Canadian Climate Solutions */}
        <div className={styles.climateSection}>
          <div className={styles.climateVisual}>
            <div className={styles.weatherCards}>
              <div className={styles.weatherCard}>
                <div className={styles.weatherIcon}>
                  <Snowflake size={24} />
                </div>
                <div className={styles.weatherInfo}>
                  <div className={styles.weatherTemp}>-40°C</div>
                  <div className={styles.weatherLabel}>Winter Rated</div>
                </div>
              </div>
              <div className={styles.weatherCard}>
                <div className={styles.weatherIcon}>
                  <Thermometer size={24} />
                </div>
                <div className={styles.weatherInfo}>
                  <div className={styles.weatherTemp}>+60°C</div>
                  <div className={styles.weatherLabel}>Summer Rated</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.climateContent}>
            <h2 className={styles.climateTitle}>Built for All Types Weather</h2>
            <p className={styles.climateText}>
              Our CCTV systems are specifically engineered to withstand extreme 
              Canadian weather conditions, from freezing winters to hot summers.
            </p>
            <div className={styles.climateFeatures}>
              <div className={styles.climateFeature}>
                <div className={styles.featureIcon}>
                  <Wifi size={18} />
                </div>
                <span>Extended temperature range operation</span>
              </div>
              <div className={styles.climateFeature}>
                <div className={styles.featureIcon}>
                  <Battery size={18} />
                </div>
                <span>Battery backup for power outages</span>
              </div>
              <div className={styles.climateFeature}>
                <div className={styles.featureIcon}>
                  <Cloud size={18} />
                </div>
                <span>Weatherproof housing and connectors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Recognition */}
        {/* <div className={styles.partnersSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Canadian Partners & Recognition</h2>
            <p className={styles.sectionSubtitle}>
              Working with trusted Canadian organizations
            </p>
          </div>

          <div className={styles.partnersGrid}>
            {canadianPartners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <Building size={20} />
                </div>
                <div className={styles.partnerName}>{partner}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Team Section */}
        <div className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>Our Team</h2>
            <p className={styles.teamSubtitle}>
              Certified security professionals serving communities across Canada
            </p>
          </div>

          <div className={styles.teamStats}>
            <div className={styles.teamStat}>
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>Certified Technicians</div>
            </div>
            <div className={styles.teamStat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Bilingual Support</div>
            </div>
            <div className={styles.teamStat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.teamStat}>
              <div className={styles.statNumber}>10</div>
              <div className={styles.statLabel}>Provinces Served</div>
            </div>
          </div>

          <div className={styles.teamNote}>
            <Users size={24} />
            <p>
              Our team includes former law enforcement officers, security experts, 
              and technology specialists who understand Canadian security challenges.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Secure Your Property Today</h2>
              <p className={styles.ctaText}>
                Get a free security assessment from our experts. 
                We'll evaluate your needs and provide climate-appropriate solutions.
              </p>
              <div className={styles.ctaButtons}>
                {/* <button className={styles.primaryCta}>
                  <PhoneIcon />
                  <span>Book Canadian Consultation</span>
                </button>
                <button className={styles.secondaryCta}>
                  <MapPin size={18} />
                  <span>Find Local Canadian Office</span>
                </button> */}
              </div>
            </div>
            <div className={styles.ctaVisual}>
              <div className={styles.canadianShield}>
                <div className={styles.shieldGlow}></div>
                <Shield size={48} />
                <div className={styles.shieldText}>MADE FOR CANADA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
  </svg>
);

export default AboutUs;