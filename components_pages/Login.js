import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image123 from "../images/temples/Akshardham-Temple.jpg";
import Header from "./Header";
import "../css/Logginn.css";
import { Link } from 'react-router-dom';
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("Login successful:", data);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        const data = await response.json();
        setError(data.message);
        setShowPopup(true);
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setError("");
  };

  return (
    <div>
      <Header />
      <div className="Loggin_pages">
        <div className="Slideer_images">
          <img src={image123} alt="" />
        </div>
        <div className="login-container">
          <h2>Login</h2>
          <input
            className="Logggin_input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Logggin_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Logggin_button" onClick={handleLogin}>Login</button>
          <Link className="nav_link_admin_login" to="/dashboard">
         Admin
        </Link>
        </div>
      </div>
      
      {/* Popup for displaying error message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p>{error}</p>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

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
};

export default Login;

