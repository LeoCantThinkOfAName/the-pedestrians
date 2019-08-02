import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";
import path from "path";
import "./PostCover.scss";

class InPostCover extends Component {
  render() {
    const { fileEdges, postNode, coverClassName } = this.props;
    const { imageSize } = postNode;
    const post = postNode.frontmatter ? postNode.frontmatter : postNode;
    const coverNodeList = fileEdges.filter(fileNode => {
      if (fileNode.node.childImageSharp === null) return false;

      if (
        fileNode.node.absolutePath.indexOf(
          path.join("/static/assets/", post.cover)
        ) !== -1
      )
        return true;

      return false;
    });

    if (coverNodeList.length === 1) {
      return (
        <Img
          fluid={coverNodeList[0].node.childImageSharp.fluid}
          outerWrapperClassName={coverClassName}
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

export default InPostCover;
