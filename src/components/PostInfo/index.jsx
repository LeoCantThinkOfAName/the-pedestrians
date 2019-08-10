import React, { Component } from "react";
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import config from "../../../data/SiteConfig";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <div
          title={`Published on ${moment(postNode.fields.date).format(
            config.dateFormat
          )}`}
          subtitle={`${postNode.timeToRead} min read`}
        />
      </div>
    );
  }
}

export default PostInfo;
