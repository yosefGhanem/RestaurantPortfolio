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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="res-date">Choose date:</label>
          <input
            type="date"
            id="res-date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              const times = fetchAPI(e.target.value);
              setAvailableTimes(times);
            }}
            aria-labelledby="res-date-label"//adding aria label for accessibility
            aria-label="On Click"
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time:</label>
          <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={handleGuestsChange}
            aria-labelledby="guests-label"//adding aria label for accessibility
            aria-label="On Click"
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Make Your Reservation" disabled={!numberOfGuests} />
        </div>
      </form>
    </div>
    );
}

export default BookingForm;
