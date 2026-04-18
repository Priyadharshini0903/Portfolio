import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          <span className="mono" style={{ color: 'var(--accent)' }}>©</span>{' '}
          {new Date().getFullYear()} Priyadharshini R
        </p>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/priyadharshini0903-r/" target="_blank" rel="noreferrer" className="footer__link">
            LinkedIn
          </a>
          <a href="https://github.com/Priyadharshini0903" target="_blank" rel="noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="mailto:rpriyadharshini0903@gmail.com" className="footer__link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
