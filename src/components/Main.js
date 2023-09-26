import React, { useReducer, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import restaurantFood from '../assets/restauranfood.jpg';
import BookingForm from '../components/BookingForm';

function Main() {
  const updateTimes = (selectedDate) => {
    // For now, return the same available times regardless of the date
    return [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
  };

  const initializeTimes = () => {
    return updateTimes(''); // Initialize with available times for an empty date
  };

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, '', initializeTimes);

  useEffect(() => {
    // You can dispatch the initial times directly without calling initializeTimes
    dispatchTimes({ type: 'SET_TIMES', times: initializeTimes() });
  }, []); // Use an empty dependency array to run this effect only once

  return (
    <main className='main'>
      <div className='main-content'>
        <div className='main-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <article>
            Little Lemon is a family-owned restaurant, located in the heart of the city, offering unique dishes.
          </article>
          <Link to="/booking">
            <button className='main-btn'>Reserve a table</button>
          </Link>
        </div>
        <div className='main-image'>
          <img src={restaurantFood} alt="Restaurant Food" />
        </div>
      </div>
      <Routes>
        <Route path='/booking' element={<BookingForm dispatchTimes={dispatchTimes} />} />
      </Routes>
    </main>
  );
}

export default Main;
