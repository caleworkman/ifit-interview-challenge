import React, { Component } from "react";
import ArrowButton from "../arrowbutton/ArrowButton.js";
import Slide from "./Slide.js";

import GearJunkieLogo from "../../assets/gear-junkie-logo.svg";
import MashableLogo from "../../assets/mashable-logo.svg";
import WiredLogo from "../../assets/wired-logo.svg";

import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideNumber: 0
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.setSlides = this.setSlides.bind(this);

    this.slides = [
      <Slide
        logo={GearJunkieLogo}
        key={0}
        text="You focus on putting in the work, and the technology handles the rest."
      />,
      <Slide
        logo={WiredLogo}
        key={1}
        text="Literally transports you from home to wherever you choose to run."
      />,
      <Slide
        logo={MashableLogo}
        key={2}
        text="Breathes new life into a tired, old running routine."
      />
    ];
  }

  componentDidMount() {
    // Assumes there are at least 3 distinct slides
    this.setState({
      ...this.setSlides(this.state.slideNumber)
    });
  }

  nextSlide() {
    this.setState(prevState => {
      var next = prevState.slideNumber + 1;
      if (next > this.slides.length - 1) {
        next = 0;
      }
      return { ...this.setSlides(next) }
    });
  }

  prevSlide() {
    this.setState(prevState => {
      var prev = prevState.slideNumber - 1;
      if (prev < 0) {
        prev = this.slides.length - 1;
      }
      return { ...this.setSlides(prev) }
    });
  }

  setSlides(currIndex) {
    // Set the previous, current, and next slides based on the current index
    // Updating like this ensures re-render each time
    const slides = this.slides;
    const currSlide = slides[currIndex];

    const prevSlide = ((currIndex > 0)
      ? slides[currIndex - 1]
      : slides[slides.length - 1]);

    const nextSlide = ((currIndex === slides.length - 1)
      ? slides[0]
      : slides[currIndex + 1]);

    return {
      prevSlide: prevSlide,
      currSlide: currSlide,
      nextSlide: nextSlide,
      slideNumber: currIndex
    }
  }


  render() {

    return (
      <div className="slider">
        <div
          className="slider__arrow slider__arrow--left"
          onClick={this.prevSlide}>
          <ArrowButton />
        </div>
        {this.state.currSlide}
        <div
          className="slider__arrow slider__arrow--right"
          onClick={this.nextSlide}>
          <ArrowButton pointRight={true} />
        </div>
      </div>
    );
  }
}

export default Slider;
