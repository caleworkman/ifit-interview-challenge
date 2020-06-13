import React, { Component } from "react";
import ArrowButton from "../arrowbutton/ArrowButton.js";
import Slide from "./Slide.js";

import GearJunkieLogo from "../../assets/gear-junkie-logo.svg";
import MashableLogo from "../../assets/mashable-logo.svg";
import WiredLogo from "../../assets/wired-logo.svg";

import "./Slider.css";

class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <div className="slider__arrow slider__arrow--left">
          <ArrowButton />
        </div>
        <Slide
          logo={GearJunkieLogo}
          text="You focus on putting in the work, and the technology handles the rest."
        />
        <Slide
          logo={WiredLogo}
          text="Literally transports you from home to wherever you choose to run."
        />
        <Slide
          logo={MashableLogo}
          text="Breathes new life into a tired, old running routine."
        />
        <div className="slider__arrow slider__arrow--right">
          <ArrowButton pointRight={true} />
        </div>
      </div>
    );
  }
}

export default Slider;
