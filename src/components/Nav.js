import React from 'react';
import greekSalad from "../assets/greek salad.jpg"


function Nav() {
  return (
    <nav className='nav'>
      <div className='specials-container'>
        <h2>This week specials!</h2>
        <button>Online menu</button>
      </div>

      <div className='image-container'>
        <div className='image-item'>
          <img src={greekSalad} alt="Recipe 1" />
          <h3><strong>Recipe Name 1</strong> $10</h3>
          <p>Salad Description 1</p>
          <p>Order for delivery text $12</p>
        </div>

        <div className='image-item'>
          <img src={greekSalad} alt="Recipe 2" />
          <h3><strong>Recipe Name 2</strong> $12</h3>
          <p>Salad Description 2</p>
          <p>Order for delivery text $15</p>
        </div>

        <div className='image-item'>
          <img src={greekSalad} alt="Recipe 3" />
          <h3><strong>Recipe Name 3</strong> $8</h3>
          <p>Salad Description 3</p>
          <p>Order for delivery text $10</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
