import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../components/HeroBanner.module.css";

const teamMembers = [
  { name: "Ayesha Khan", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Bilal Ahmed", role: "Head of Training", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sara Malik", role: "Operations Manager", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Omar Siddiqui", role: "Lead Security Analyst", img: "https://randomuser.me/api/portraits/men/47.jpg" },
];

const values = [
  { icon: "💡", title: "Expertise", desc: "Led by industry veterans with real-world experience." },
  { icon: "🤝", title: "Integrity", desc: "We uphold the highest standards of honesty and trust." },
  { icon: "🚀", title: "Growth", desc: "Empowering professionals to advance their careers." },
  { icon: "🔒", title: "Security", desc: "Your safety and privacy are our top priorities." },
];

const AboutUs = () => (
  <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f6f9fb'}}>
    <Navbar />
    <main style={{flex: 1}}>
      {/* Hero / Mission Section */}
      <section className={styles.heroBanner} style={{minHeight: 420, padding: 0, backgroundBlendMode: 'multiply'}}>
        <div className={styles.heroContent} style={{paddingTop: 200, paddingBottom: 48}}>
          <h1 className={styles.heroTitle} style={{fontSize: 52, letterSpacing: '1.5rem', marginBottom: 12}}>ABOUT US</h1>
          <div className={styles.heroSubtitle} style={{marginBottom: 28, fontSize: 24, color: '#123E7C', letterSpacing: '0.6rem'}}>OUR STORY & MISSION</div>
          <p style={{maxWidth: 650, margin: '0 auto', fontSize: 20, color: '#20446C', background: 'rgba(255,255,255,0.92)', padding: 24, borderRadius: 16, boxShadow: '0 2px 16px rgba(32,68,108,0.08)'}}>
            Shehrity is committed to elevating the security industry through rigorous training, advanced screening, and a culture of excellence. Our mission is to empower security professionals with the knowledge, skills, and integrity needed to protect and serve in a changing world.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={{background: '#fff', padding: '64px 0 48px 0'}}>
        <div style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{color: '#0C3C78', fontWeight: 800, fontSize: 36, textAlign: 'center', marginBottom: 36, letterSpacing: 2}}>Our Leadership Team</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40}}>
            {teamMembers.map(member => (
              <div key={member.name} style={{background: '#f6f9fb', borderRadius: 20, boxShadow: '0 2px 12px rgba(32,68,108,0.07)', padding: 32, minWidth: 220, maxWidth: 260, textAlign: 'center'}}>
                <img src={member.img} alt={member.name} style={{width: 86, height: 86, borderRadius: '50%', objectFit: 'cover', marginBottom: 18, border: '4px solid #20446C'}} />
                <h3 style={{color: '#20446C', fontWeight: 700, fontSize: 22, marginBottom: 6}}>{member.name}</h3>
                <div style={{color: '#123E7C', fontSize: 16, fontWeight: 500, marginBottom: 4}}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{padding: '56px 0', background: 'linear-gradient(90deg, #e6eef6 60%, #f6f9fb 100%)'}}>
        <div style={{maxWidth: 1100, margin: '0 auto'}}>
          <h2 style={{color: '#0C3C78', fontWeight: 800, fontSize: 32, textAlign: 'center', marginBottom: 40, letterSpacing: 2}}>Our Core Values</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 36}}>
            {values.map(val => (
              <div key={val.title} style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 10px rgba(32,68,108,0.08)', padding: 30, minWidth: 220, maxWidth: 260, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span style={{fontSize: 38, marginBottom: 16}}>{val.icon}</span>
                <h4 style={{color: '#20446C', fontWeight: 700, fontSize: 20, marginBottom: 8}}>{val.title}</h4>
                <p style={{color: '#555', fontSize: 16, margin: 0}}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{padding: '56px 0 64px 0', background: '#20446C'}}>
        <div style={{maxWidth: 900, margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{color: '#fff', fontWeight: 800, fontSize: 32, marginBottom: 18, letterSpacing: 2}}>Join Our Mission</h2>
          <p style={{color: '#e6eef6', fontSize: 20, marginBottom: 32}}>
            Ready to advance your career or partner with Shehrity? Explore our services or contact us to learn more about how we can help you achieve your security goals.
          </p>
          <a href="/services" style={{display: 'inline-block', background: '#fff', color: '#20446C', fontWeight: 700, fontSize: 18, padding: '14px 38px', borderRadius: 28, boxShadow: '0 2px 10px rgba(12,60,120,0.12)', textDecoration: 'none', letterSpacing: 1}}>Explore Services</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
