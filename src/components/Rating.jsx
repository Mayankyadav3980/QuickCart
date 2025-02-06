import React from "react";

const Rating = ({ rating }) => {
  return (
    <span>
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>⭐️</span>
      ))}
    </span>
  );
};

export default Rating;
