import React from "react";
import "./maineditleft.css";
import Editpen from "/public/EditPen.svg"//
import AddPost from "/public/addPost.svg";
import LikeOff from "/public/Like.svg";
import Likeon from "/public/LikeOn.svg";
import Comment from "/public/Comment.svg";
import Photo from "/public/ProfilePic.svg";
import Other from "/public/Other.svg";
import TestPost  from "/public/TestPost.svg";

import { useState } from "react";
export default function maineditleft() {
  const [likes, setLikes] = useState({});
  const posts = [
    {
      id: 1,
      title: "Looking for Full-Sack Developer with experience +2 years",
      desc: "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development",
      duration: "4 Months",
      image: "/post.png",
      price: 50,
      client: {
        name: "Client Name",
        createdAt: "Posted 2 hours ago  ",
      },
    },
    {
      id: 2,
      title: "Looking for Full-Sack Developer with experience +2 years",
      desc: "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development",
      duration: "4 Months",
      price: 50,
      client: {
        name: "Client Name",
        createdAt: "Posted 2 hours ago  ",
      },
    },
  ];

  const projects = [
    {
      id: 1,
      name: "project Name",
      Date: "22 Jan 2024 - 11 May 2024.",
      desc: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. ",
    },
    {
      id: 2,
      name: "project Name",
      Date: "22 Jan 2024 - 11 May 2024.",
      desc: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. ",
    },
  ];
  const speech =
    "As a software manager with a passion for technology and team development, I specialize in guiding projects from concept to completion. With a strong focus on collaboration and clear communication, I work closely with clients and developers to ensure we deliver high-quality solutions that meet our stakeholders' needs. My goal is to bridge the gap between technical expertise and client vision, helping teams create innovative software that drives results and keeps pace with industry demands.... See more";
  const [about, setAbout] = useState(speech);
  const [isEditinga, setIsEditinga] = useState(false);

  const handleInputChangeAbout = (event) => {
    setAbout(event.target.value);
  };

  const toggleEditModeAbout = () => {
    setIsEditinga((prev) => !prev);
  };

  const handleKeyPressAbout = (event) => {
    if (event.key === "Enter") {
      setIsEditinga(false);
    }
  };

  const toggleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  return (
    <div className="edit-left-box1">
      <div className="num-one-feles">
        <div className="num-one-feles1">
          <img src={Photo} className="dif-164" />
          <div className="vertical">
            <h1>Mustafa Emad</h1>
            <p>Business scope</p>
          </div>
        </div>

        <button>
          <img src={Editpen} alt="" />
        </button>
      </div>
      <div className="line-grey"></div>

      <div className="edit-left-box2">
        <div className="feles">
          <h1>About</h1>
          <button onClick={toggleEditModeAbout}>
            <img src={Editpen} />
          </button>
        </div>
        <p>
          {isEditinga ? (
            <textarea
              className="edit-show"
              type="text"
              value={about}
              onChange={handleInputChangeAbout}
              onKeyPress={handleKeyPressAbout}
              autoFocus
            />
          ) : (
            <span>{about}</span>
          )}
        </p>
      </div>
      <div className="edit-left-box3">
        <div className="feles1">
          <h1>Projects History</h1>
          <div>
            <button className="mrg-r-32px">
              <img src={AddPost} />
            </button>
            <button>
              <img src={Editpen} />
            </button>
          </div>
        </div>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="edit-feles2">
              <div className="ddot-container">
                <div className=" big-dot"></div>
                <div className="green-line11"></div>
              </div>
              <div className="edit-proj-name ">
                <h1>{project.name}</h1>
                <h6>{project.Date}</h6>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="activity-row">
        <h1>Your Activity</h1>
        <div className="activity-row1">
          <img src={AddPost} />
          <img src={Editpen} />
        </div>
      </div>
      <div>
        {posts?.map((p) => (
          <div className="edit-user-mid-box2" key={p.id}>
            <div className="user-felos">
              <div className="felos">
                <div className="circle-poto"></div>
                <div>
                  <h1>{p.client.name}</h1>
                  <p>{p.client.createdAt} </p>
                </div>
              </div>

              <div className="felos2">
                <p>available</p>
                <button>
                  <img src={Other} alt="" />
                </button>
              </div>
            </div>
            <div className="contra">
              <h3>{p.title}</h3>
              <h4>{p.desc}</h4>

              {!!p?.image ? (
                <img src={TestPost} alt="" />
              ) : (
                <div className="contra">
                  <p className="contra-p1">Duration of project</p>
                  <p className="contra-p2">{p.duration} </p>
                  <p className="contra-p1">Pricing</p>
                  <p className="contra-p2">Hourly $ {p.price}</p>
                </div>
              )}
              <div className="bottom-post">
                <div className="mid-row">
                  <button onClick={() => toggleLike(p.id)}>
                    <img src={likes[p.id] ? Likeon : LikeOff} alt="" />
                  </button>
                  <p>like</p>
                </div>
                <div className="mid-row">
                  <button>
                    <img src={Comment} alt="" />
                  </button>{" "}
                  <p>comment</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="VLine"></div>
      <div className="SeeAll" ><h3> See all</h3></div>
    </div>
  );
}
