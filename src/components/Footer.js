import React from 'react';
import logo from "../assets/Logo.svg"


function Footer() {
  return (
    <footer className='footer'>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
          <li>Doormat Navigation</li>
          <li>Contact</li>
          <li>Social Media Links</li>
        </ul>
        <p>Copyright Little Lemon</p>
    </footer>
  );
}

export default Footer;
