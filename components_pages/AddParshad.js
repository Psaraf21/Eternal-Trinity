import React, { useState } from 'react';
import axios from 'axios';
import Admin_Header from './Admin_header';
import '../css/Admin_add_parshad.css'
function AddParshad() {
  const [parshadData, setParshadData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setParshadData({
      ...parshadData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled
    if (!parshadData.name || !parshadData.description || !parshadData.price || !parshadData.quantity || !parshadData.image) {
      setError('All fields are required');
      return;
    }
    // Send a POST request to backend to add Parshad
    axios.post('http://localhost:5001/api/parshads', parshadData)
  .then(response => {
    console.log('Parshad added successfully:', response.data);
    // Clear form fields after successful submission
    setParshadData({
      name: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
    });
  })
  .catch(error => {
    console.error('Error adding Parshad:', error);
  });
      
  };

  return (
    <div>
      <div>
      <Admin_Header/>
      <div className='AddParshad_title'><h2>Add Parshad</h2></div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={parshadData.name} onChange={handleInputChange} className='Testng121'/>
        <input type="text" name="description" placeholder="Description" value={parshadData.description} onChange={handleInputChange}className='Testng122' />
        <input type="number" name="price" placeholder="Price" value={parshadData.price} onChange={handleInputChange} className='Testng123'/>
        <input type="number" name="quantity" placeholder="Quantity" value={parshadData.quantity} onChange={handleInputChange} className='Testng124'/>
        <input type="text" name="image" placeholder="Image URL" value={parshadData.image} onChange={handleInputChange} className='Testng125'/>
        <button type="submit" className='Testng126'>Add Parshad</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div>
      {/* <Admin_Footer/> */}
      </div>
    </div>
  );
}

export default AddParshad;
