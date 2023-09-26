import React from 'react';
import BookingForm from "../assets/components/BookingForm.js"

function BookingPage() {
    return (
        <div>
        {/* Additional content before the form */}
        <h1>Welcome to the Booking Page</h1>
        <p>Fill out the form below to make a reservation.</p>
  
        {/* Render the BookingForm component */}
        <BookingForm />
  
        {/* Additional content after the form */}
        <p>Thank you for choosing our services.</p>
      </div>
      );
}
export default BookingPage;