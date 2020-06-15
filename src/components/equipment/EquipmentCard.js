import React, { Component } from "react";
import "./EquipmentCard.css";

class EquipmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.equipRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const top = this.equipRef.current.getBoundingClientRect().top;
    this.setState({
      isVisible: top < window.innerHeight
    });
  }

  render() {
    return (
      <div
        className={"equipment-card" + (this.state.isVisible ? " equipment-card--visible" : "")}
        key={this.props.name}
        ref={this.equipRef}>
        <img src={require("../../assets" + this.props.imageUrl)} alt="" />
        <div className="equipment-card__name">{this.props.name}</div>
      </div>
    );
  }
}

export default EquipmentCard;
