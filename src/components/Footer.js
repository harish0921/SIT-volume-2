import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">
              <i className="bi bi-mortarboard me-2"></i>
              SIT Shanthi IT Solution
            </h5>
            <p className="text-muted">
              Empowering Education Through Technology. We provide cutting-edge educational 
              technology solutions to transform learning experiences.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={link.path} className="text-muted text-decoration-none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white" aria-label="Facebook">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-light" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              &copy; {currentYear} SIT Shanthi IT Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
