import React, { PureComponent } from "react";
import Button from "../button/Button.js";
import {ReactComponent as IFitCoachLogo} from "../../assets/ifit-coach-logo.svg";

import "./MainNav.css";

class MainNav extends PureComponent {
  render() {
    return (
      <div className="main-nav">
        <IFitCoachLogo className="main-nav__logo"/>
        <div className="main-nav__navs">
          <div className="main-nav__nav">Exercise</div>
          <div className="main-nav__nav">Nutrition</div>
          <div className="main-nav__nav">Activity</div>
          <div className="main-nav__nav">Sleep</div>
        </div>
        <Button><div>Sign Up</div></Button>
      </div>
    );
  }
}

export default MainNav;
