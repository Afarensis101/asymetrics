
const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }: { actions: any, graphql: any }) => {
    const { createPage } = actions;
  
    return graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                categories
                tags
                templateKey
              }
            }
          }
        }
      }
    `).then((result: any) => {
      if (result.errors) {
        result.errors.forEach((error: any) => console.error(error.toString()));

        return Promise.reject(result.errors);
      }
  
      const posts = result.data.allMarkdownRemark.edges;
      _.each(posts, (post: any, index: number) => {
        createPage({
          categories: post.node.frontmatter.categories,
          component: path.resolve(`src/templates/${String(post.node.frontmatter.templateKey)}.tsx`),
          context: {
            id:  post.node.id,
            next: index === 0 ? null : posts[index - 1].node,
            postPath: `/blog${post.node.fields.slug}`,
            previous: index === posts.length - 1 ? null : posts[index + 1].node,
            slug: post.node.fields.slug,
          },
          path: `/blog${post.node.fields.slug}`,
          tags: post.node.frontmatter.tags,
        });
      });
      let categories: any[] = [];
      posts.forEach((edge: any) => {
        if(_.get(edge, `node.frontmatter.categories`)) {
          categories = categories.concat(edge.node.frontmatter.categories);
        }
      });
      categories = _.uniq(categories);
      categories.forEach((category) => {
        createPage({
          path: `/blog/categories/${_.kebabCase(category)}/`,
          component: path.resolve(`src/templates/categories.tsx`),
          context: { category },
        });
      });
  

      let tags: any[] = []
      posts.forEach((edge: any) => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      tags = _.uniq(tags)
      tags.forEach((tag) => {
        const tagPath = `/blog/tags/${_.kebabCase(tag)}/`;
        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.ts`),
          context: { tag },
        });
      });
    })
};
  
exports.onCreateNode = ({ node, actions, getNode }: { node: any, actions: any, getNode: any }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });
      createNodeField({ name: `slug`, node, value });
    }
};
