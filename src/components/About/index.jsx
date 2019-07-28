import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <div className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <div>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </div>
            <UserLinks labeled config={config} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
