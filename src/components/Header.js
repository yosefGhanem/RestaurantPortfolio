import React from 'react';
import logo from "../assets/Logo.svg"
import {Routes, Route, Link} from 'react-router-dom';
// Header components
import Homepage from "../header-comps/homepage";
import About from "../header-comps/about";
import Login from "../header-comps/login";
import Menu from "../header-comps/menu";
import OrderOnline from "../header-comps/order-online";
import Reservations from "../header-comps/reservations";
// Route should not include.j

function Header() {
  return (
    <>
      <header className='header'>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order-online">Order online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}



export default Header;
// Instead of using a href to refresh the page, use Route instead
// You can review : https://www.coursera.org/learn/react-basics/lecture/epk9z/the-navbar
// move to index.js and add <BrowserRouter>