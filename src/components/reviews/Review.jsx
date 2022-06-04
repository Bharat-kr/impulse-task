import React, { useRef, useState } from "react";
import "./Review.css";
import teacher1 from "../../assets/teachers/teacher1.png";
import teacher2 from "../../assets/teachers/teacher2.png";
import teacher3 from "../../assets/teachers/teacher3.png";
import teacher4 from "../../assets/teachers/teacher4.png";
import teacher5 from "../../assets/teachers/teacher5.png";
import left from "../../assets/svg/left.svg";
import right from "../../assets/svg/right.svg";

const images = {
  1: teacher1,
  2: teacher2,
  3: teacher3,
  4: teacher5,
  5: teacher5,
};

const Review = () => {
  const [items, setItems] = useState([
    {
      image: "3",
      name: "Shaleen bansal",
    },
    {
      image: "2",
      name: "Smita Patil",
    },
    {
      image: "1",
      name: "Gaurav Agarwal",
    },
    {
      image: "4",
      name: "Ishita Sharma",
    },
    {
      image: "3",
      name: "Gaurav Agarwal",
    },
    {
      image: "1",
      name: "Priya Banerjee",
    },
  ]);

  return (
    <div className="container5">
      <h1 className="headings">What people are saying</h1>
      <div className="reviews_wrapper">
        <div className="reviews">
          {items.map((item, idx) => {
            return (
              <div className="review" key={idx}>
                <img src={images[item.image]} alt="" />
                <p>
                  This was so quick and efficient,I’m so glad I tried this out.
                </p>
                <h3>{item.name}</h3>
                <span>12th standard student</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttons_wrapper">
        <button className="pointers">
          <img src={left} alt="" />
        </button>
        <button className="pointers">
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Review;
