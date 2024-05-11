import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import '../css/parshad.css'
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [parshads, setParshads] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    // Fetch parshad details from backend API
    axios.get('http://localhost:5001/api/parshads')
      .then(response => {
        setParshads(response.data);
      })
      .catch(error => {
        console.error('Error fetching parshad details:', error);
      });
  }, []);

  const handleAddToCart = async (parshadId) => {
    try {
      // Send a POST request to add parshad to cart
      await axios.post('http://localhost:5001/api/cart/add', { parshadId, quantity: 1 });
      console.log('Parshad added to cart successfully:', parshadId);
    } catch (error) {
      console.error('Error adding parshad to cart:', error);
    }
  };
  const handleNavigate = () => {
    navigate(`/ccart`);
};
  return (
    <div className='hero'>
      <Header/>
      <div className='main_userdashboard'>
        <h2 className='ParshadBooking'>Parshad Booking</h2>
        <button className="search-button-2" onClick={handleNavigate}>cart</button>
      </div>
      
      <div className='parshad_box'>
        {parshads.map(parshad => (
          <div key={parshad._id} className='parshad__box'>
            <div> <img src={parshad.image} alt={parshad.name} /></div>
           <div className='parshad_detail_box'><h3>{parshad.name}</h3>
            <p>{parshad.description}</p>
            <p>Price: ${parshad.price}</p>
            <button onClick={() => handleAddToCart(parshad._id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
