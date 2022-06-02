import React from "react";
import "./Upper.css";
import image from "../../assets/3d/top.png";
import TryItOut from "../TryItOut/TryItOut";

const Upper = () => {
  return (
    <div className="container">
      <div>
        <h2>Solve all your problems</h2>
        <h2>all on Whatsapp</h2>
        <p>
          Connect with mentors from IIT ,BITS, AIIMS on a 1 on 1 live video call
          absolutely for free &#128526;
        </p>
        <h3>Classes 8-12 | JEE & NEET aspirants</h3>
        <TryItOut />
      </div>
      <div>
        <img src={image} alt="teach" className="topImage" />
      </div>
    </div>
  );
};

export default Upper;
