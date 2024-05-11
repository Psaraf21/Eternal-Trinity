// import React from 'react';
import React, { useState } from "react";
import Header from "./Header";
import "../css/ContactPage.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("submit button clicked")
      const response = await fetch("http://localhost:3002/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="title_Events_Update">
        <h1>Contact Us</h1>
      </div>
      <div className="contactUs_query">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="conatct_name-space">Name:</label>
          <input
          className="Contactpage_input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email" className="conatct_name-space">Email:</label>
          <input
           className="Contactpage_input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message" className="conatct_name-space">Message:</label>
          <textarea
           className="Contactpage_input"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="social-icons_box">
        <div className="social-icons">
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
          <a href="#" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube />
          </a>
          <a href="#" target="_blank">
            <FaTelegram />
          </a>
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
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
    </div>
  );
};
export default ContactPage;
