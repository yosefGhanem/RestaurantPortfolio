import React from 'react';
import logo from "../assets/Logo.png"


function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="reservations.html">Reservations</a></li>
          <li><a href="order-online.html">Order Online</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
    </header>
  );
}

export default Header;