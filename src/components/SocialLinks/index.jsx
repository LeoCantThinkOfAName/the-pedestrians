import React, { Component } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;

    return (
      <div className="social-block">
        <h5>Share This Post</h5>
        <div className="social-links">
          <button type="button" className="share-btn" title="Share on Twitter">
            <TwitterShareButton url={url} title={post.title}>
              <TwitterIcon size={iconSize} />
            </TwitterShareButton>
          </button>
          <button type="button" className="share-btn" title="Share on Facebook">
            <FacebookShareButton url={url} quote={postNode.excerpt}>
              <FacebookIcon size={iconSize} />
            </FacebookShareButton>
          </button>
          <button type="button" className="share-btn" title="Share on Line">
            <LineShareButton url={url} quote={postNode.excerpt}>
              <LineIcon size={iconSize} />
            </LineShareButton>
          </button>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
