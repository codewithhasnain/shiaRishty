import React from "react";
import "../../styles/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>What Makes Shia Rishty Different from Other Matrimonial Services?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/45aae21f-ef45-4c28-8084-d417eb94222a/trustt.png?format=300w"
            alt="Trusted Staff"
          />
          <p>Trusted Staff</p>
          <p>Trusted Process</p>
          <p>Privacy is our Priority</p>
        </div>
        <div className="feature-item">
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/0d6dd13b-813b-4395-ad43-8dea71648dfa/w_team.png?format=300w"
            alt="Rigorous vetting process"
          />
          <p>Rigorous vetting process to</p>
          <p>ensure high-quality candidates</p>
          <p>on the platform</p>
        </div>
        <div className="feature-item">
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/c3f9d180-ea55-4ad6-ab1c-9447c28ef0a6/W_AI.png?format=300w"
            alt="Powered by AI"
          />
          <p>Powered by AI to generate the</p>
          <p>best matches based on more</p>
          <p>than 40+ variables</p>
        </div>
        <div className="feature-item">
          <img
            src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/ae2a5c13-1953-48ec-a66d-a9e610ae999a/Connect.png?format=300w"
            alt="Connecting Candidates"
          />
          <p>Connecting Candidates</p>
          <p>across US and Canada</p>
        </div>
      </div>
      <button className="cta-button">
        To learn more about Shia Rishty's features, click here.
      </button>
    </div>
  );
};

export default FeaturesSection;
