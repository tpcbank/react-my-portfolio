import React, { Component } from "react";
import profilepic from "../img/profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic"> About Me !</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <h3>Hi I am tpc.bankk</h3>
        <p>
          Nulla aliquip mollit consectetur minim eiusmod ipsum minim consequat
          amet minim est et sit aliquip.
        </p>
      </div>
    );
  }
}

export default About;
