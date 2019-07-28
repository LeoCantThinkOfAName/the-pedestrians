import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./UserInfo.scss";

class UserInfo extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userLocation,
      userDescription,
      userLinks,
      userTwitter,
    } = this.props.config;

    return <div></div>;
  }
}

export default UserInfo;
