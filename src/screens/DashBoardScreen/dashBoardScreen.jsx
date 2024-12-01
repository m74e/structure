import React, { useState } from "react";
import Container from "../../components/Container/container";
import "./dashBoardScreen.modul.css";
import ProgressCard from "../../components/progressCard/progressCard";
import Ali from "/public/Ali.svg";
import Curlsline from "/public/curlsline.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flex, Progress } from "antd";
import MultiRingProgressBar from "../../CustomIcons/MultiRingProgressBar";
import DashBoardModel from "../../UI/DashBoardModel";
const dashBoardScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const projectinfo = [
    {
      id: 1,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
    {
      id: 2,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
    {
      id: 3,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
    {
      id: 4,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
    {
      id: 5,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
    {
      id: 6,
      projectName: "project Name",
      progress: "In Progress",
      name: "Ali Mohammed",
      precint: "50%",
    },
  ];
  const totalProject = [
    {
      id: 1,
      number: 7,
    },
    {
      id: 2,
      number: 4,
    },
    {
      id: 3,
      number: 5,
    },
    {
      id: 4,
      number: 1,
    },
  ];
  const inProgress = [
    {
      id: 1,
      toDo: 35,
      progress: 12,
      done: 53,
    },
  ];
  const percentage = 50;
  return (
    <>
      <Container>
        {isOpen && <DashBoardModel setIsOpen={setIsOpen} isOpen={isOpen} />}
        <div className="dashBoardBox">
          <div className="analysisProgressCard">
            <div className="allProjects">
              <p className="activeAll">All</p>
              <p className="notActive">Pending</p>
              <p className="notActive">InProgress</p>
              <p className="notActive">Completed</p>
            </div>
            <div className="squers">
              {projectinfo?.map((i) => (
                <>
                  {" "}
                  <ProgressCard
                    marginTop={16}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <div className="informationOfFreelancer">
                      <div className="progressInformation">
                        {" "}
                        <h3>{i.projectName}</h3>
                        <p className="inProgress">{i.progress}</p>
                      </div>{" "}
                      <div style={{ width: 85, height: 85 }}>
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            rotation: 0.5,
                            strokeLinecap: "round",
                            textSize: "16px",
                            pathColor: "#FFBF00",
                            textColor: "#808080",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                      </div>
                    </div>
                    <div className="imgAndPhoto">
                      <img src={Ali} alt="" />
                      <p>{i.name}</p>
                    </div>{" "}
                  </ProgressCard>
                </>
              ))}
            </div>
          </div>
          <div className="column">
            <div className="totalProjectsGrid">
              {totalProject?.map((i, index) => (
                <div key={index} className="totalProjectSquer">
                  <div className="totalProjectSquerGrid">
                    <h3>Total Projects</h3>
                    <p>{i.number}</p>
                    <img
                      className="Curlsline"
                      src={Curlsline}
                      alt="Decoration"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="totalTasks">
              <div className="totalTasksProgress">
                <div className="totalTasksInfoProgress">
                  <h2>Total Tasks - 21</h2>
                  <MultiRingProgressBar
                    values={[53, 12, 35]}
                    colors={["#1FAD58", "#D69E2E", "#3C97AF"]}
                    radius={100}
                    strokeWidth={15}
                    gap={15}
                    centerWhiteSpace={8}
                    animationDuration={2}
                    rotations={[-180, 309, 314]}
                  />
                </div>
              </div>
              {inProgress?.map((i, index) => (
                <div key={index} className="totalTasksLineProgress">
                  <Flex vertical gap="small" style={{ width: 280 }}>
                    <h2>{`To Do ${i.toDo}% `}</h2>
                    <Progress
                      percent={35}
                      size="middle"
                      strokeColor="#3C97AF"
                      status="active"
                      showInfo={false}
                      className="custom--margin"
                    />
                    <h2>{`In Progress ${i.progress}% `}</h2>
                    <Progress
                      percent={12}
                      size="middle"
                      strokeColor="#D69E2E"
                      status="active"
                      showInfo={false}
                    />
                    <h2>{`Done ${i.done}% `}</h2>
                    <Progress
                      percent={53}
                      size="middle"
                      strokeColor="#1FAD58"
                      status="active"
                      showInfo={false}
                    />
                  </Flex>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default dashBoardScreen;
