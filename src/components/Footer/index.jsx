import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;

    return (
      <footer className="footer">
        {/* {userLinks ? <UserLinks config={config} labeled /> : null} */}

        <div className="copyright">
          <p>
            Copyright &copy;{" "}
            {new Date().getFullYear() === 2019
              ? new Date().getFullYear()
              : `2019 - ${new Date().getFullYear()}`}
            , The Pedestrians Post by <a href="https://google.com">LCTOAN.</a>
          </p>
        </div>
        <div className="color-blocks">
          <ul>
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
