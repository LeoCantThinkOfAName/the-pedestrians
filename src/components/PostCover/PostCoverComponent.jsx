import React, { Component } from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { fileEdges, postNode, coverClassName } = this.props;
    const { imageSize } = postNode;
    const post = postNode.frontmatter ? postNode.frontmatter : postNode;
    const coverNodeList = fileEdges.filter(fileNode => {
      const imagePath = `/assets/${fileNode.node.relativePath}`;

      if (fileNode.node.childImageSharp === null) return false;
      if (imagePath.indexOf(post.cover) !== -1) {
        return true;
      }
      return false;
    });

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          outerWrapperClassName={coverClassName}
          css={css`
            height: 300px;
            width: 100%;
            @media (min-width: 400px) {
              height: 400px;
            }
            @media (min-width: 800px) {
              height: ${imageSize || 400}px;
            }
          `}
        />
      );
    }

    /* eslint no-undef: "off" */
    const coverURL =
      post.cover.substring(0, 1) === "/"
        ? __PATH_PREFIX__ + post.cover
        : post.cover;
    return (
      <div
        css={css`
          backgroundImage: url(${coverURL}),
          height: ${imageSize}px,
        `}
        className={coverClassName}
      />
    );
  }
}

export default PostCover;
