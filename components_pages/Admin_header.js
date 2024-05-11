import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin_Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      if (searchQuery.trim() === '') return; // Prevent unnecessary API calls when search query is empty
      try {
        setLoading(true);
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleHotelSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/booking`);
  };

  const handleTempleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchQuery}&type=temple`);
  };


  return (
    <header>
      <h2 className="title">EternalTrinity</h2>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/add-hotel">
          Dharamshala
        </Link>
        <Link className="nav-link" to="/admin/add-parshad">
          Parshad
        </Link>
      </nav>
      <form onSubmit={handleHotelSearchSubmit}>
        <input
          type="text"
          placeholder="Hotel Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search Hotels</button>
      </form>
      <form onSubmit={handleTempleSearchSubmit}>
        <input
          type="text"
          placeholder="Temple Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search Temples</button>
      </form>
    </header>
  );
};

export default Admin_Header;
