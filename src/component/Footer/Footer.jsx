
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#about">About History Page</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><a href="#contributors">Contributors</a></li>
              <li><a href="#help">Help</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Content</h3>
            <ul>
              <li><a href="#featured">Featured Content</a></li>
              <li><a href="#recent">Recent Changes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Development</h3>
            <ul>
              <li><a href="#stats">Statistics</a></li>
              <li><a href="#source">Source Code</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 History Page. Content is available under Creative Commons Attribution License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;