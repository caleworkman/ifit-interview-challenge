import React, { Component } from "react";
import ArrowButton from "../arrowbutton/ArrowButton.js";
import Slide from "./Slide.js";

import GearJunkieLogo from "../../assets/gear-junkie-logo.svg";
import MashableLogo from "../../assets/mashable-logo.svg";
import WiredLogo from "../../assets/wired-logo.svg";

import CircularDLL from "./CircularDLL.js";

import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      slideNext: false,
      shownSlides: []
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doNextAnimation = this.doNextAnimation.bind(this);
    this.doPrevAnimation = this.doPrevAnimation.bind(this);

    this.slides = new CircularDLL();
    this.slides.add(
      <Slide
        logo={GearJunkieLogo}
        text="You focus on putting in the work, and the technology handles the rest."
      />
    );
    this.slides.add(
      <Slide
        logo={WiredLogo}
        text="Literally transports you from home to wherever you choose to run."
      />
    );
    this.slides.add(
      <Slide
        logo={MashableLogo}
        text="Breathes new life into a tired, old running routine."
      />
    )

    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    // Show 5 slides
    this.setState({
      shownSlides: [
        this.slides.head.previous.previous,
        this.slides.head.previous,
        this.slides.head,
        this.slides.head.next,
        this.slides.head.next.next
      ]
    });
  }

  doNextAnimation() {
    const animationListener = () => this.setState({animate:false});
    this.sliderRef.current.addEventListener("animationend", animationListener, {once: true});
    this.setState({animate: true, slideNext: true});
  }

  doPrevAnimation() {
    const animationListener = () => this.setState({animate:false, slideNext: false});
    this.sliderRef.current.addEventListener("animationend", animationListener, {once: true});
    this.setState({animate: true, slideNext: false});
  }

  nextSlide() {
    this.doNextAnimation();
    this.setState(prevState => {
      const slides = [...prevState.shownSlides];
      const newSlides = slides.map(slide => {
        return slide.next
      });
      return {
        shownSlides: [...newSlides]
      }
    })
  }

  prevSlide() {
    this.doPrevAnimation();
    this.setState(prevState => {
      const slides = [...prevState.shownSlides];
      const newSlides = slides.map(slide => {
        return slide.previous
      });
      return {
        shownSlides: [...newSlides]
      }
    })
  }

  render() {
    const slides = this.state.shownSlides.map((slide, index) => {
      return React.cloneElement(slide.data, {key: index})
    });

    const sliderAnimationClass = (this.state.animate
      ? (this.state.slideNext ? " slide-next" : " slide-previous")
      : ""
    );

    return (
      <div className="slider">
        <div
          className="slider__arrow slider__arrow--left"
          onClick={this.prevSlide}>
          <ArrowButton />
        </div>
        <div
          className={"slider__slides" + sliderAnimationClass}
          ref={this.sliderRef}>
          {slides}
        </div>
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
