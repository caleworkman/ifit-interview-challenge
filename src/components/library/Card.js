import React, { PureComponent } from "react";
import "./Card.css";

class Card extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="card__image">
          <img src={require("../../assets" + this.props.imageUrl)} alt="" />
        </div>
        <div className="card__contents">
          <div className="card__name">
            {this.props.name}
          </div>
          <div className="card__time">
            {this.props.time}
          </div>
          <div className="card__distance">
            {this.props.distance}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
