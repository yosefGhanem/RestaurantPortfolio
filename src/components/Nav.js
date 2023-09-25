import React from 'react';
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.jpg"
import lemonDessert from "../assets/lemon dessert.jpg"

// Chnages sizes of three images to 133

function  Nav() {
  return (
    <nav className='nav'>
      <div className='specials-container'>
        <h2>This week specials!</h2>
        <button className='button'>Online menu</button>
      </div>

   <div className='image-container'>
      <div className='image-item'>
        <img src={greekSalad} alt="Greek Salad" />
        <h3><strong>Greek Salad</strong> <span className='price'>$10</span></h3>
        <p>Salad Description</p>
        <b>Order delivery</b><span className='price-delivery'> 🚲</span>
      </div>

      <div className='image-item'>
        <img src={bruchetta} alt="Bruchetta" />
        <h3><strong>Bruchetta</strong> <span className='price'>$12</span></h3>
        <p>bruchetta description</p>
        <b>Order delivery</b><span className='price-delivery'> 🚲</span>
      </div>

      <div className='image-item'>
        <img src={lemonDessert} alt="Lemon Dessert" />
        <h3><strong>Lemon Dessert</strong> <span className='price'>$8</span></h3>
        <p>🍋 dessert description</p>
        <b>Order delivery</b><span className='price-delivery'> 🚲</span>
      </div> 
    </div>
    </nav>
  );
}

export default Nav;
