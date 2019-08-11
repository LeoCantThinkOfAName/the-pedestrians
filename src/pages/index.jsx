import React from "react";
import { css } from "@emotion/core";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

// components
// components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Advertisment from "../components/Ads";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: "",
    };
  }

  componentWillMount() {
    const gridsArr = [
      {
        sizes: [900, 700, 300, 700, 300, 300],
        areas:
          "'headline headline first''headline headline first''headline headline ad1''second   second   ad1''third    fourth   fourth''third    fifth    fifth''ad2      ad2      ad2'",
      },
      {
        sizes: [700, 300, 300, 300, 700, 300],
        areas:
          "'headline headline headline''headline headline headline''ad1      first    first''ad1      second   second''third    third   fourth''fifth    fifth   fourth''ad2      ad2      ad2'",
      },
    ];

    const randomNum = Math.floor(Math.random() * gridsArr.length);

    this.setState({
      grid: gridsArr[randomNum],
    });
  }

  render() {
    const { data, location } = this.props;
    const { grid } = this.state;
    const postEdges = data.allMarkdownRemark.edges;

    return (
      <Layout location={location} title="Home">
        <Header />
        <div
          className="index-container main-container"
          css={css`
            @media (min-width: 800px) {
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: repeat(6, minmax(300px, auto));
              grid-template-areas: ${grid.areas};
            }
          `}
        >
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} grid={grid} />
          <Advertisment />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Index;
export const pageQuery = graphql`
  query IndexQuery($lang: String) {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { lang: { eq: $lang } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            lang
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
