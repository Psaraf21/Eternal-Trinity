import React, { useState } from 'react';
import axios from 'axios';

function Payment({ onPaymentSuccess }) {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate payment data
      const quantity = 1;
      const price = 100; // Assuming the price is fixed at $100
      const currentDate = new Date().toISOString(); // Get current date in ISO format
      console.log('Payment Data:', {
        quantity,
        price,
        currentDate,
        cardInfo
      });

      // Send payment information to backend to process payment
      const response = await axios.post('http://localhost:5001/api/parshad/payment', {
        ...cardInfo,
        quantity,
        date: currentDate // Pass current date to backend
      });

      console.log('Payment Response:', response.data);
      if (response.status === 200) {
        // Payment successful
        onPaymentSuccess();
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cardNumber" placeholder="Card Number" value={cardInfo.cardNumber} onChange={handleInputChange} />
        <input type="text" name="expiryMonth" placeholder="Expiry Month" value={cardInfo.expiryMonth} onChange={handleInputChange} />
        <input type="text" name="expiryYear" placeholder="Expiry Year" value={cardInfo.expiryYear} onChange={handleInputChange} />
        <input type="text" name="cvv" placeholder="CVV" value={cardInfo.cvv} onChange={handleInputChange} />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
