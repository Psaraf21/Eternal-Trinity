import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
import '../css/header.css';
// import BackgroundMusicComponent from '../music/Background.mp3'
const Header = ({ isLoggedIn, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
    // gsap.from('.title', { duration: 1, y: -50, ease: 'power2.easeIn' });
    // gsap.from('.nav-link', { duration: 1, opacity: 0, y: -50, stagger: 0.2, ease: 'power2.out' });
    // gsap.from(bookRef.current, {
    //   opacity: 0,
    //   duration: 2.5,
    //   ease: "back.out(1.7)",
    //   y: -250,
    //   scrollTrigger: {
    //     trigger: bookRef.current,
    //     scroller: "body",
    //     // markers: true,
    //     start: "top 50%",
    //     end: "bottom 20%",
    //   },
    // });
  // }, []);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header>
      <h2 className="title">EternalTrinity</h2>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/booking">
          Booking
        </Link>
        <Link className="nav-link" to="/events">
          Events
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoggedIn ? (
        <div>
          <p>Logged in as user</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div className="logReg">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
      {/* <BackgroundMusicComponent/>  */}
    </header>
  );
};

export default Header;
