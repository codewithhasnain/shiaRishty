import React from "react";
import "../../styles/EasySteps.css";

function EasySteps() {
  const steps = [
    {
      id: 1,
      image: "https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/e96942da-aa17-4dbd-8dfc-ce500d8bb713/1_A.png?format=300w",
      title: "Sign up for Shia Rishty",
      description: "Begin your matrimonial journey here!",
    },
    {
      id: 2,
      image: "https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/b690100b-038f-4514-806a-e4ee7592dec4/2_A.png?format=300w",
      title: "Complete Bio",
      description: "Bio includes a questionnaire that's used by our AI to pair you to your best match",
    },
    {
      id: 3,
      image: "https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/5ebe2edd-6403-4a5f-aa2d-aaf4bc6321f5/3_A.png?format=300w",
      title: "Candidate Review",
      description: "Shia Rishty staff contact community references to ensure the candidate is a fit for the platform",
    },
    {
      id: 4,
      image: "https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/c57b99b4-7733-4618-ad34-dc1f740d08a6/4_A.png?format=300w",
      title: "Matching Begins!",
      description: "You will be contacted after the AI Algorithm compiles candidate information and suggests the best match",
    },
  ];

  return (
    <div className="easy-steps">
      <img
        src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/60e9ea71-0fbb-4a83-98e1-a6721ac57d48/2_Green+copy.png?format=1000w"
        alt="Left plant"
        className="plant left-plant"
      />
      <div className="steps-container">
        <h2>Find Your Match in 4 Easy Steps</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <img src={step.image} alt={`Step ${step.id}`} className="step-image" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/60e9ea71-0fbb-4a83-98e1-a6721ac57d48/2_Green+copy.png?format=1000w"
        alt="Right plant"
        className="plant right-plant"
      />
    </div>
  );
}

export default EasySteps;
