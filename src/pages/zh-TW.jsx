import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Tw extends React.Component {
  render() {
    const { data, location } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Tw;

export const pageQuery = graphql`
  query TwQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { lang: { eq: "zh-TW" } } }
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
