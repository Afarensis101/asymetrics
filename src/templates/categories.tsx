
import React from 'react';
import { graphql } from 'gatsby';
import { simpleRoll } from '../components/rolls/simpleRoll';

function CategoryRoute (
  { data } : { data: { site: any, allMarkdownRemark: any }}
) {

  const { edges: posts } = data.allMarkdownRemark;
  const articles = posts?.map((item: any) => ({
      author: item?.node?.frontmatter?.author,
      categories: item?.node?.frontmatter?.categories,
      date: item?.node?.frontmatter?.date,
      featuredimage: item?.node?.frontmatter?.featuredimage || item?.node?.frontmatter?.featuredimage?.childImageSharp?.fluid?.src,
      id: item?.node?.id,
      slug: item?.node?.fields?.slug,
      tags: item?.node?.frontmatter?.tags,
      teaser: item?.node?.frontmatter?.teaser,
      title: item?.node?.frontmatter?.title,
    })
  );
   
    return (
      <section className="section">
              <h2 className='category__display'>{ posts[0]?.node?.frontmatter?.categories}</h2>
              <h2 className='category__display'>total articles : {data?.allMarkdownRemark?.totalCount}</h2>
              <div className="container">
                  {simpleRoll(articles,  { color: '#FA8542'})}
              </div>
      </section>
    )
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            categories
            date(formatString: "MMMM DD, YYYY")
            tags
            teaser
            title
            featuredimage
          }
        }
      }
    }
  }
`
