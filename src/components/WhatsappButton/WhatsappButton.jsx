import React from "react";
import whatsapp from "../../assets/svg/Whatsapp.svg";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <button className="whatasppButton">
      <img src={whatsapp} width="25" height="25" />
      whatsapp
    </button>
  );
};

export default WhatsappButton;
