/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Camera, Zap, Eye, Shield, Wifi, Cloud, Star, ShoppingCart, Filter, Search, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.module.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const categories = [
    { id: 'all', label: 'All Products', icon: '📷' },
    { id: 'indoor', label: 'Indoor Cameras', icon: '🏠'},
    { id: 'outdoor', label: 'Outdoor Cameras', icon: '🌧️' },
    { id: 'wireless', label: 'Wireless Systems', icon: '📡'},
    { id: 'ptz', label: 'PTZ Cameras', icon: '🔄'},
    { id: 'dome', label: 'Dome Cameras', icon: '🛡️'},
    { id: 'bullet', label: 'Bullet Cameras', icon: '🎯' },
    { id: 'ai', label: 'AI Smart Cameras', icon: '🧠' },
  ];

  const products = [
    {
      id: 1,
      name: "SecureVision Pro 4K",
      category: "outdoor",
      type: "Bullet Camera",
      description: "Professional 4K outdoor camera with night vision and weatherproof design",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 124,
      features: ["4K Ultra HD", "Night Vision 100ft", "Weatherproof IP67", "Motion Detection"],
      image: "https://m.media-amazon.com/images/I/51acHlNJq0L._SX679_.jpg",
      tags: ["BEST SELLER", "NEW"],
      specs: {
        resolution: "4K",
        nightVision: "100ft",
        storage: "Cloud/Local",
        connectivity: "WiFi/Ethernet"
      }
    },
    {
      id: 2,
      name: "360° Dome Camera Pro",
      category: "dome",
      type: "Dome Camera",
      description: "360° coverage dome camera with vandal-proof design for indoor security",
      price: 249.99,
      originalPrice: 329.99,
      rating: 4.6,
      reviews: 89,
      features: ["360° Coverage", "Vandal Proof", "IR Night Vision", "Audio Recording"],
      image: "https://cdn4.volusion.store/not95-tcan2/v/vspfiles/photos/IP-F6-2T.jpg?v-cache=1728905698",
      tags: ["POPULAR"],
      specs: {
        resolution: "5MP",
        nightVision: "80ft",
        storage: "Local",
        connectivity: "PoE"
      }
    },
    {
      id: 3,
      name: "AI Smart Camera 8MP",
      category: "ai",
      type: "AI Camera",
      description: "AI-powered smart camera with facial recognition and object detection",
      price: 459.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviews: 201,
      features: ["AI Detection", "Facial Recognition", "Smart Alerts", "Cloud Analytics"],
      image: "https://m.media-amazon.com/images/I/51faIvfXTlL.jpg",
      tags: ["AI POWERED", "BEST SELLER"],
      specs: {
        resolution: "8MP",
        nightVision: "120ft",
        storage: "Cloud AI",
        connectivity: "WiFi 6"
      }
    },
    {
      id: 4,
      name: "Wireless Camera Kit",
      category: "wireless",
      type: "Complete System",
      description: "Complete wireless camera system with 4 cameras and NVR",
      price: 799.99,
      originalPrice: 999.99,
      rating: 4.7,
      reviews: 156,
      features: ["4 Camera System", "Wireless Setup", "Mobile App", "1TB Storage"],
      image: "https://cdn01.capitolcam.net/catalog/product/cache/28dd609d8bdc706904d6f229ab8e8e2a/w/i/wifi-dome-camera-system-up-to-6-cameras-avalonix.jpg",
      tags: ["COMPLETE KIT"],
      specs: {
        resolution: "4K System",
        nightVision: "90ft",
        storage: "1TB NVR",
        connectivity: "Wireless"
      }
    },
    {
      id: 5,
      name: "PTZ Auto Tracking Camera",
      category: "ptz",
      type: "PTZ Camera",
      description: "Professional PTZ camera with auto-tracking and 30x optical zoom",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.8,
      reviews: 67,
      features: ["30x Zoom", "Auto Tracking", "360° Rotation", "Preset Points"],
      image: "https://m.media-amazon.com/images/I/619UhYPQJhL._AC_UF894,1000_QL80_.jpg",
      tags: ["PROFESSIONAL"],
      specs: {
        resolution: "4K",
        nightVision: "150ft",
        storage: "Cloud/Local",
        connectivity: "PoE+"
      }
    },
    {
      id: 6,
      name: "Mini Indoor Camera",
      category: "indoor",
      type: "Compact Camera",
      description: "Compact indoor camera with privacy shutter and two-way audio",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 312,
      features: ["Compact Design", "Privacy Shutter", "Two-way Audio", "Motion Tracking"],
      image: "https://www.nsidistribution.com/Item-Images/IPC322ER3-DVPF28_media.default.png?resizeid=5&resizeh=1200&resizew=1200",
      tags: ["COMPACT"],
      specs: {
        resolution: "1080p",
        nightVision: "30ft",
        storage: "MicroSD",
        connectivity: "WiFi"
      }
    },
    {
      id: 7,
      name: "Solar Powered Camera",
      category: "outdoor",
      type: "Wireless Camera",
      description: "Wire-free solar powered camera with battery backup",
      price: 349.99,
      originalPrice: 449.99,
      rating: 4.6,
      reviews: 94,
      features: ["Solar Powered", "Wire-free", "Weatherproof", "Battery Backup"],
      image: "https://m.media-amazon.com/images/I/61ukAClD-2L._AC_UF894,1000_QL80_.jpg",
      tags: ["SOLAR", "WIRE-FREE"],
      specs: {
        resolution: "2K",
        nightVision: "60ft",
        storage: "Cloud",
        connectivity: "4G/WiFi"
      }
    },
    {
      id: 8,
      name: "Business Security Bundle",
      category: "wireless",
      type: "Enterprise System",
      description: "Complete business security solution with 8 cameras and monitoring",
      price: 2499.99,
      originalPrice: 3299.99,
      rating: 4.9,
      reviews: 45,
      features: ["8 Camera System", "Professional Monitoring", "Remote Access", "2TB Storage"],
      image: "https://www.lorex.ca/cdn/shop/files/05c9383c9c44fb951003b0d918354a8dad230d105f56d6bbe8e3da9233b8c8e0_d4495075-3615-41e5-9777-f65e7022f39b.png?v=1764432385&width=533",
      tags: ["ENTERPRISE", "MONITORING"],
      specs: {
        resolution: "4K System",
        nightVision: "100ft",
        storage: "2TB NVR",
        connectivity: "PoE Network"
      }
    }
  ];

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  ).sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return b.reviews - a.reviews;
    }
  });

  const ProductCard = ({ product }) => (
    <motion.div 
      className="security-product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Product Image */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {/* Tags */}
        <div className="product-tags">
          {product.tags.map((tag, index) => (
            <span key={index} className={`product-tag ${tag.toLowerCase().replace(/\s+/g, '-')}`}>
              {tag}
            </span>
          ))}
        </div>
        {/* Quick View Button */}
        <button className="quick-view-btn">
          <Eye size={18} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-category">
          <span className="category-icon">{categories.find(c => c.id === product.category)?.icon}</span>
          <span>{product.type}</span>
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        {/* Features */}
        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="feature-item">
              <CheckCircle size={14} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "#FBBF24" : "#CBD5E1"}
                className="star-icon"
              />
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        {/* <div className="product-pricing">
          <div className="price-current">${product.price.toFixed(2)}</div>
          {product.originalPrice && (
            <div className="price-original">${product.originalPrice.toFixed(2)}</div>
          )}
          <div className="price-save">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </div>
        </div> */}

        {/* Action Buttons */}
        {/* <div className="product-actions">
          <button className="add-to-cart-btn">
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
          <button className="view-details-btn">
            <span>View Details</span>
            <Zap size={16} />
          </button>
        </div> */}
      </div>
    </motion.div>
  );

  return (
    <div className="products-page">
      {/* Hero Header */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional CCTV
            <span className="gradient-text"> Security Products</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover our range of advanced security cameras and systems designed for 
            maximum protection and peace of mind.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-item">
              <div className="stat-number">24</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Avg Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2Y</div>
              <div className="stat-label">Warranty</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="products-container">
        {/* Filters Sidebar */}
        <aside className="products-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">
              <Filter size={20} />
              <span>Categories</span>
            </h3>
            <div className="category-list">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-label">{category.label}</span>
                  {/* <span className="category-count">{category.count}</span> */}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="sidebar-card">
            <h3 className="sidebar-title">
              <TrendingUp size={20} />
              <span>Sort By</span>
            </h3>
            <div className="sort-options">
              {[
                { id: 'featured', label: 'Featured' },
                { id: 'rating', label: 'Top Rated' },
                { id: 'price-low', label: 'Price: Low to High' },
                { id: 'price-high', label: 'Price: High to Low' }
              ].map(option => (
                <button
                  key={option.id}
                  className={`sort-btn ${sortBy === option.id ? 'active' : ''}`}
                  onClick={() => setSortBy(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div> */}

          <div className="sidebar-card">
            <h3 className="sidebar-title">
              <Shield size={20} />
              <span>Why Choose Our Products</span>
            </h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <Zap size={16} />
                <span>Professional Grade Quality</span>
              </div>
              <div className="benefit-item">
                <Wifi size={16} />
                <span>Easy Installation</span>
              </div>
              <div className="benefit-item">
                <Cloud size={16} />
                <span>Cloud & Local Storage</span>
              </div>
              <div className="benefit-item">
                <Camera size={16} />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          {/* <div className="promo-banner">
            <div className="promo-content">
              <h4>Limited Time Offer!</h4>
              <p>Get 20% off on complete security systems</p>
              <button className="promo-btn">
                <span>Shop Now</span>
                <Zap size={16} />
              </button>
            </div>
          </div> */}
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          {/* Search Bar */}
          <div className="products-search">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search cameras, systems, accessories..." 
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
            <div className="results-count">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="no-results">
              <Camera size={48} />
              <h3>No products found</h3>
              <p>Try selecting a different category or search term</p>
              <button 
                className="reset-btn"
                onClick={() => setActiveCategory('all')}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Comparison Banner */}
          {/* <div className="comparison-banner">
            <div className="comparison-content">
              <h3>Not Sure Which Camera to Choose?</h3>
              <p>Compare features, specifications, and pricing to find the perfect security solution</p>
              <button className="comparison-btn">
                <span>Compare Products</span>
                <Eye size={18} />
              </button>
            </div>
          </div> */}
        </main>
      </div>

      {/* Featured Brands */}
      {/* <section className="featured-brands">
        <div className="container">
          <h2 className="brands-title">Trusted by Industry Leaders</h2>
          <div className="brands-grid">
            {[
              { name: "Hikvision", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hikvision_logo.svg/2560px-Hikvision_logo.svg.png" },
              { name: "Dahua", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png" },
              { name: "Axis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Axis_Communications_logo.svg/2560px-Axis_Communications_logo.svg.png" },
              { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bosch-logo.svg/2560px-Bosch-logo.svg.png" },
              { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" }
            ].map((brand, index) => (
              <div key={index} className="brand-card">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Product Modal */}
      {/* {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-content">
              Modal content would go here
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Products;