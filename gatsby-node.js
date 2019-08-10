const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

// helper function
// Remove trailing slashes unless it's only "/", then leave it as it is
// const replaceTrailing = _path =>
//   _path === `/` ? _path : _path.replace(/\/$/, ``);
// // Remove slashes at the beginning and end
// const replaceBoth = _path => _path.replace(/^\/|\/$/g, "");

// // locales
// const en = require("./src/lcocale/en.json");
// const zhTW = require("./src/lcocale/zh-TW.json");

// const locales = {
//   en,
//   "zh-TW": zhTW,
// };
// const defaultLang = "zh-TW";

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString(),
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  page.context = {
    ...page.context,
    lang: page.context.intl.language,
  };
  return createPage(page);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");

  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                lang
                title
                tags
                date
              }
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  const recurSearch = (index, lang, direction) => {
    // if there's no next post, return null
    if (index >= postsEdges.length) {
      return null;
    }
    if (index < 0) {
      return null;
    }
    // if the lang of next post is matched, return the index
    if (postsEdges[index].node.frontmatter.lang === lang) {
      return index;
    }
    // if the lang of next post doesn't match, search the next one (recur)
    return recurSearch(index + direction, lang, direction);
  };

  postsEdges.forEach((edge, index) => {
    const { lang } = edge.node.frontmatter;

    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add({
          tag,
          lang,
        });
      });
    }

    const nextID = recurSearch(index - 1, edge.node.frontmatter.lang, -1);
    const prevID = recurSearch(index + 1, edge.node.frontmatter.lang, 1);
    const nextEdge = nextID === null ? null : postsEdges[nextID];
    const prevEdge = prevID === null ? null : postsEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        lang: edge.node.frontmatter.lang,
        nexttitle: nextEdge && nextEdge.node.frontmatter.title,
        nextslug: nextEdge && nextEdge.node.fields.slug,
        prevtitle: prevEdge && prevEdge.node.frontmatter.title,
        prevslug: prevEdge && prevEdge.node.fields.slug,
      },
    });
  });

  tagSet.forEach(tag => {
    createPage({
      path: `tags/${_.kebabCase(tag.tag)}`,
      component: tagPage,
      context: {
        tag: tag.tag,
        lang: tag.lang,
      },
    });
  });
};
