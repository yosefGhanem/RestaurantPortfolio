import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Assuming App.js is your main component
import { initializeTimes, updateTimes } from './BookingForm'; // Import the utility functions
import Form from './components/BookingForm'; // Import the Form component from BookingForm.js

describe('BookingForm Component', () => {
  test('should render without errors', () => {
    render(<Form availableTimes={['17:00', '18:00']} dispatchTimes={() => {}} />);
    // Check if the BookingForm component renders without errors
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  test('should handle form submission', () => {
    const dispatchTimesMock = jest.fn();
    render(<Form availableTimes={['17:00', '18:00']} dispatchTimes={dispatchTimesMock} />);
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    // Fill in form fields
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '3' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if the form fields are cleared after submission
    expect(dateInput.value).toBe('');
    expect(timeInput.value).toBe('');
    expect(guestsInput.value).toBe('');
    expect(occasionInput.value).toBe('');

    // Check if dispatchTimes function was called with the selected date
    expect(dispatchTimesMock).toHaveBeenCalledWith('2023-10-01');
  });

  // Add more BookingForm component tests here
});

describe('BookingForm Utility Functions', () => {
  test('should initialize times correctly', () => {
    const initialState = initializeTimes();
    const expectedInitialState = [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
    expect(initialState).toEqual(expectedInitialState);
  });

  test('should update times correctly', () => {
    const state = ['12:00', '13:00', '14:00'];
    const selectedDate = '2023-10-01';
    const updatedTimes = updateTimes(state, selectedDate);
    // In this test case, the updateTimes function should return the same state
    expect(updatedTimes).toEqual(state);
  });

  // Add more tests for the initializeTimes and updateTimes functions as needed
});

// You can also add more tests for the App component and other components if needed
