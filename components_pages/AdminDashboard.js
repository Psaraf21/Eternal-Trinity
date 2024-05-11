// src/components/admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
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

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        {bookings.map(booking => (
          <div key={booking.id}>
            <p>User: {booking.userId}</p>
            <p>Date: {booking.date}</p>
            {/* Display other relevant booking information */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
