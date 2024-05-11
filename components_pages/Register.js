import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Reggister.css";
import Header from "./Header";
import image123 from "../images/temples/Akshardham-Temple.jpg";

const RegisterPage = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !dob || !password || !confirmPassword || !phoneNumber) {
      setError("Please fill in all fields.");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          dob,
          password,
          confirmPassword,
          phoneNumber,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful:", data);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError(data.message);
        setShowPopup(true);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      setShowPopup(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="Register_row">
        <div className="Slideer_images_Register">
          <img src={image123} alt="" />
        </div>
        <div className="reggister-container">
          <h2>Register</h2>
          <input
            className="reggister_input"
            type="text"
            id="Regsgsg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="reggister_input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="reggister_input"
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            className="reggister_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="reggister_input"
            type="password"
            placeholder="Retype Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className="reggister_input"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="reggister_button" onClick={handleRegister}>Register</button>
        </div>
      </div>
      <footer className="footer_Events_page">
        <div className="container_Events_page">
          <p className="copyright_Events_page">
            © {new Date().getFullYear()} Temple Name. All Rights Reserved.
          </p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>
      </footer>
      {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
      <p>{error}</p>

      <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
    </div>
  </div>
)}

    </div>
  );
};

export default RegisterPage;
