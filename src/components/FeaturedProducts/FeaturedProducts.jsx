import React, { useState } from 'react';
import { Camera, Zap, Eye, Wifi, Cloud, Smartphone, Shield, Star, ShoppingCart, ChevronRight, Battery, Thermometer, Sparkles, Scan, Cpu, RadioTower } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSpecs, setActiveSpecs] = useState({});

  const categories = [
    { id: 'all', label: 'All Products', icon: <Sparkles size={16} /> },
    { id: 'outdoor', label: 'Outdoor', icon: <Thermometer size={16} /> },
    { id: 'indoor', label: 'Indoor', icon: <Eye size={16} /> },
    { id: 'wireless', label: 'Wireless', icon: <RadioTower size={16} /> },
    { id: 'ai', label: 'AI Powered', icon: <Cpu size={16} /> },
  ];

  const products = [
    {
      id: 1,
      name: 'VisionPro 4K PTZ',
      category: 'ai',
      description: '360° panoramic view with AI tracking',
      price: 649,
      originalPrice: 799,
      rating: 4.8,
      reviews: 128,
      features: ['4K Ultra HD', '360° Auto Tracking', 'Color Night Vision', 'IP67 Waterproof'],
      badge: 'BEST SELLER',
      color: '#0066FF',
      gradient: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
      icon: <Camera size={24} />,
      specs: {
        resolution: '4K',
        range: '360°',
        storage: 'Cloud/Local',
        connectivity: 'Wi-Fi 6'
      }
    },
    {
      id: 2,
      name: 'Stealth Dome',
      category: 'indoor',
      description: 'Discreet ceiling mount with 5MP clarity',
      price: 329,
      originalPrice: 399,
      rating: 4.6,
      reviews: 89,
      features: ['5MP Resolution', 'Two-Way Audio', 'Motion Detection', 'Privacy Mode'],
      badge: 'INVISIBLE',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      icon: <Eye size={24} />,
      specs: {
        resolution: '5MP',
        range: '180°',
        storage: 'SD Card',
        connectivity: 'Wi-Fi'
      }
    },
    // {
    //   id: 3,
    //   name: 'Guardian Pro',
    //   category: 'outdoor',
    //   description: 'Military-grade outdoor surveillance',
    //   price: 459,
    //   originalPrice: 549,
    //   rating: 4.9,
    //   reviews: 156,
    //   features: ['Extreme Weatherproof', '100m Night Vision', 'Vandal Proof', 'Solar Ready'],
    //   badge: 'WEATHERPROOF',
    //   color: '#F59E0B',
    //   gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    //   icon: <Thermometer size={24} />,
    //   specs: {
    //     resolution: '4MP',
    //     range: '90°',
    //     storage: 'NAS/Cloud',
    //     connectivity: 'PoE'
    //   }
    // },
    // {
    //   id: 4,
    //   name: 'Nexus Wireless',
    //   category: 'wireless',
    //   description: 'Complete 4-camera wireless system',
    //   price: 1299,
    //   originalPrice: 1599,
    //   rating: 4.7,
    //   reviews: 72,
    //   features: ['4 Camera Kit', 'Wireless Installation', 'Mobile App', 'Free Cloud'],
    //   badge: 'COMPLETE KIT',
    //   color: '#8B5CF6',
    //   gradient: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%)',
    //   icon: <Wifi size={24} />,
    //   specs: {
    //     resolution: '4K',
    //     range: 'Full Property',
    //     storage: '2TB Cloud',
    //     connectivity: 'Wi-Fi 6'
    //   }
    // },
    // {
    //   id: 5,
    //   name: 'AI Sentinel',
    //   category: 'ai',
    //   description: 'Advanced AI threat detection',
    //   price: 899,
    //   originalPrice: 1099,
    //   rating: 4.9,
    //   reviews: 94,
    //   features: ['Face Recognition', 'Object Detection', 'Predictive Analytics', 'Auto Alerts'],
    //   badge: 'AI POWERED',
    //   color: '#EF4444',
    //   gradient: 'linear-gradient(135deg, #EF4444 0%, #FCA5A5 100%)',
    //   icon: <Zap size={24} />,
    //   specs: {
    //     resolution: '8MP',
    //     range: 'Smart Tracking',
    //     storage: 'Unlimited Cloud',
    //     connectivity: 'Dual Band'
    //   }
    // },
    {
      id: 6,
      name: 'Mini Spy Cam',
      category: 'indoor',
      description: 'Ultra-compact hidden camera',
      price: 199,
      originalPrice: 249,
      rating: 4.5,
      reviews: 201,
      features: ['Pinhole Design', 'Motion Activated', 'Local Storage', 'Mobile View'],
      badge: 'COMPACT',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)',
      icon: <Smartphone size={24} />,
      specs: {
        resolution: '1080p',
        range: 'Wide Angle',
        storage: 'MicroSD',
        connectivity: 'Wi-Fi'
      }
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="products" className={styles.productsSection}>
      {/* Animated Background */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gridLines}></div>
      </div>
      
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className={styles.headerTop}>
            <div className={styles.headerBadge}>
              <Scan size={18} />
              <span>TECHNOLOGY SHOWCASE</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8</span>
                <span className={styles.statLabel}>Avg Rating</span>
              </div>
            </div>
          </div>
          
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleLine}>Premium Security</span>
              <span className={styles.titleAccent}>Solutions</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Advanced surveillance systems engineered for intelligent protection
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div 
          className={styles.categoryFilter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.filterWrapper}>
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.label}
                {selectedCategory === category.id && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeCategory"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div> */}

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className={styles.productsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={selectedCategory}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className={styles.productCard}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Product Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.badgeWrapper}>
                    <div 
                      className={styles.productBadge}
                      style={{ background: product.gradient }}
                    >
                      {product.badge}
                    </div>
                  </div>
                  <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                      <Star size={14} fill="#FBBF24" stroke="none" />
                      <span className={styles.ratingValue}>{product.rating}</span>
                    </div>
                    <span className={styles.reviews}>({product.reviews})</span>
                  </div>
                </div>

                {/* Product Visual */}
                <div className={styles.productVisual}>
                  <div className={styles.cameraContainer}>
                    <div 
                      className={styles.cameraBody}
                      style={{ 
                        background: `linear-gradient(135deg, ${product.color}10, ${product.color}05)`,
                        borderLeft: `3px solid ${product.color}` 
                      }}
                    >
                      <div className={styles.cameraInner}>
                        <div 
                          className={styles.cameraIcon}
                          style={{ background: product.gradient }}
                        >
                          {product.icon}
                        </div>
                        <div className={styles.cameraLens}>
                          <div 
                            className={styles.lensRing}
                            style={{ borderColor: product.color }}
                          ></div>
                          <div 
                            className={styles.lensCore}
                            style={{ background: product.gradient }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Indicator */}
                    <div className={styles.liveIndicator}>
                      <div 
                        className={styles.liveDot}
                        style={{ background: product.color }}
                      ></div>
                      <span>LIVE FEED</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className={styles.productInfo}>
                  <div className={styles.infoHeader}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    {/* <div className={styles.priceTag}>
                      <span className={styles.currentPrice}>${product.price}</span>
                      <span className={styles.originalPrice}>${product.originalPrice}</span>
                    </div> */}
                  </div>
                  
                  <p className={styles.productDescription}>{product.description}</p>

                  {/* Quick Specs */}
                  <div className={styles.quickSpecs}>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>RES</span>
                      <span className={styles.specValue}>{product.specs.resolution}</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>RANGE</span>
                      <span className={styles.specValue}>{product.specs.range}</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>STORAGE</span>
                      <span className={styles.specValue}>{product.specs.storage}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className={styles.featuresGrid}>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className={styles.feature}>
                        <div 
                          className={styles.featureIcon}
                          style={{ color: product.color }}
                        >
                          •
                        </div>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {/* <div className={styles.actionButtons}>
                    <motion.button 
                      className={styles.detailsBtn}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore</span>
                      <ChevronRight size={16} />
                    </motion.button>
                    <motion.button 
                      className={styles.cartBtn}
                      style={{ background: product.gradient }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div> */}
                </div>

                {/* Hover Overlay */}
                {hoveredProduct === product.id && (
                  <motion.div 
                    className={styles.hoverOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${product.color}15, transparent 70%)`
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        {/* <motion.div 
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>Need a Custom Security Solution?</h3>
              <p className={styles.ctaSubtitle}>
                Schedule a free consultation with our security experts
              </p>
            </div>
            <div className={styles.ctaActions}>
              <motion.button 
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Consultation</span>
                <ChevronRight size={20} />
              </motion.button>
              <button className={styles.secondaryCta}>
                View All Products
              </button>
            </div>
          </div>
          
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <Shield size={20} />
              <span>2-Year Warranty</span>
            </div>
            <div className={styles.trustBadge}>
              <Cloud size={20} />
              <span>Free Cloud Storage</span>
            </div>
            <div className={styles.trustBadge}>
              <Battery size={20} />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;