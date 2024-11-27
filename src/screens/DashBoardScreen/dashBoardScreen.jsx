import React from "react";
import Container from "../../components/Container/container";
import "./dashBoardScreen.modul.css";
import ProgressCard from "../../components/progressCard/progressCard";
import Ali from "/public/Ali.svg";
import Curlsline from "/public/curlsline.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flex, Progress } from "antd";
const dashBoardScreen = () => {
  const projectinfo = [
    {
      id: 1,
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
  ];

  const inProgress = [
    {
      id: 1,
      toDo: 35,
      progress:12,
      done:53,
    },
  ];
  const percentage = 50;
  return (
    <>
      <Container>
        <div className="dashBoardBox">
          <div className="analysisProgressCard">
            <div className="allProjects">
              <p className="activeAll">All</p>
              <p className="notActive">Pending</p>
              <p className="notActive">InProgress</p>
              <p className="notActive">Completed</p>
            </div>
            <div className="squers">
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>{" "}
              <ProgressCard marginTop={16}>
                {projectinfo?.map((i) => (
                  <>
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
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.5,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "16px",

                            // Colors
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
                    </div>
                  </>
                ))}
              </ProgressCard>
            </div>
          </div>
          <div className="coloum">
            {totalProject?.map((i) => (
              <>
                <div className="totalProjectSquer">
                  <div className="totalProjectSquerGrid">
                    <h3>Total Projects</h3>
                    <p>{i.number}</p>
                    <img className="Curlsline" src={Curlsline} alt="" />
                  </div>
                  <div className="totalProjectSquerGrid">
                    <h3>Pending</h3>
                    <p>{i.number}</p>
                    <img className="Curlsline" src={Curlsline} alt="" />
                  </div>
                  <div className="totalProjectSquerGrid">
                    <h3>In Progress</h3>
                    <p>{i.number}</p>
                    <img className="Curlsline" src={Curlsline} alt="" />
                  </div>
                  <div className="totalProjectSquerGrid">
                    <h3>Done</h3>
                    <p>{i.number}</p>
                    <img className="Curlsline" src={Curlsline} alt="" />
                  </div>
                </div>
              </>
            ))}
            <div className="totalTasks">
              {" "}
              <div className="totalTasksProgress">
                <div className="totalTasksInfoProgress">
                  <h2>Total Tasks - 21</h2>
                  <p>sdsd</p>
                </div>
              </div>
              {inProgress?.map((i) => (
                <>
                  <div className="totalTasksLineProgress">
                    {" "}
                    <Flex vertical gap="small" style={{ width: 280 }}>
                      <h2>{`To Do ${i.toDo}% `}</h2>
                      <Progress
                        percent={35}
                        size="middle"
                        strokeColor="#3C97AF"
                        status="active"
                        showInfo={false}
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
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default dashBoardScreen;
