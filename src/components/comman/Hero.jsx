import React from "react";
import "../../styles/Hero.css";
import heroImage from "../../assets/hero1.jpg"; 

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`, 
      }}
    >
      <div className="hero-content">
        <h1>The first AI-powered Shia-Muslim matchmaking platform</h1>
        <p>
          Created to help single Muslims find their partner while maintaining
          trust, respect, and virtue.
        </p>
        <a href="#enroll" className="btn-hero">
          Enroll Today!
        </a>
      </div>
    </section>
  );
};

export default Hero;
