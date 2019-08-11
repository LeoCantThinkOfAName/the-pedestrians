import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";
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
    const { postNode, postPath, mobile, intl } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;

    return (
      <div className="social-block">
        <h5>{intl.formatMessage({ id: "social-share" })}</h5>
        <div className="social-links">
          <button
            type="button"
            className="share-btn"
            title={intl.formatMessage({ id: "share-via-twitter" })}
          >
            <TwitterShareButton url={url} title={post.title}>
              <TwitterIcon size={iconSize} />
            </TwitterShareButton>
          </button>
          <button
            type="button"
            className="share-btn"
            title={intl.formatMessage({ id: "share-via-facebook" })}
          >
            <FacebookShareButton url={url} quote={postNode.excerpt}>
              <FacebookIcon size={iconSize} />
            </FacebookShareButton>
          </button>
          <button
            type="button"
            className="share-btn"
            title={intl.formatMessage({ id: "share-via-line" })}
          >
            <LineShareButton url={url} title={postNode.excerpt}>
              <LineIcon size={iconSize} />
            </LineShareButton>
          </button>
        </div>
      </div>
    );
  }
}

export default injectIntl(SocialLinks);
