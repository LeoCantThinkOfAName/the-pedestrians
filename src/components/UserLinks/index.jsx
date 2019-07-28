import React, { Component } from "react";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { labeled, config } = this.props;
    const { userLinks } = config;

    return userLinks.map(link => (
      <a href={link.url} rel="noopener noreferrer" target="_blank">
        {labeled ? link.label : ""}
      </a>
    ));
  }

  render() {
    const {
      config: { userLinks },
    } = this.props;

    if (!userLinks) {
      return null;
    }

    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
