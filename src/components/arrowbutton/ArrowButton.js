import React, { PureComponent } from "react";
import {ReactComponent as Arrow} from "../../assets/arrow.svg";

import "./ArrowButton.css";

class ArrowButton extends PureComponent {
  render() {
    return (
      <div className="arrow-button">
        <Arrow className={"arrow-button__arrow" +
          (this.props.pointRight ? " arrow-button__arrow--right" : "")}
        />
      </div>
    );
  }
}

ArrowButton.defaultProps = {
  pointRight: false
}

export default ArrowButton;
