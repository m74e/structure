
import React from "react";
import "./progressCard.css";
const progressCard = ({ children, marginTop = 0 ,onClick }) => {
  return (
    <div className="progressCard1" style={{ marginTop }} onClick={onClick}>
      {children}
    </div>
  );
};

export default progressCard;
