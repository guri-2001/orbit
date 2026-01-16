// ContactQuote.tsx
import React from 'react';
import './ContactQuote.css';

const ContactQuote = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-grid">

                {/* Left Column - Get a Free Quote */}
                <div className="quote-info">
                    <h1 className="main-title">Get a Free Quote</h1>

                    <p className="description">
                        Need automation or security systems? Getting a quote is quick and easy.<br />
                        Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    <div className="divider"></div>

                    <h2 className="section-title">What we'll ask for:</h2>

                    <ul className="requirements">
                        <li>Your name</li>
                        <li>Phone number</li>
                        <li>Address</li>
                        <li>Type of service needed (CCTV, smart home, alarm system, TV mounting, etc.)</li>
                        <li>Short description of the project</li>
                    </ul>

                    <p className="description">
                        No obligation. No pressure. Just an honest price and professional service.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <a href="#" className="talk-link">Preferred to talk?</a>
                        </div>

                        <div className="contact-item">
                            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="contact-text">Call us at</span>
                            <span className="phone-number">(437) 351-1000</span>
                        </div>

                        <div className="contact-item">
                            <span className="contact-text">Email us anytime</span>
                            <a href="mailto:canadaorbit@gmail.com" className="email-link">Canadaorbit@gmail.com</a>
                        </div>

                        <div className="info-box">
                            <p className="info-text">We'll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Quote Form */}
                <div className="forms-column">
                    <div className="quote-form">
                        <h2 className="form-title">Request Your Free Quote</h2>

                        <form className="form">
                            <div className="form-group">
                                <label className="form-label">Name *</label>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone *</label>
                                <input
                                    type="tel"
                                    placeholder="(437) 000-0000"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Address *</label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Service Needed *</label>
                                <select className="form-select">
                                    <option>Select a service</option>
                                    <option>CCTV</option>
                                    <option>Smart Home</option>
                                    <option>Alarm System</option>
                                    <option>TV Mounting</option>
                                    <option>Access Control</option>
                                    <option>Intercom</option>
                                    <option>Networking/Structure Cabling</option>
                                    <option>Lights</option>
                                    <option>Fan installation </option>
                                    <option>Installation </option>
                                    <option>Upgrade </option>
                                    <option>Troubleshooting </option>
                                    <option>Gate Automatic</option>
                                    <option>Smoke/CO2 alarm</option>
                                    <option>Maintenance</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Project Description *</label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="form-textarea"
                                />
                            </div>

                            <button type="button" className="submit-button quote-button">
                                Request Free Quote
                            </button>
                        </form>

                        <p className="response-time">We'll respond within 24 hours</p>
                    </div>

                    {/* Second Form - Contact ORBIT TECH */}
                </div>
            </div>
            <div className="contact-form">
                <h1 className="contact-title">Contact ORBIT TECH</h1>

                <div className="contact-header">
                    {/* <div className="phone-section">
                                <svg className="phone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span className="main-phone">(437) 351-1000</span>
                            </div> */}
                    {/* <button className="schedule-button">Schedule Service</button> */}
                </div>

                <div className="contact-info">
                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div>
                            <h3 className="info-label">Address</h3>
                            <p className="info-text">3 Fletchers Creek Blvd, <br /> Brampton ON L6X 4R7, Canada</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <div>
                            <h3 className="info-label">Hours</h3>
                            <p className="info-text">Open Daily<br />Until 8:00 PM</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg className="info-icon star" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b5563">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <div>
                            <h3 className="info-label">Rating</h3>
                            <p className="info-text">5.0 Stars<br />40 Reviews</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div>
                            <h3 className="info-label">Service Area</h3>
                            <p className="info-text">GTA & Nearby Areas</p>
                        </div>
                    </div>
                </div>

                <div className="message-form">
                    <h2 className="message-title">Send Us a Message</h2>

                    <form className="form">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="form-input"
                        />

                        <input
                            type="tel"
                            placeholder="(403) 000-0000"
                            className="form-input"
                        />

                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="form-input"
                        />

                        <textarea
                            placeholder="How can we help you?"
                            rows={3}
                            className="form-textarea"
                        />

                        <button type="button" className="submit-button message-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactQuote;