import React, { Component } from "react";
import { Link } from "gatsby";
import moment from "moment";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import "./PostPreview.scss";

class PostPreview extends Component {
  render() {
    const { postInfo } = this.props;

    return (
      <div className="single-post">
        <Link
          to={`/${postInfo.lang}${postInfo.path}`}
          title={postInfo.title}
          className="post-cover-link"
        >
          <PostCover postNode={postInfo} />
        </Link>
        <div className="post-preview-info">
          <Link
            to={`/${postInfo.lang}${postInfo.path}`}
            style={{ textDecoration: "none" }}
            title={postInfo.title}
          >
            <h3>{postInfo.title}</h3>
          </Link>
          <p className="post-preview-date">
            {moment(postInfo.date).format("MMM ww, YYYY")}
          </p>
          <p>{postInfo.excerpt}</p>
          <PostTags tags={postInfo.tags} lang={postInfo.lang} />
        </div>
      </div>
    );
  }
}

export default PostPreview;
