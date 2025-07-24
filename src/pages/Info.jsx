import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import styles from "../components/HeroBanner.module.css";

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const faqs = [
    {
      question: "What training programs do you offer?",
      answer: "We offer comprehensive security training programs including basic security officer training, advanced threat assessment, emergency response, and specialized security certifications."
    },
    {
      question: "How does the screening process work?",
      answer: "Our screening process includes background checks, skills assessment, and interviews to ensure all candidates meet our high standards for security personnel."
    },
    {
      question: "Are your certifications recognized?",
      answer: "Yes, all our certifications are nationally recognized and meet industry standards for security professionals."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Absolutely! We provide customized training solutions for organizations of all sizes to meet their specific security needs."
    },
    {
      question: "What support do you offer after training?",
      answer: "We provide ongoing career support, job placement assistance, and continuing education opportunities for all our graduates."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f8fafc'}}>
      <Navbar />
      <main style={{flex: 1}}>
        {/* Hero Section */}
        <section className={styles.heroBanner} style={{minHeight: '60vh', backgroundBlendMode: 'multiply'}}>
          <div className={styles.heroContent} style={{paddingTop: 160, paddingBottom: 48}}>
            <h1 className={styles.heroTitle} style={{fontSize: 52, letterSpacing: '1.5rem', marginBottom: 12}}>CONTACT US</h1>
            <div className={styles.heroSubtitle} style={{marginBottom: 28, fontSize: 24, color: '#123E7C', letterSpacing: '0.6rem'}}>WE'RE HERE TO HELP</div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section style={{padding: '64px 0', background: '#fff'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 24px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 64}}>
              <div style={{background: '#f8fafc', padding: 32, borderRadius: 16, textAlign: 'center', boxShadow: '0 2px 12px rgba(32,68,108,0.06)'}}>
                <div style={{width: 60, height: 60, borderRadius: '50%', background: 'rgba(32,68,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                  <Mail size={28} color="#20446C" />
                </div>
                <h3 style={{color: '#0C3C78', marginBottom: 12, fontSize: 20}}>Email Us</h3>
                <p style={{color: '#555', margin: 0}}>info@shehrity.com</p>
                <p style={{color: '#555', margin: '4px 0 0 0'}}>support@shehrity.com</p>
              </div>
              
              <div style={{background: '#f8fafc', padding: 32, borderRadius: 16, textAlign: 'center', boxShadow: '0 2px 12px rgba(32,68,108,0.06)'}}>
                <div style={{width: 60, height: 60, borderRadius: '50%', background: 'rgba(32,68,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                  <Phone size={28} color="#20446C" />
                </div>
                <h3 style={{color: '#0C3C78', marginBottom: 12, fontSize: 20}}>Call Us</h3>
                <p style={{color: '#555', margin: 0}}>+1 (555) 123-4567</p>
                <p style={{color: '#555', margin: '4px 0 0 0'}}>Mon-Fri, 9am-6pm</p>
              </div>
              
              <div style={{background: '#f8fafc', padding: 32, borderRadius: 16, textAlign: 'center', boxShadow: '0 2px 12px rgba(32,68,108,0.06)'}}>
                <div style={{width: 60, height: 60, borderRadius: '50%', background: 'rgba(32,68,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                  <MapPin size={28} color="#20446C" />
                </div>
                <h3 style={{color: '#0C3C78', marginBottom: 12, fontSize: 20}}>Visit Us</h3>
                <p style={{color: '#555', margin: 0}}>123 Security Plaza</p>
                <p style={{color: '#555', margin: '4px 0 0 0'}}>New York, NY 10001</p>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 48}}>
              {/* Contact Form */}
              <div>
                <h2 style={{color: '#0C3C78', fontSize: 28, marginBottom: 24, fontWeight: 700}}>Send Us a Message</h2>
                <form onSubmit={handleSubmit} style={{background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 2px 12px rgba(32,68,108,0.06)'}}>
                  <div style={{marginBottom: 20}}>
                    <label htmlFor="name" style={{display: 'block', marginBottom: 8, color: '#20446C', fontWeight: 500}}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 16}}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div style={{marginBottom: 20}}>
                    <label htmlFor="email" style={{display: 'block', marginBottom: 8, color: '#20446C', fontWeight: 500}}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 16}}
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div style={{marginBottom: 20}}>
                    <label htmlFor="subject" style={{display: 'block', marginBottom: 8, color: '#20446C', fontWeight: 500}}>Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 16, backgroundColor: '#fff'}}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Training Programs">Training Programs</option>
                      <option value="Certification">Certification</option>
                      <option value="Support">Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div style={{marginBottom: 24}}>
                    <label htmlFor="message" style={{display: 'block', marginBottom: 8, color: '#20446C', fontWeight: 500}}>Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 16, resize: 'vertical'}}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button type="submit" style={{background: '#20446C', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s'}}>
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* FAQ Section */}
              <div>
                <h2 style={{color: '#0C3C78', fontSize: 28, marginBottom: 24, fontWeight: 700}}>Frequently Asked Questions</h2>
                <div style={{background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(32,68,108,0.06)'}}>
                  {faqs.map((faq, index) => (
                    <div key={index} style={{borderBottom: index !== faqs.length - 1 ? '1px solid #eee' : 'none'}}>
                      <button
                        onClick={() => toggleFAQ(index)}
                        style={{
                          width: '100%',
                          padding: '20px 24px',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          transition: 'background 0.2s'
                        }}
                      >
                        <span style={{fontSize: 16, fontWeight: 600, color: '#0C3C78'}}>{faq.question}</span>
                        <ChevronDown 
                          size={20} 
                          color="#0C3C78" 
                          style={{
                            transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.2s',
                            flexShrink: 0,
                            marginLeft: 16
                          }} 
                        />
                      </button>
                      {activeIndex === index && (
                        <div style={{padding: '0 24px 24px', color: '#555', lineHeight: 1.6}}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Additional Info */}
                <div style={{marginTop: 40, background: '#f8fafc', padding: 24, borderRadius: 16}}>
                  <h3 style={{color: '#0C3C78', fontSize: 20, marginBottom: 16}}>Need More Help?</h3>
                  <p style={{color: '#555', marginBottom: 20}}>Can't find what you're looking for? Our support team is available 24/7 to assist you with any questions or concerns.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
                    <Clock size={18} color="#20446C" style={{marginRight: 10}} />
                    <span style={{color: '#555'}}>24/7 Email Support: support@shehrity.com</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Phone size={16} color="#20446C" style={{marginRight: 10}} />
                    <span style={{color: '#555'}}>Emergency Support: +1 (555) 987-6543</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section style={{height: 400, background: '#e6eef6'}}>
          <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#20446C'}}>
            <div style={{textAlign: 'center'}}>
              <MapPin size={48} style={{marginBottom: 16}} />
              <h3 style={{fontSize: 24, marginBottom: 8}}>Our Location</h3>
              <p style={{margin: 0}}>123 Security Plaza, New York, NY 10001</p>
              <p style={{margin: '8px 0 0 0'}}>View on <a href="#" style={{color: '#20446C', textDecoration: 'underline'}}>Google Maps</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
