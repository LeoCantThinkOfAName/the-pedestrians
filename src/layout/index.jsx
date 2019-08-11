import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";

import "./index.scss";
import "./global.scss";

class MainLayout extends React.Component {
  render() {
    const { children, intl } = this.props;
    return (
      <Navigation config={config} LocalTitle={intl.language}>
        <Helmet>
          <meta
            name="description"
            content={intl.formatMessage({ id: "siteDescription" })}
          />
          <script
            async
            src="https://cse.google.com/cse.js?cx=000532077995990981312:j1kjweoe2ig"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </Navigation>
    );
  }
}

export default injectIntl(MainLayout);
