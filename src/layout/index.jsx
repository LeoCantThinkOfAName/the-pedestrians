import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

// components
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class MainLayout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <Navigation config={config} LocalTitle={title}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <script
            async
            src="https://cse.google.com/cse.js?cx=000532077995990981312:j1kjweoe2ig"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        {children}
        <Footer />
      </Navigation>
    );
  }
}
