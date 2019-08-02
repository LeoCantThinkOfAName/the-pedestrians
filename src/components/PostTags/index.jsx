import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostTags.scss";

class PostTags extends Component {
  render() {
    const { tags, lang } = this.props;

    return (
      <ul className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <li key={tag} className="post-preview-tags">
              <Link to={`/${lang}/tags/${_.kebabCase(tag)}`}>{tag}</Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default PostTags;
