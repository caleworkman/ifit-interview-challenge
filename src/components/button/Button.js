import React, { PureComponent } from "react";
import "./Button.css";

class Button extends PureComponent {
  render() {
    return (
      <div className="button">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            className: "button__content"
          });
        })}
      </div>
    );
  }
}

export default Button;
