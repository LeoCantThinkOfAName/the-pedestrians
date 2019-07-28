import React, { Component } from "react";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children } = this.props;
    return <div className="main-wrapper">{children}</div>;
  }
}

export default Navigation;
