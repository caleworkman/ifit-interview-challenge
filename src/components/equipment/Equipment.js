import React, { PureComponent } from "react";
import EquipmentCard from "./EquipmentCard.js";
import "./Equipment.css";

const equipmentDetails = require("./equipment.json");

class Equipment extends PureComponent {

  render() {
    const equipment = Object.values(equipmentDetails).map(equip => {
      return <EquipmentCard {...equip} />
    });

    return (
      <div className="equipment">
        <div className="equipment__title">
          Interested in our exciting iFit-enabled equipment?
        </div>
        <div
          className={"equipment__grid" + (this.props.isVisible ? " equipment__grid--visible" : "")}
          ref={this.props.equipmentRef}>
          {equipment}
        </div>
      </div>
    );
  }
}

export default Equipment;
