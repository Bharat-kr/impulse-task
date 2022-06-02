import React from "react";
import TryItOut from "../TryItOut/TryItOut";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="container8">
      <h1 className="headings">FAQs</h1>
      <div>
        <div>
          <h3>How do I ask a doubt?</h3>
          <p>
            Once you enter your phone number on our website, you will receive a
            message on WhatsApp from the Mentor Match ChatBot. It will guide you
            on how to ask your doubt!
          </p>
        </div>
        <div>
          <h3>How do I get connected with my Mentor?</h3>
          <p>
            After our WhatsApp bot collects the details of your question via
            chat, you will receive a video call link. (Don't worry, your camera
            is automatically turned off)
          </p>
        </div>
        <div>
          <h3>Does the video call happen on WhatsApp?</h3>
          <p>
            No, the video call happens on our video calling platform, you will
            receive the video call link on WhatsApp.
          </p>
        </div>
        <div>
          <h3>I'm a bit introverted. Do I have to speak?</h3>
          <p>
            We completely understand. By default, your camera will always be
            turned off. If you don't feel like talking on the call, you don't
            have to! All we urge you to do is reply when the Mentor asks you if
            they are audible and if you understood your doubt. Our team is
            currently working on an "Introvert Mode" where students can text in
            real-time as the Mentor explains on call!
          </p>
        </div>
        <div>
          <h3>Can I use this service for free?</h3>
          <p>
            Yes our service is absolutely free and you can ask how many ever
            doubts you want!
          </p>
        </div>
        <div>
          <h3>How long does it take to get connected to a Mentor?</h3>
          <p>
            It generally takes 3-5 minutes to get connected to a Mentor. (Please
            bear with us if it takes a little longer than that, we're always
            searching for your perfect match!)
          </p>
        </div>
        <div>
          <h3>How many doubts can I ask on the platform for free?</h3>
          <p>You can ask unlimited doubts for free!</p>
        </div>
        <div>
          <h3>Is my number shared with the Mentor?</h3>
          <p>
            No, your privacy is our priority. We keep your information safe!
          </p>
        </div>
        <div>
          <h3>Is my information safe with Mentor Match?</h3>
          <p>
            We respect the privacy of each and every individual. Your personal
            information stays with us and is not shared with anyone.
          </p>
        </div>
      </div>
      <TryItOut />
    </div>
  );
};

export default FAQ;
