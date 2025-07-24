import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, CheckCircle, Award } from "lucide-react";
import styles from "../components/HeroBanner.module.css";

const serviceList = [
  {
    icon: <Users size={40} color="#20446C" style={{marginBottom: 12}} />, 
    title: "Expert Training",
    desc: "Hands-on, scenario-based courses led by seasoned professionals to prepare you for real-world challenges."
  },
  {
    icon: <CheckCircle size={40} color="#20446C" style={{marginBottom: 12}} />,
    title: "Certified Screening",
    desc: "Thorough screening and certification processes recognized by industry leaders and regulatory bodies."
  },
  {
    icon: <Award size={40} color="#20446C" style={{marginBottom: 12}} />,
    title: "Career Support",
    desc: "Ongoing career guidance, upskilling, and resources to help you grow in the security field."
  },
  {
    icon: <Users size={40} color="#20446C" style={{marginBottom: 12}} />,
    title: "Corporate Solutions",
    desc: "Custom security training and screening programs tailored for organizations and teams."
  },
];

const processSteps = [
  { step: "1. Consultation", detail: "We assess your needs and recommend the best path forward." },
  { step: "2. Training & Screening", detail: "Engage in interactive courses and rigorous screening." },
  { step: "3. Certification", detail: "Receive industry-recognized credentials and support." },
  { step: "4. Ongoing Growth", detail: "Access career resources and continuous learning." },
];

const Services = () => (
  <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f6f9fb'}}>
    <Navbar />
    <main style={{flex: 1}}>
      {/* Hero Section */}
      <section className={styles.heroBanner} style={{minHeight: 420, padding: 0, backgroundBlendMode: 'multiply'}}>
        <div className={styles.heroContent} style={{paddingTop: 180, paddingBottom: 48}}>
          <h1 className={styles.heroTitle} style={{fontSize: 52, letterSpacing: '1.5rem', marginBottom: 12}}>OUR SERVICES</h1>
          <div className={styles.heroSubtitle} style={{marginBottom: 28, fontSize: 24, color: '#123E7C', letterSpacing: '0.6rem'}}>EMPOWERING SECURITY EXCELLENCE</div>
          <p style={{maxWidth: 650, margin: '0 auto', fontSize: 20, color: '#20446C', background: 'rgba(255,255,255,0.92)', padding: 24, borderRadius: 16, boxShadow: '0 2px 16px rgba(32,68,108,0.08)'}}>
            Explore our range of professional services designed to elevate your skills, ensure compliance, and open new doors in the world of security. Whether you are an individual or an organization, Shehrity offers solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{background: '#fff', padding: '64px 0 48px 0'}}>
        <div style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{color: '#0C3C78', fontWeight: 800, fontSize: 34, textAlign: 'center', marginBottom: 36, letterSpacing: 2}}>What We Offer</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40}}>
            {serviceList.map((service, idx) => (
              <div key={service.title} style={{background: 'linear-gradient(135deg, #f6f9fb 60%, #e6eef6 100%)', borderRadius: 20, boxShadow: '0 2px 12px rgba(32,68,108,0.07)', padding: 38, minWidth: 260, maxWidth: 300, textAlign: 'center', transition: 'transform 0.18s', cursor: 'pointer'}}>
                {service.icon}
                <h3 style={{color: '#20446C', fontWeight: 700, fontSize: 22, marginBottom: 8}}>{service.title}</h3>
                <p style={{color: '#555', fontSize: 16}}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Benefits Section */}
      <section style={{padding: '56px 0', background: 'linear-gradient(90deg, #e6eef6 60%, #f6f9fb 100%)'}}>
        <div style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{color: '#0C3C78', fontWeight: 800, fontSize: 30, textAlign: 'center', marginBottom: 40, letterSpacing: 2}}>How It Works</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 36}}>
            {processSteps.map(step => (
              <div key={step.step} style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 10px rgba(32,68,108,0.08)', padding: 30, minWidth: 220, maxWidth: 260, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span style={{fontSize: 22, marginBottom: 14, color: '#20446C', fontWeight: 700}}>{step.step}</span>
                <p style={{color: '#555', fontSize: 16, margin: 0}}>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{padding: '56px 0 64px 0', background: '#20446C'}}>
        <div style={{maxWidth: 900, margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{color: '#fff', fontWeight: 800, fontSize: 30, marginBottom: 18, letterSpacing: 2}}>Start Your Security Journey</h2>
          <p style={{color: '#e6eef6', fontSize: 20, marginBottom: 32}}>
            Ready to take the next step? Register now or contact us to discuss your goals and how Shehrity can help you achieve them.
          </p>
          <a href="/register" style={{display: 'inline-block', background: '#fff', color: '#20446C', fontWeight: 700, fontSize: 18, padding: '14px 38px', borderRadius: 28, boxShadow: '0 2px 10px rgba(12,60,120,0.12)', textDecoration: 'none', letterSpacing: 1}}>Get Started</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
