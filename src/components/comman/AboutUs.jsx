import React from 'react';
import "../../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>Who We Are</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-text">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To establish a contemporary technological platform while remaining committed to the traditions and
              principles of Islamic matrimony, carefully selecting two individuals with the intention of facilitating
              marriage.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To connect two spiritual individuals for the purpose of marriage in an Islamically tech-convenient fashion.
            </p>
          </div>
        </div>
        <div className="about-us-image">
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/ca597bdf-1fd3-4be5-ba0a-7dd3fcbe47bb/pablo-heimplatz-fVL0zZdk-R4-unsplash.jpg?format=1500w"
            alt="Couple holding hands"
            className="foreground-image"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/5e2aaa5f-9e5a-42e7-ba4c-6cec1b098f5c/tijana-drndarski-JWmNS05a_Hs-unsplash.jpg?format=1500w"
            alt="Flowers background"
            className="background-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
