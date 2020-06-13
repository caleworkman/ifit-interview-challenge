import React, { PureComponent } from "react";

import clockIcon from "../../assets/clock-icon.png";
import distanceIcon from "../../assets/distance-icon.png";

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

          <div className="card__trainer">
            <img src={require("../../assets" + this.props.trainerImageUrl)} alt="" />
          </div>

          <div className="card__small">
            {this.props.time
              ? <React.Fragment>
                  <img src={clockIcon} alt="" />
                  {this.props.time}
                </React.Fragment>
              : null
            }

            {this.props.distance
              ? <React.Fragment>
                  <img src={distanceIcon} alt="" />
                  {this.props.distance}
                </React.Fragment>
              : null
            }
          </div>

          <div className="card__view-details">
            View Details
          </div>

        </div>
      </div>
    );
  }
}

export default Card;
