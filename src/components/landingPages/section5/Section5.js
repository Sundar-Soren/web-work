import React from "react";
import "./section5.scss";

const Section5 = () => {
  return (
    <div className="section5">
      <div className="section5_container">
        <div className="section5_left">
          <div className="section5_box"></div>
        </div>
        <div className="section5_right">
          <h1>Drop Up A Message</h1>
          <p>
            Are you looking for inspiration, do you have a question or already a
            ready idea? Get in touch with one of our experts for a free
            consultation
          </p>
          <form>
            <input type="text" placeholder="Your Full Name" />
            <input type="text" placeholder="Your Email Address" />
            <input type="text" placeholder="Select subject" />
            <input type="text" placeholder="Message" />
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section5;
