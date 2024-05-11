import React, { useState } from 'react';
import axios from 'axios';
import "../css/AddHotel.css"
import Admin_Header from './Admin_header';
function AddHotel() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        roomsAvailable: '',
        location: '',
        image: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/hotels', formData);
            setFormData({
                name: '',
                price: '',
                roomsAvailable: '',
                location: '',
                image: '',
                description: ''
            });
            alert('Hotel added successfully!');
        } catch (error) {
            console.error('Error adding hotel:', error);
        }
    };

    return (
        <div>
            <div className='add_hotel_background_color'>
            <div className="add-hotel-container">
            <Admin_Header/>
            <h2 className='Add_a_new_hotel'>Add a New Hotel</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="roomsAvailable">Rooms Available</label>
                    <input type="number" id="roomsAvailable" name="roomsAvailable" placeholder="Rooms Available" value={formData.roomsAvailable} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" id="image" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className='Add_hotel_button'>Add Hotel</button>
            </form>
        </div>
            </div>
        </div>
      
    );
}

export default AddHotel;