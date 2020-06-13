import React, { PureComponent } from "react";
import "./Hero.css";

class Hero extends PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="hero__text">
          <div>The best personal training,</div>
          <div>right in your own home</div>
        </div>
        <div className="hero__button">Join iFit Coach</div>
      </div>
    );
  }
}

export default Hero;
