import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import "./Mentors.css";
import teacher1 from "../../assets/teachers/teacher1.png";
import teacher2 from "../../assets/teachers/teacher2.png";
import teacher3 from "../../assets/teachers/teacher3.png";
import teacher4 from "../../assets/teachers/teacher4.png";
import left from "../../assets/svg/left.svg";
import right from "../../assets/svg/right.svg";

const images = {
  1: teacher1,
  2: teacher2,
  3: teacher3,
  4: teacher4,
};
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 8 },
];

//arrows
function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? left : right;
  return (
    <div className="pointer_wrapper">
      <button className="pointers" onClick={onClick} disabled={isEdge}>
        <img src={pointer} alt="" />
      </button>
    </div>
  );
}
const Mentors = () => {
  const [items, setItems] = useState([
    {
      image: "1",
      name: "Priya Banerjee",
      subject: "Physics",
      college: "IIT Delhi",
    },
    {
      image: "2",
      name: "Smita Patil",
      subject: "Physics",
      college: "IIT Bombay",
    },
    {
      image: "3",
      name: "Gaurav Agarwal",
      subject: "Chemistry",
      college: "IIT Madras",
    },
    {
      image: "4",
      name: "Ishita Sharma",
      subject: "Maths",
      college: "IIT Guwahati",
    },
    {
      image: "3",
      name: "Gaurav Agarwal",
      subject: "Chemistry",
      college: "IIT Madras",
    },
    {
      image: "1",
      name: "Priya Banerjee",
      subject: "Physics",
      college: "IIT Delhi",
    },
  ]);

  return (
    <div className="container4">
      <h1 className="headings">Meet Our Mentors</h1>
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          renderArrow={myArrow}
          pagination={false}
        >
          {items.map((item, idx) => (
            <div className="person" key={idx}>
              <img src={images[item.image]} alt="" />
              <h3>{item.name}</h3>
              <p>{item.subject}</p>
              <h4>{item.college}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Mentors;
