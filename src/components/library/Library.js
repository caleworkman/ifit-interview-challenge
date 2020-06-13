import React, { PureComponent } from "react";
import Card from "./Card.js";
import "./Library.css";

const cardsDetails = require("./cards.json");

class Library extends PureComponent {
  render() {

    const cards = Object.values(cardsDetails).map(card => {
      return <Card key={card.name} {...card} />
    });

    return (
      <div className="library">
        {cards}
      </div>
    );
  }
}

export default Library;
