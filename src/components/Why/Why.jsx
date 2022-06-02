import React from "react";
import "./Why.css";
import free from "../../assets/3d/free.png";
import focus from "../../assets/3d/focus.png";
import doubts from "../../assets/3d/doubts.png";
import think from "../../assets/3d/think.png";
import success from "../../assets/3d/success.png";
import accurate from "../../assets/3d/accurate.png";

const Why = () => {
  return (
    <div className="container3">
      <h1 className="headings">Why Choose Us?</h1>
      <div>
        <div>
          <img src={think} />
          <span>All your doubts are cleared instantly</span>
        </div>
        <div>
          <img src={free} />
          <span>You can ask unlimited doubts for free</span>
        </div>
        <div>
          <img src={accurate} />
          <span>100% personal attention</span>
        </div>
        <div>
          <img src={focus} />
          <span>Study at your own pace</span>
        </div>
        <div>
          <img src={doubts} />
          <span>One source for all your doubts</span>
        </div>
        <div>
          <img src={success} />
          <span>Step-by-step explanation.</span>
        </div>
      </div>
    </div>
  );
};

export default Why;
