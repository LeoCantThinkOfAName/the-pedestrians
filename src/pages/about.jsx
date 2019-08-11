import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

// components
import Footer from "../components/Footer";
import Header from "../components/Header";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <Header />
        <div className="about-container main-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default AboutPage;
