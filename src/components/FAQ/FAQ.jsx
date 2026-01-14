import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What areas do you serve?",
      answer: "We serve GTA areas. Contact us to confirm service in your location."
    },
    {
      question: "Do you install both residential and commercial systems?",
      answer: "Yes. We provide installation for homes, offices, retail spaces, and commercial buildings."
    },
    {
      question: "What types of CCTV cameras do you install?",
      answer: "We install Analog and IP security cameras, depending on your needs and budget."
    },
    {
      question: "Do you offer smart home installations?",
      answer: "Yes. We install smart home and security systems, including smart doorbells and smart locks."
    },
    {
      question: "Will the wiring be visible after installation?",
      answer: "No. We specialize in 100% hidden wire installation for a clean and professional finish."
    },
    {
      question: "Do you install home theatres and TV mounting?",
      answer: "Yes. We offer TV mounting, home theatre, audio, video, and lighting installations."
    },
    {
      question: "How long does installation take?",
      answer: "Most jobs are completed on time and efficiently. The exact time depends on the project size."
    },
    {
      question: "Do you provide quotes before starting the work?",
      answer: "Yes. We provide clear pricing and explain all options before starting any work."
    },
    {
      question: "How do I book a service or get a quote?",
      answer: "You can call us at (437) 351-1000 or use the contact form on our website."
    },
    {
      question: "Why choose ORBIT TECH?",
      answer: "We are known for professional work, fast response, clear communication, and high-quality installations, backed by 5-star reviews."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.subtitle}>Common Questions</h2>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.description}>
              Get answers to the most common questions our customers ask about our services.
            </p>
          </div>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.faqButton}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionNumber}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.arrowIcon}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              
              <div className={styles.faqAnswer}>
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Still have questions?</h3>
            <p className={styles.ctaText}>Contact us directly for more information</p>
            <a href="tel:4373511000" className={styles.ctaButton}>
              Call Now: (437) 351-1000
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;