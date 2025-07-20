import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light border-top" style={{background: 'linear-gradient(0deg, #f8f9fa 80%, #20446C 100%)', fontSize: '1rem'}}>
      <div className="container py-5">
        <div className="row g-4 flex-column flex-md-row">
          {/* Company Info */}
          <div className="col-12 col-md-6 mb-4 mb-md-0" style={{textAlign: 'center', textAlignMd: 'left'}}>
            <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
              <Shield className="me-2" size={32} color="#20446C" />
              <span className="fs-4 fw-bold text-primary">Shehrity Security</span>
            </div>
            <p className="text-secondary mb-4 mw-100" style={{fontSize: '1rem'}}>
              Professional security services you can trust. We provide comprehensive training and 
              screening for all our security personnel to ensure the highest standards of service.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Facebook className="social-icon" size={24} color="#20446C" />
              <Twitter className="social-icon" size={24} color="#20446C" />
              <Linkedin className="social-icon" size={24} color="#20446C" />
              <Instagram className="social-icon" size={24} color="#20446C" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4 mb-md-0" style={{textAlign: 'center', textAlignMd: 'left'}}>
            <h5 className="fw-semibold mb-3 text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-text-primary" style={{fontSize: '1rem'}}>About Us</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-text-primary" style={{fontSize: '1rem'}}>Services</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-text-primary" style={{fontSize: '1rem'}}>Training Programs</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-text-primary" style={{fontSize: '1rem'}}>Careers</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-text-primary" style={{fontSize: '1rem'}}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3" style={{textAlign: 'center', textAlignMd: 'left'}}>
            <h5 className="fw-semibold mb-3 text-primary">Contact Info</h5>
            <div className="d-flex flex-column gap-2 align-items-center align-items-md-start">
              <div className="d-flex align-items-center">
                <Phone className="me-2" size={18} color="#7B2329" />
                <span className="text-secondary" style={{fontSize: '1rem'}}>+1 (555) 123-4567</span>
              </div>
              <div className="d-flex align-items-center">
                <Mail className="me-2" size={18} color="#7B2329" />
                <span className="text-secondary" style={{fontSize: '1rem'}}>info@shehrity.com</span>
              </div>
              <div className="d-flex">
                <MapPin className="me-2 mt-1" size={18} color="#7B2329" />
                <span className="text-secondary" style={{fontSize: '1rem'}}>
                  123 Security Ave<br />Safety City, SC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-top mt-4 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center" style={{fontSize: '0.95rem'}}>
          <p className="text-secondary small mb-md-0 text-center text-md-start">
            © 2024 Shehrity Security Services. All rights reserved.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-end mt-2 mt-md-0">
            <a href="#" className="text-secondary small text-decoration-none hover-text-primary" style={{fontSize: '0.95rem'}}>
              Privacy Policy
            </a>
            <a href="#" className="text-secondary small text-decoration-none hover-text-primary" style={{fontSize: '0.95rem'}}>
              Terms of Service
            </a>
            <a href="#" className="text-secondary small text-decoration-none hover-text-primary" style={{fontSize: '0.95rem'}}>
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Yousef Credit */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="text-secondary small" style={{fontSize: '0.9rem'}}>
            Powered by <span className="text-primary fw-medium">Webmantis</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;