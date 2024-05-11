import React, { useState, useEffect } from 'react';
import Header from './Header';
import "../css/EventsPage.css";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3003/dashboard");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // gsap.from('.title', { duration: 1, y: -50, ease: 'power2.easeIn' });
    // gsap.from('.nav-link', { duration: 1, opacity: 0, y: -50, stagger: 0.2, ease: 'power2.out' });
  }, []);
  return (
    <div>
      <Header/>
      <div className='title_Events_Update'><h1>Events update</h1></div>
      <div className='Notifications'>
        {events.map((event, index) => (
          <div key={index}>
            {/* <h2>{event.type}</h2> */}
            <p className='events_information_showcase'>{event.content}</p>
          </div>
        ))}
      </div>
      <footer className="footer_Events_page">
        <div className="container_Events_page">
          <p className="copyright_Events_page">© {new Date().getFullYear()} Temple Name. All Rights Reserved.</p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default EventsPage;
