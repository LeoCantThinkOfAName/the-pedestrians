import React, { Component } from "react";
import "./Advert.scss";

// components
import Normal from "./Normal";
import DesktopWide from "./DesktopWide";
import MobileWide from "./MobileWide";
import TabletWide from "./TabletWide";

export default class Advertisements extends Component {
  constructor() {
    super();

    this.state = {
      size: 0,
    };
    this.inter = React.createRef();
  }

  detectSize(width) {
    this.setSize(width);
  }

  resizing() {
    clearTimeout(this.inter.current);

    this.inter.current = setTimeout(() => {
      this.setSize(window.innerWidth);
    }, 500);
  }

  displayBottomAd() {
    const { size } = this.state;
    if (size > 990) {
      return <DesktopWide />;
    }
    if (size > 500 && size < 990) {
      return <TabletWide />;
    }
    return <MobileWide />;
  }

  componetDidMount() {
    const windowWidth = window.innerWidth;
    this.detectSize(windowWidth);

    window.addEventListener("resize", this.resizing, false);

    return () => {
      window.removeEventListener("resize", this.resizing);
    };
  }

  render() {
    return (
      <>
        <Normal />
        {this.displayBottomAd()}
      </>
    );
  }
}
