import React from 'react';
import restauranfood from "../assets/restauranfood.jpg"

function Main() {
  return (
    <main className='main'>
      <div className='main-content'>
        <div className='main-text'>
          <h1>Little Lemon</h1>
          <h>Chicago</h>
          <article>
            Little Lemon is a family-owned restaurant, located in the heart of the city, offering unique dishes.
          </article>
          <button value={"submit"}>Reserve a table</button>
        </div>
        <div className='main-image'>
          <img src={restauranfood} alt="Restaurant Food" />
        </div>
      </div>
    </main>
  );
}

export default Main;
