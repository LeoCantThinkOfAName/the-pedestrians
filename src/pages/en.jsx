import React from "react";
import { css } from "@emotion/core";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

// components
import Advertisements from "../components/ads";

class En extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: "",
    };
  }

  componentWillMount() {
    const gridsArr = [
      "'headline headline first''headline headline first''headline headline ad1''second   second   ad1''third    fourth   fourth''third    fifth    fifth''ad2      ad2      ad2'",
      "'headline headline headline''headline headline headline''ad1      first    first''ad1      second   second''third    third   fourth''fifth    fifth   fourth''ad2      ad2      ad2'",
    ];

    this.setState({
      grid: gridsArr[1],
    });
  }

  render() {
    const { data, location } = this.props;
    const { grid } = this.state;
    const postEdges = data.allMarkdownRemark.edges;

    return (
      <Layout location={location} title="Home">
        <div
          className="index-container"
          css={css`
            grid-template-areas: ${grid};
          `}
        >
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
          <Advertisements />
        </div>
      </Layout>
    );
  }
}

export default En;

export const pageQuery = graphql`
  query EnQuery {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { lang: { eq: "en" } } }
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
