// src/components/admin/ManageBookings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from backend API
    axios.get('/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const cancelBooking = (bookingId) => {
    // Implement logic to cancel booking
    console.log('Canceling booking:', bookingId);
  };

  return (
    <div>
      <h2>Manage Bookings</h2>
      <div>
        {bookings.map(booking => (
          <div key={booking.id}>
            <p>User: {booking.userId}</p>
            <p>Date: {booking.date}</p>
            <p>Parshad Name: {booking.parshadName}</p>
            <p>Quantity: {booking.quantity}</p>
            <p>Price: ${booking.price}</p>
            {/* Display other relevant booking information */}
            <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageBookings;
