// BookingPage.js
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import "../css/Booking.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function BookingPage() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/hotels?query=${searchQuery}`);
                setHotels(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchHotels();
    }, [searchQuery]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
    };

    const handleBookNow = (hotelId) => {
        navigate(`/book/${hotelId}`);
    };
    const handleNavigate = () => {
        navigate(`/parshad`);
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='hero'>
            <Header/>
            <div className='search_input_classname'>
                <div className='MAIN_LINE_TEXT_hotel'> <h2 className='MAIN_LINE_TEXT'>Hotels</h2></div>
                <div className="search-container">
                <button className="search-button" onClick={handleNavigate}>Parshad Booking</button>
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search by hotel name or location" 
                        value={searchInput} 
                        onChange={handleSearchInputChange} 
                    />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                    
                </div>
            </div>

            <div className="container2">
                <ul className="hotel-list">
                    {hotels.map((hotel, index) => (
                        <li key={index} className="hotel-item">
                            <h3>{hotel.name}</h3>
                            <img src={hotel.image} alt={hotel.name} />
                            <p>Price: {hotel.price}</p>
                            <p>Rooms Available: {hotel.roomsAvailable}</p>
                            <p>Location: {hotel.location}</p>
                            <p>Description: {hotel.description}</p>
                            <button onClick={() => handleBookNow(hotel._id)}>Book Now</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BookingPage;
