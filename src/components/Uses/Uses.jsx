import React from "react";
import "./Uses.css";
import doubtSolving from "../../assets/3d/doubtSolving.png";
import homework from "../../assets/3d/homework.png";
import exam from "../../assets/3d/exam.png";
import explain from "../../assets/3d/explain.png";
import councelling from "../../assets/3d/councelling.png";
import excel from "../../assets/3d/excel.png";

const Uses = () => {
  return (
    <div className="container6">
      <h1 className="headings">What can you use us for?</h1>
      <div>
        <div>
          <img src={doubtSolving} />
          <span>Doubt Solving</span>
        </div>
        <div>
          <img src={homework} />
          <span>Homework help</span>
        </div>
        <div>
          <img src={exam} />
          <span>Exam preparation</span>
        </div>
        <div>
          <img src={explain} />
          <span>Concept Explanation</span>
        </div>
        <div>
          <img src={councelling} />
          <span>Councelling</span>
        </div>
        <div>
          <img src={excel} />
          <span>Numeric solutions</span>
        </div>
      </div>
    </div>
  );
};

export default Uses;
