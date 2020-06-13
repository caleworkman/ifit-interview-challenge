import React, { PureComponent } from "react";
import "./Card.css";

class Card extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="card__logo">
          <img src={this.props.logo} alt="" />
        </div>
        <div className="card__text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Card;
