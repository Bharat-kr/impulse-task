import React from "react";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="name">
        Mentor Space<sup>Tm</sup>
      </h1>
      <WhatsappButton />
    </nav>
  );
};

export default Navbar;
