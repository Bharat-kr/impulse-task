import React from "react";
import "./Stats.css";
import student from "../../assets/svg/student.svg";
import star from "../../assets/svg/star.svg";
import mentor from "../../assets/svg/mentor.svg";
import TryItOut from "../TryItOut/TryItOut";

const Stats = () => {
  return (
    <div className="container7">
      <h1 className="headings">The stats speaks for themselves</h1>
      <div className="stats">
        <div>
          <h2>
            1500+ <img src={student} alt="" />
          </h2>
          <span>Students</span>
        </div>
        <div>
          <h2>
            4.73 <img src={star} alt="" />
          </h2>
          <span>Rating</span>
        </div>
        <div>
          <h2>
            100+ <img src={mentor} alt="" />
          </h2>
          <span>Mentors</span>
        </div>
      </div>
      <h1 className="headings">Get access now</h1>
      <TryItOut />
    </div>
  );
};

export default Stats;
