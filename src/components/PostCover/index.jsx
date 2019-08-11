import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import PostCover from "./PostCoverComponent";

class queryWrapper extends Component {
  render() {
    const { postNode, coverClassName } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query CoverQuery {
            allFile {
              edges {
                node {
                  id
                  absolutePath
                  relativePath
                  childImageSharp {
                    id
                    resolutions {
                      base64
                      tracedSVG
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      originalName
                    }
                    internal {
                      contentDigest
                      type
                      owner
                    }
                    fluid(maxWidth: 1240) {
                      ...GatsbyImageSharpFluid_tracedSVG
                      originalName
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <PostCover
            fileEdges={data.allFile.edges}
            postNode={postNode}
            coverClassName={coverClassName}
          />
        )}
      />
    );
  }
}

export default queryWrapper;
