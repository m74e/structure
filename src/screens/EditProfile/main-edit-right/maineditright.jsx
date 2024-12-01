import React from "react";
import "./maineditright.css";
import CircalProgress from "/public/CircalProgress.svg";

export default function maineditright() {
  return (
    <div className="edit-right-box">
      <h1>Your Activity</h1>
      <div className="progress-position">
        <img src={CircalProgress} />
      </div>

      
    </div>
  );
}
