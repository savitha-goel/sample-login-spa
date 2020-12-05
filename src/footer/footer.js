import React from 'react';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="float-left">
        <p className="footer-text">&copy;{'  ' + currentYear} Test. All Rights Reserved.</p>
      </div>
      <div className="info-section float-right">
        <p className="footer-text">&copy;{'  ' + currentYear} Test. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
