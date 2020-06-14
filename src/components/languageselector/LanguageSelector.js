import React, { PureComponent } from "react";
import {ToggleExpandIcon} from "./ToggleExpandIcon.js";
import "./LanguageSelector.css";

class LanguageSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState(prevState => {
      return { expanded: !prevState.expanded }
    });
  }

  render() {
    const selected = this.props.selected;

    const options = this.props.options.filter(option => option !== selected).map(option => {
      return (
        <div
          className="language__option"
          key={option}
          id={option}
          onClick={this.props.onSelect}>
          {option}
        </div>
      );
    });

    return (
      <div
        className={"language" + (this.state.expanded ? " language--expanded" : "")}
        onClick={this.toggleExpand}>
        <div className="language__selected">
          {this.props.selected}
        </div>
        <ToggleExpandIcon expanded={this.state.expanded} />

        {this.state.expanded
          ? <div className="language__expanded">
              {options}
            </div>
          : null
        }
      </div>
    );
  }
}

export default LanguageSelector;
