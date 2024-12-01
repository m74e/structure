import React, { useState } from "react";
import "./DashBoardModel.css";
import ArrowDashBoard from "/public/ArrowDashBoardModa.svg";
import Sara from "/public/sara.svg";
const DashBoardModel = ({ setIsOpen, isOpen }) => {
  const FreelancerApplied = [
    {
      id: 1,
      name: "Sara Saad",
      job: "UIUX Designer",
    },
    {
        id: 2,
        name: "Mohamed ali",
        job: "UIUX Designer",
      },
      {
        id: 3,
        name: "Ali Saad",
        job: "UIUX Designer",
      },
  ];
  return (
    <>
      <div className="flex-side-modal">
        <div className="over-Lay"></div>
        <div className="main-DashBoardModel">
          <div className="inside-DashBoardModel">
            <div className="name-inside-DashBoardModel">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="close-inside-DashBoardModel"
              >
                <img src={ArrowDashBoard} alt="" />
              </button>
              <h2>Project Name</h2>
            </div>
            <div className="allStatesOfDashBoardModel">
              <div className="stateOfDashBoardModel">
                <div className="greenDotDashBoardModel"></div>
                <h4>
                  Status :{" "}
                  <span className="greenDotDashBoardModelSpan">Pending</span>
                </h4>
              </div>
              <div className="stateOfDashBoardModel">
                <div className="greenDotDashBoardModel"></div>
                <h4>
                  Timeline :{" "}
                  <span className="greenDotDashBoardModelSpanForTime">
                    2 months
                  </span>
                </h4>
              </div>
            </div>
            <div className="centerLineDashBoardModel">
              <div className="lineDashBoardModel"> </div>
            </div>
            <div className="ProjectDescriptionModal">
              <h4>Project Description :</h4>
              <p className="paraghraphProjectDescriptionModal">
                Develop an app for daily task management.....
                <span className="spanProjectDescriptionModal">see more</span>
              </p>
            </div>
            <div className="centerLineDashBoardModel">
              <div className="lineDashBoardModel"> </div>
            </div>
            <div className="allFreelancerApplied">
              <h3>3 Freelancer Applied:</h3>
            </div>{" "}
            {FreelancerApplied?.map((i) => (
              <div className="FreelancerApplied">
                <div className="imgAndName">
                  <img className="imgForFreelancerApplied" src={Sara} alt="" />
                  <div>
                    <h4 className="headFreelancerApplied">{i.name}</h4>
                    <p className="paraFreelancerApplied">{i.job}</p>
                  </div>
                </div>
                <div className="btnsForSideModal">
                  <button className="btnAccept">Accept</button>
                  <button className="btnDecline">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoardModel;
