import React from "react";
import "./HowItWorks.css";
import screenshot from "../../assets/3d/screenshot.png";
import laptop from "../../assets/3d/laptop.png";
import phone from "../../assets/3d/phone.png";
import mentor from "../../assets/3d/mentor.png";

const HowItWorks = () => {
  return (
    <div className="container2">
      <h1>How it Works</h1>
      <div>
        <h1 className="number">1</h1>
        <div className="detail">
          <h3>Take photo of your questions</h3>
          <span>
            Simply type or take photo of the question you want to learn.
          </span>
        </div>
        <img src={screenshot} alt="" />
      </div>
      <div>
        <img src={mentor} alt="" />
        <h1 className="number">2</h1>
        <div className="detail">
          <h3>Connect to a mentor</h3>
          <span>
            After submitting the question, connect to a Mentor instantly.
          </span>
        </div>
      </div>
      <div>
        <h1 className="number">3</h1>
        <div className="detail">
          <h3>Learn over a call</h3>
          <span>
            Clear all your concepts and doubts on a 1 on 1 call with our top
            mentors.
          </span>
        </div>
        <img src={laptop} alt="" />
      </div>
      <div>
        <img src={phone} alt="" />
        <h1 className="number">4</h1>
        <div className="detail">
          <h3>Get a photo of your solution</h3>
          <span>You will recieve a written solution after the call.</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
