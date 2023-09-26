// BookingForm.js

import React, { useState, useEffect } from 'react';

// Define a fetchAPI function (replace with your actual API logic)
const fetchAPI = (date) => {
  // For demonstration, return some dummy data
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function BookingForm({ dispatchTimes }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // Fetch available times for today's date when the component mounts
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    
    // Use the fetchAPI function to fetch available times
    const times = fetchAPI(currentDate);
    
    // Update the available times state
    setAvailableTimes(times);
  }, []); // Empty dependency array to run this effect once on mount

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Number of Guests:', numberOfGuests);
    console.log('Selected Occasion:', selectedOccasion);

    setSelectedDate('');
    setSelectedTime('');
    setNumberOfGuests(1);
    setSelectedOccasion('');

    // You can implement the API communication logic here to submit the form data
  };

  return (
    <div className="reserve-form">
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="res-date">Choose date</label><br />
          <input
            type="date"
            id="res-date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              
              // Use the fetchAPI function to fetch available times when the date changes
              const times = fetchAPI(e.target.value);
              
              // Update the available times state
              setAvailableTimes(times);
            }}
            aria-labelledby="res-date-label"
          />
          <label id="res-date-label" htmlFor="res-date">Select a date for your reservation</label><br />
          <label htmlFor="res-time">Choose time</label><br />
          <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label><br />
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={handleGuestsChange}
            aria-labelledby="guests-label"
          />
          <label id="guests-label" htmlFor="guests">Number of guests (1-10)</label><br />
          <label htmlFor="occasion">Occasion</label><br />
          <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" disabled={!numberOfGuests} />
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
