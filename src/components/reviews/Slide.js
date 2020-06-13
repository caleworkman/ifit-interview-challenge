import React, { PureComponent } from "react";
import "./Slide.css";

class Slide extends PureComponent {
  render() {
    return (
      <div className="slide">
        <div className="slide__logo">
          <img src={this.props.logo} alt="" />
        </div>
        <div className="slide__text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Slide;
