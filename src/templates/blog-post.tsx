
import * as React from "react";
import { Link, graphql } from 'gatsby';
import {
  blogPost,
  blogPost__title,
  blogPost__leftColumn,
  blogPost__subValue,
  blogPost__subKey,
  blogPost__subAuthor,
  blogPost__subDate,
  blogPost__subCat,
  blogPost__centerColumn,
  blogPost__rightColumn,
  blogPost__rightKey,
  blogPost__rightValue,
} from './blogpostStyle';

const CATEGORIES = [
    {
      label: "News / Tunes / Update",
      value: "news",
    },
    {
      label: "Mixtapes / Playlists / Podcasts",
      value: "mixtapes",
    },
    {
      label: "Knowledge / Wisdom / Rhythm",
      value: "knowledge",
    },
    {
      label: "Stories / Movies / Books",
      value: "stories",
    },
    {
      label: "Reports / Facts / Subjects",
      value: "reports",
    },
    {
      label: "Photography / Design / Architecture",
      value: "photography",
    },
    {
      label: "Artworks / Pictures / Paintings",
      value: "artworks",
    },
];

function BlogPostTemplate (
    { data, location } :
    { data: { previous: any, next: any, site: any, markdownRemark: any }, location: any }
) {

    const url = typeof window !== 'undefined' ? window.location.href : '';
  
    if (typeof document !== 'undefined') {
      let links = document.getElementsByTagName('a');
        for ( let i=0, len =links.length; i < len; i++ ) {
          let href = links[i].href.split('/')
          if (href[2] !== 'theasymetrics.com'){
            links[i].target = '_blank';
          }
        }
      let images = document.getElementsByTagName('img');
      for (var y=0, l=images.length; y < l; y++) {
        images[y].className = "prevent_steal";
      }
    }

    return (
      <div>
        <section className='section' style={blogPost}>
          <div className='container content'>
            <div style={blogPost__title}>
              <h1>{data?.markdownRemark?.frontmatter?.title}</h1>
              <p>{data?.markdownRemark?.frontmatter?.teaser}</p>
            </div>
            <div className='columns'>
              <div className='column is-2' style={blogPost__leftColumn}>
                <div className='tags' style={blogPost__subValue}>
                  {(data?.markdownRemark?.frontmatter?.tags)?.map(
                    (item: any) =>
                    (<Link className="tag is-dark" key={item} to={`/blog/tags/${item.replace(/_| |&/g,'-').replace('#', '').toLowerCase()}`}>
                      {item}
                    </Link>)
                  )}
                </div>
                <div style={blogPost__subKey}>
                  <p style={blogPost__subAuthor}>{data?.markdownRemark?.frontmatter?.author},&nbsp;</p>
                  <p style={blogPost__subDate}>{data?.markdownRemark?.frontmatter?.date}&nbsp;</p>
                  <Link style={blogPost__subCat} to={`/blog/categories/${data?.markdownRemark?.frontmatter?.categories}`}>
                    {CATEGORIES.some((cat) => cat.value === data?.markdownRemark?.frontmatter?.categories)
                      ? CATEGORIES.filter((cat) => cat.value === data?.markdownRemark?.frontmatter?.categories)[0].label
                      : data?.markdownRemark?.frontmatter?.categories
                    }
                  </Link>
                </div>
              </div>
              <div className='column is-8' style={blogPost__centerColumn}>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.markdownRemark?.html }}
                />
              </div>
              <div className='column is-2' style={blogPost__rightColumn}>
                <p style={blogPost__rightKey}>Related</p>
                {data?.markdownRemark?.frontmatter?.outsideLinks?.outsideLinksList?.map((item: any, index: number) => (
                   <a style={blogPost__rightValue}
                    href={item.link}
                    rel="noopener noreferrer"
                    target={
                      item.link.split('/')[2] !== 'theasymetrics.com' ? "_blank" : ""
                    }
                    key={index}>{item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        </div>
      )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 400)
      html
      frontmatter {
        author
        categories
        tags
        teaser
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
