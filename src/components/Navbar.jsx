import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import backgroundImg from '../assets/background.png';
import axios from 'axios';
import logo from '../assets/logo.png';

const API_BASE = 'https://backend-8tiy85l3.b4a.run';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [showScreeningTooltip, setShowScreeningTooltip] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BASE}/api/user/logout`, {}, { withCredentials: true });
    } catch (err) {
      // Ignore errors, just clear local storage
    }
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className={styles.navbar} style={{
      position: 'absolute',
      top: '32px',
      left: 0,
      width: '100%',
      background: 'rgba(32,68,108,0.0)',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 9999,
    }}>
      <div className={styles.container}>
        <div className="d-flex justify-content-center align-items-center py-3 w-100" style={{position: 'relative'}}>
          {/* Mobile: Logo on left, hamburger on right */}
          <div className="d-md-none w-100 d-flex align-items-center justify-content-between" style={{position: 'relative', minHeight: 56, padding: '0 8px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <img src={logo} alt="Logo" style={{height: 34, marginLeft: 2, borderRadius: 8, boxShadow: '0 2px 8px rgba(12,60,120,0.10)'}} />
              <span style={{color: '#fff', fontWeight: 800, fontSize: 20, letterSpacing: 1.5, fontFamily: 'Arial Black, Arial, sans-serif', textShadow: '0 1px 4px rgba(0,0,0,0.10)'}}>SHEHRITY</span>
            </div>
            {!isMenuOpen && (
              <button
                className={styles.mobileMenuIconBtn}
                aria-label="Open menu"
                style={{
                  background: 'linear-gradient(135deg, #0C3C78 70%, #123E7C 100%)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 16px rgba(12,60,120,0.18)',
                  border: '2px solid #fff',
                  zIndex: 10003,
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'box-shadow 0.18s, background 0.18s',
                  padding: 0,
                }}
                onClick={() => setIsMenuOpen(true)}
                onMouseDown={e => e.currentTarget.style.boxShadow = '0 2px 8px #0C3C78'}
                onMouseUp={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,60,120,0.18)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,60,120,0.18)'}
              >
                <Menu size={30} color="#fff" />
              </button>
            )}
          </div>

          {/* Desktop nav */}
          <div className="d-none d-md-flex align-items-center justify-content-center w-100" style={{gap: '32px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
              <Link to="/services" className={styles.link}>
                Services
              </Link>
              <Link to="/info" className={styles.link}>
                Info
              </Link>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              {/* Start Screening Button */}
              <button 
                className={styles.screeningBtn}
                onClick={() => navigate('/screening')}
                style={{transition: 'background 0.2s, color 0.2s'}}
              >
                Start Screening
              </button>
              {/* Login/Logout Button */}
              {user && user.email ? (
                <button className="btn" style={{marginLeft: 8, borderRadius: 24, fontWeight: 600, padding: '6px 22px', background: '#0C3C78', color: '#fff', border: 'none'}} onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-outline-primary" style={{marginLeft: 8, borderRadius: 24, fontWeight: 600, padding: '6px 22px'}} onClick={() => navigate('/login')}>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}>
            <div
              className={`${styles.mobileMenuDrawer} ${isMenuOpen ? styles.open : ''}`}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.mobileMenuHeader}>
                <img src={logo} alt="Logo" style={{height: 36, marginRight: 8}} />
                <span className={styles.mobileMenuLogo}>SHEHRITY</span>
                <button
                  className={styles.mobileMenuCloseBtn}
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={32} />
                </button>
              </div>
              <div className={styles.mobileMenuLinks}>
                <Link to="/" className={styles.mobileMenuLink} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className={styles.mobileMenuLink} onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/services" className={styles.mobileMenuLink} onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/info" className={styles.mobileMenuLink} onClick={() => setIsMenuOpen(false)}>
                  Info
                </Link>
              </div>
              <div className={styles.mobileMenuActions}>
                <button
                  className={styles.mobileMenuBtn}
                  onClick={() => { setIsMenuOpen(false); navigate('/screening'); }}
                >
                  Start Screening
                </button>
                {user && user.email ? (
                  <button
                    className={`${styles.mobileMenuBtn} ${styles.mobileMenuLoginBtn}`}
                    onClick={() => { setIsMenuOpen(false); handleLogout(); }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className={`${styles.mobileMenuBtn} ${styles.mobileMenuLoginBtn}`}
                    onClick={() => { setIsMenuOpen(false); navigate('/login'); }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;