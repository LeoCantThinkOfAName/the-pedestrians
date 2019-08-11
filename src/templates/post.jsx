import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import PostInfo from "../components/PostInfo";
import SocialLinks from "../components/SocialLinks";
import PostSuggestions from "../components/PostSuggestions";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import "./post.scss";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: true,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile } = this.state;
    const { location, pageContext, data } = this.props;
    const {
      slug,
      nexttitle,
      nextslug,
      prevtitle,
      prevslug,
      lang,
    } = pageContext;
    const expanded = !mobile;
    const postNode = data.markdownRemark;
    const { title, tags, id, date } = postNode.frontmatter;

    // if (!post.id) {
    //   post.id = slug;
    // }

    return (
      <Layout location={location}>
        <Header date={date} />
        <div className="post-page">
          <Helmet>
            <title>{`${title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${id}`} />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <PostCover postNode={postNode} coverClassName="post-cover" />
          <div className="post-page-contents">
            <div className="post">
              <div className="post-body">
                <h1 className="post-header">{title}</h1>
                <PostInfo postNode={postNode} />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </div>
              <div className="post-meta">
                <PostTags tags={tags} lang={lang} />
                <UserInfo config={config} expanded={expanded} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={mobile}
                />
              </div>
            </div>

            <PostSuggestions
              prevSlug={prevslug}
              prevTitle={prevtitle}
              nextSlug={nextslug}
              nextTitle={nexttitle}
              lang={lang}
            />
            <Disqus postNode={postNode} expanded={expanded} />
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        lang
        title
        cover
        date
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
