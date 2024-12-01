import React from "react";
import "./maineditprof.css";
import Maineditleft from "../main-edit-left/maineditleft.jsx";
import Maineditright from "../main-edit-right/maineditright.jsx";
const maineditprof=()=> {
  return (
    <>
      <div className="above-all-1">
        <div className="main-user-container-es-1">
          <div className="main-user-content-es-1">
            <Maineditleft />
            <Maineditright />
          </div>
        </div>
      </div>
    </>
  );
}
export default maineditprof