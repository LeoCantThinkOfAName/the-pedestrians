import React from "react";
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const { postEdges, grid } = this.props;
    const postList = [];
    postEdges.forEach((postEdge, index) => {
      const { node } = postEdge;
      postList.push({
        lang: node.frontmatter.lang,
        path: node.fields.slug,
        tags: node.frontmatter.tags,
        cover: node.frontmatter.cover,
        title: node.frontmatter.title,
        date: node.fields.date,
        excerpt: node.excerpt,
        timeToRead: node.timeToRead,
        imageSize: grid && grid.sizes[index],
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return postList.map((post, index) => (
      <PostPreview key={post.title} postInfo={post} index={index} />
    ));
  }
}

export default PostListing;
