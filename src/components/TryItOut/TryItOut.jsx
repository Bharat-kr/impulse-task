import React from "react";
import "./TryItOut.css";
import whatsapp from "../../assets/svg/Whatsapp.svg";

const TryItOut = () => {
  return (
    <button className="tryoutbutton">
      <img src={whatsapp} width="25" height="25" />
      TRY IT OUT
    </button>
  );
};

export default TryItOut;
