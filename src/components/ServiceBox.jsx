import React from "react";

const ServiceBox = ({ title, image, description }) => {
  return (
    <div className="serviceBox">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ServiceBox;
