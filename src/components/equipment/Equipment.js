import React, { PureComponent } from "react";
import "./Equipment.css";

const equipmentDetails = require("./equipment.json");

class Equipment extends PureComponent {

  render() {
    const equipment = Object.values(equipmentDetails).map(equip => {
      return (
        <div className="equipment__card" key={equip.name}>
          <img src={require("../../assets" + equip.imageUrl)} alt="" />
          <div className="equipment__card__name">{equip.name}</div>
        </div>
      );
    });

    return (
      <div
        className={"equipment" + (this.props.isVisible ? " equipment--visible" : "")}
        ref={this.props.equipmentRef}>
        <div className="equipment__title">
          Interested in our exciting iFit-enabled equipment?
        </div>
        <div className="equipment__grid">
          {equipment}
        </div>
      </div>
    );
  }
}

export default Equipment;
