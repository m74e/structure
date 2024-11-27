
import React from "react";
import "./progressCard.css";
const progressCard = ({ children, marginTop = 0 }) => {
  return (
    <div className="progressCard1" style={{ marginTop }}>
      {children}
    </div>
  );
};

export default progressCard;
