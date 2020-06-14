import React, { Component } from "react";
import SocialIcon from "../socialicon/SocialIcon.js";
import LanguageSelector from "../languageselector/LanguageSelector.js";
import youtubeIcon from "../../assets/social-youtube.png";
import pinterestIcon from "../../assets/social-pinterest.png";
import facebookIcon from "../../assets/social-facebook.png";
import twitterIcon from "../../assets/social-twitter.png";
import instagramIcon from "../../assets/social-instagram.png";

import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedLanguage: "English"
    }

    this.selectLanguage = this.selectLanguage.bind(this);

    this.languages = ["English", "French", "Spanish", "German"];
  }

  selectLanguage(event) {
    const language = event.currentTarget.id;
    this.setState({ selectedLanguage: language });
  }

  render() {
    return (
      <div className="footer">

        <div className="footer__grid">
          <div className="footer__grid-col">
            <ul className="footer__grid-col__title">Company</ul>
            <ul className="footer__grid-col__item">About</ul>
            <ul className="footer__grid-col__item">Contact Us</ul>
            <ul className="footer__grid-col__item">Careers</ul>
          </div>

          <div className="footer__grid-col">
            <ul className="footer__grid-col__title">Account</ul>
            <ul className="footer__grid-col__item">Log In</ul>
            <ul className="footer__grid-col__item">Create Account</ul>
          </div>

          <div className="footer__grid-col">
            <ul className="footer__grid-col__title">Support</ul>
            <ul className="footer__grid-col__item">Help Center</ul>
            <ul className="footer__grid-col__item">Accessibility</ul>
          </div>
        </div>

        <div className="footer__socials">
          <SocialIcon><img src={youtubeIcon} alt="" /></SocialIcon>
          <SocialIcon><img src={pinterestIcon} alt="" /></SocialIcon>
          <SocialIcon><img src={facebookIcon} alt="" /></SocialIcon>
          <SocialIcon><img src={twitterIcon} alt="" /></SocialIcon>
          <SocialIcon><img src={instagramIcon} alt="" /></SocialIcon>
        </div>

        <div className="footer__legal">
          <div className="footer__legal-item">
            iFit.com. All Rights Reserved.
          </div>
          <div className="footer__legal-item">
            Privacy Policy
          </div>
          <div className="footer__legal-item">
            Terms of Use
          </div>
          <div className="footer__language">
            <LanguageSelector
              onSelect={this.selectLanguage}
              selected={this.state.selectedLanguage}
              options={this.languages}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
