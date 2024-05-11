// import React, { useState } from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom'; // Import useHistory hook for redirection
// import '../css/CheckOut.css'
// function Checkout({ totalPrice }) {
//   const [shippingInfo, setShippingInfo] = useState({
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: ''
//   });
//   const [showPayment, setShowPayment] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const Navigate = useNavigate(); // Initialize useHistory

//   const handleInputChange = (e) => {
//     setShippingInfo({
//       ...shippingInfo,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Redirect to payment page
//       Navigate('/payment');
//     } catch (error) {
//       console.error('Error redirecting to payment page:', error);
//     }
//   };

//   const handlePaymentSuccess = () => {
//     setPaymentSuccess(true);
//   };

//   return (
//     <div>
//       <div className='Checkout_main_box'>
//         <h2>Checkout</h2>
//         <form onSubmit={handleSubmit}>
//           {/* <label htmlFor="name">Name:</label> */}
//           <input type="text" id="name" name="name" placeholder="Enter your name" value={shippingInfo.name} onChange={handleInputChange} />

//           {/* <label htmlFor="address">Address:</label> */}
//           <input type="text" id="address" name="address" placeholder="Enter your address" value={shippingInfo.address} onChange={handleInputChange} />

//           {/* <label htmlFor="city">City:</label> */}
//           <input type="text" id="city" name="city" placeholder="Enter your city" value={shippingInfo.city} onChange={handleInputChange} />

//           {/* <label htmlFor="state">State:</label> */}
//           <input type="text" id="state" name="state" placeholder="Enter your state" value={shippingInfo.state} onChange={handleInputChange} />

//           {/* <label htmlFor="zip">ZIP Code:</label> */}
//           <input type="text" id="zip" name="zip" placeholder="Enter your ZIP code" value={shippingInfo.zip} onChange={handleInputChange} />

//           <p>Total Price: ${totalPrice}</p>
//           <button type="submit">Proceed to Payment</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

import React, { useState } from 'react';
import axios from 'axios';
import Payment from './Payment'; // Import the Payment component
import '../css/CheckOut.css'
function Checkout({ totalPrice }) {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set showPayment to true to show the Payment component
      setShowPayment(true);
    } catch (error) {
      console.error('Error opening payment popup:', error);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    // Perform any additional actions upon payment success
  };

  return (
    <div>
      <div className='Checkout_main_box'>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Render the input fields for shipping information */}
          <input type="text" name="name" placeholder="Name" value={shippingInfo.name} onChange={handleInputChange} />
          <input type="text" name="address" placeholder="Address" value={shippingInfo.address} onChange={handleInputChange} />
          <input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleInputChange} />
          <input type="text" name="state" placeholder="State" value={shippingInfo.state} onChange={handleInputChange} />
          <input type="text" name="zip" placeholder="ZIP Code" value={shippingInfo.zip} onChange={handleInputChange} />
          <p>Total Price: ${totalPrice}</p>
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
      {/* Render the Payment component as a popup if showPayment is true */}
      {showPayment && <Payment onPaymentSuccess={handlePaymentSuccess} />}
    </div>
  );
}

export default Checkout;
