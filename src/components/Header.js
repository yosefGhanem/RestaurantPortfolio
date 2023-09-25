import React from 'react';
import logo from "../assets/Logo.png"
import {Routes, Route, Link} from 'react-router-dom';
// Header components
import Homepage from "../header-comps/homepage";
import About from "../header-comps/about";
import Login from "../header-comps/login";
import Menu from "../header-comps/menu";
import OrderOnline from "../header-comps/order-online";
import Reservations from "../header-comps/reservations";


function Header() {
  return (
    <div>
    <header className='header'>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
          <li><Link to="../header-comps/homepage.js" className='link'>Home</Link></li>
          <li><Link to="../header-comps/about.js" className='link'>about</Link></li>
          <li><Link to="../header-comps/menu.js" className='link'>Menu</Link></li>
          <li><Link to="../header-comps/reservations.js" className='link'>Reservations</Link></li>
          <li><Link to="../header-comps/order-online.js" className='link'>Order online</Link></li>
          <li><Link to="../header-comps/login.js" className='link'>Login</Link></li>
        </ul>
    </header>
    <Routes>
      <Route path='../header-comps/homepage.js' element={<Homepage />}></Route>
      <Route path='../header-comps/about.js' element={<About />}></Route>
      <Route path='../header-comps/Login.js' element={<Login />}></Route>
      <Route path='../header-comps/Menu.js' element={<Menu />}></Route>
      <Route path='../header-comps/OrderOnline.js' element={<OrderOnline />}></Route>
      <Route path='../header-comps/Reservations.js' element={<Reservations />}></Route>
    </Routes>
    </div>
  );
}



export default Header;
// Instead of using a href to refresh the page, use Route instead
// You can review : https://www.coursera.org/learn/react-basics/lecture/epk9z/the-navbar
// move to index.js and add <BrowserRouter>