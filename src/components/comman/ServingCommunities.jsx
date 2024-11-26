import React from "react";
import "../../styles/ServingCommunities.css";

const ServingCommunities = () => {
  return (
    <div className="serving-communities">
      <h2>Now serving communities across the USA and Canada!</h2>
      <div className="images-container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/4bd0ad21-bb0f-4360-ac18-04914c287917/married-couple-holding-hands-side-view.jpg?format=750w"
          alt="Couple holding hands"
          className="left-image"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/658096ce4f6f866736a17b0d/a2f60830-62f3-4e09-97b6-cfbe721dc86f/golden-bands-hands-groom-bride.jpg?format=750w"
          alt="Golden bands in hand"
          className="right-image"
        />
      </div>
    </div>
  );
};

export default ServingCommunities;
