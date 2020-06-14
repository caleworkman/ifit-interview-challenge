import React, { PureComponent } from "react";
import "./SocialIcon.css";

class SocialIcon extends PureComponent {
  render() {
    return (
      <div className="social">
        <div className="social__inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SocialIcon;
