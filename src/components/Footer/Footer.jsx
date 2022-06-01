import React from "react";
import "./Footer.css";
import location from "../../assets/svg/location.svg";
import chat from "../../assets/svg/chat.svg";
import call from "../../assets/svg/call.svg";

const Footer = () => {
  return (
    <footer>
      <div className="lists">
        <ul className="footerList1">
          <li className="listHeader">
            <h3>About Us</h3>
          </li>
          <li className="listItem">
            Mentor Space is a self-study platform that helps students of classes
            8-12 connect instantly with expert mentors through a 1 on 1 video
            call.
          </li>
        </ul>
        <ul className="footerList2">
          <li className="listHeader">
            <h3>Contact Us</h3>
          </li>
          <li className="listItem">
            <img src={location} />
            Bangalore - 560066
          </li>
          <li className="listItem">
            <img src={call} />
            +91 91488 12500
          </li>
          <li className="listItem">
            <img src={chat} />
            mailus@learnspace.app
          </li>
        </ul>
        <ul className="footerList3">
          <li className="listHeader">
            <h3>Quick links</h3>
          </li>
          <li className="listItem">Team</li>
          <li className="listItem">Become a mentor</li>
          <li className="listItem">Linkedin</li>
          <li className="listItem">Whatsapp Group</li>
        </ul>
        <ul className="footerList4">
          <li className="listHeader">
            <h3>Legal</h3>
          </li>
          <li className="listItem">Terms of use</li>
          <li className="listItem">Privacy Policy</li>
        </ul>
      </div>
      <div className="copyright">Copyright © 2022 Grow90.org</div>
      <hr />
    </footer>
  );
};

export default Footer;
