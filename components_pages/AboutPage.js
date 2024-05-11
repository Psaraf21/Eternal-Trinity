import React from "react";
import Header from "./Header";
import "../css/AboutPage.css"
import Pulkit from "../images/Our_images/Pulkit.jpg"
const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className='title_Events_Update'><h1>About Us</h1></div>
      <div className="about-us">
      <section className="story">
        <h2>Our Story</h2>
        <p>
        Our story began with a shared passion for showcasing the beauty and significance of temples. Inspired by the rich cultural heritage and spiritual significance of these sacred places, we embarked on a journey to create a platform where people could explore and connect with temples from around the world.

Driven by a desire to provide a comprehensive resource for temple enthusiasts, we dedicated ourselves to curating detailed information, stunning visuals, and meaningful insights into each temple's history, architecture, and religious significance.

With dedication and perseverance, we've built a vibrant community of temple lovers, united by a common appreciation for the profound cultural and spiritual experiences temples offer. Our journey continues as we strive to expand our platform, enriching the lives of our users through the exploration and celebration of temples worldwide.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
        
          {teamData.map((member) => (
            <div className="team-member" key={member.id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <footer className="footer_About_page">
      <div className="container_About_page">
        <p className="copyright_About_page">© {new Date().getFullYear()} Temple Name. All Rights Reserved.</p>
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </nav>
      </div>
    </footer>
      
    </div>
    
  );
};

const teamData = [
  {
    id: 1,
    image: Pulkit,
    name: "Pulkit Saraf",
    role: "Developer",
    bio: "Visionary leader driving strategic direction and fostering innovation.",
  },
];




export default AboutPage;