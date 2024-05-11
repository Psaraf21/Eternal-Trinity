import React, { useState, useEffect } from "react";
// import Header from "./Header";
import "../css/Dashboard.css";
import Admin_Header from "./Admin_header";
const Dashboard = () => {
  const [latestHappening, setLatestHappening] = useState("");
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {
    fetchDashboardItems();
  }, []);

  const fetchDashboardItems = async () => {
    try {
      const response = await fetch("http://localhost:3003/dashboard");
      if (!response.ok) {
        throw new Error("Failed to fetch dashboard items");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddLatestHappening = async () => {
    try {
      const response = await fetch("http://localhost:3003/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "Latest Happening", content: latestHappening }),
      });
      if (!response.ok) {
        throw new Error("Failed to add latest happening");
      }
      fetchDashboardItems(); // Refresh dashboard items after adding
      setLatestHappening("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddEvent = async () => {
    try {
      const response = await fetch("http://localhost:3003/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "Event", content: newEvent }),
      });
      if (!response.ok) {
        throw new Error("Failed to add event");
      }
      fetchDashboardItems(); // Refresh dashboard items after adding
      setNewEvent("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteLatestHappening = async (index) => {
    try {
      const response = await fetch(`http://localhost:3003/dashboard/${index}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete latest happening");
      }
      fetchDashboardItems(); // Refresh dashboard items after deletion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <Admin_Header/>
      <div className="dashboard">
        <h1 className="title_Events_Update">Dashboard</h1>
        <div className="add-section">
          <h2 className="add-sectionss">Add Latest Happening</h2>
          <textarea
            rows="3"
            value={latestHappening}
            onChange={(e) => setLatestHappening(e.target.value)}
            placeholder="Enter the latest happening..."
          ></textarea>
          <button onClick={handleAddLatestHappening}>Add Latest Happening</button>
        </div>
        <div className="add-section">
          <h2 className="add-sectionss">Add Event</h2>
          <textarea
            rows="3"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter the event details..."
          ></textarea>
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
        <div className="events-section">
          <h2>Events and Latest Happenings</h2>
          {events.map((event, index) => (
            <div key={index} className="event">
              <h3 style={{margin:"10px 10px 10px 10px"}}>{event.type} :</h3>
              <p>{event.content}</p>
              {/* {event.type === "Latest Happening" && (
                <button onClick={() => handleDeleteLatestHappening(index)}>Delete Latest Happening</button>
              )} */}
            </div>
          ))}
        </div>
      </div>
      <footer className="footer_Dashboard_page">
        <div className="container_Dashboard_page">
          <p className="copyright_Dashboard_page">
            © {new Date().getFullYear()} Temple Name. All Rights Reserved.
          </p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
