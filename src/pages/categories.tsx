
import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <section className="section">

    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: '6rem' }}
        >
          <h4 className="title is-size-2 is-bold-light">Wesh</h4>
          <ul className="taglist catPage__column">
            {group.map((category: any) => (
              <li key={category.fieldValue}>
                <Link className="tags__headerText" to={`/blog/categories/${kebabCase(category.fieldValue)}/`}>
                  <h2 className="tags__headerText">
                    {`${category.totalCount} ${category.fieldValue}`}
           
                    {/* {CATEGORIES.some((cat) => cat.value === category.fieldValue)
                      ? CATEGORIES.filter((cat) => cat.value === category.fieldValue)[0].label
                      : category.fieldValue
                    } */}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default CategoriesPage

export const categoriesPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
