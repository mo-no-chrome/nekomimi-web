/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    // Nodeの情報からパスを生成します
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'posts',
      trailingSlash: false
    });
    // 生成したパスをslugフィールドとしてGraphQL上に登録します
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${relativeFilePath}`
    });
  }
};

const createPostPages = (edges, createPage) => {
  const component = path.resolve('./src/templates/post.js');
  edges.forEach(({ node }) => {
    const { slug } = node.fields;
    // テンプレートにcontextを渡す
    createPage({
      component,
      path: slug,
      context: {
        slug
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // クエリを実行します
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const { edges } = result.data.allMarkdownRemark;
  // クエリ結果を基にページを作成します
  createPostPages(edges, createPage);
};
