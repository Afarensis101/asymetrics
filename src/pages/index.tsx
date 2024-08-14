import * as React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { simpleRoll } from "../components/rolls/simpleRoll";
import { highlightRoll } from "../components/rolls/highlightRoll";
import { listRoll } from "../components/rolls/listRoll";
import { topRoll } from "../components/rolls/topRoll";
import { RoughNotationProps } from "react-rough-notation";
import header from "../components/header/header";

export interface Article {
  author: string,
  categories: string,
  date: string,
  featuredimage: any,
  id: string,
  slug: string,
  tags: string,
  teaser: string,
  title: string,
}

type NOTATIONSTYPE = 
  'box1' | 'box2' |
  'bracket1' | 'bracket2' |
  'circle1' | 'circle2' |
  'cross1' | 'cross2' |
  'strike1' | 'strike2' | 'strike3';

export const Notations: { [key in NOTATIONSTYPE]: RoughNotationProps } = {
  box1: {
    animationDelay: 1000,
    animationDuration: 2500,
    type: 'box',
    // padding: 10,
    show: true,
    children: undefined
  },
  box2: {
      animationDelay: 1000,
      animationDuration: 2500,
      type: 'box',
      // padding: 10,
      show: true,
      children: undefined
  },
  bracket1: {
      animationDelay: 200,
      animationDuration: 2800,
      type: 'bracket',
      padding: [2, 10],
      brackets: ['left', 'right'],
      strokeWidth: 5,
      show: true,
      children: undefined
  },
  bracket2: {
      animationDelay: 1500,
      animationDuration: 800,
      type: 'bracket',
      padding: [5, 20],
      brackets: ['right'],
      strokeWidth: 6,
      show: true,
      children: undefined
  },
  circle1: {
      animationDelay: 1000,
      animationDuration: 2500,
      type: 'circle',
      // padding: 10,
      show: true,
      children: undefined
  },
  circle2: {
      animationDelay: 350,
      animationDuration: 1750,
      type: 'circle',
      show: true,
      children: undefined
  },
  cross1: {
      animationDelay: 1000,
      animationDuration: 2500,
      type: 'crossed-off',
      // padding: 10,
      show: true,
      children: undefined
  },
  cross2: {
      animationDelay: 500,
      animationDuration: 300,
      type: 'crossed-off',
      show: true,
      children: undefined
  },
  strike1: {
      animationDelay: 1000,
      animationDuration: 2500,
      type: 'strike-through',
      padding: 10,
      show: true,
      children: undefined
  },
  strike2: {
      animationDelay: 500,
      animationDuration: 1500,
      type: 'strike-through',
      padding: 20,
      show: true,
      children: undefined
  },
  strike3: {
      animationDelay: 0,
      animationDuration: 2500,
      type: 'strike-through',
      padding: 15,
      show: true,
      children: undefined
  },
}

export const CATEGORIES = [
  { label: "News", value: "news" },
  { label: "Mixtapes", value: "mixtapes" },
  { label: "Panama Papers", value: "panamapapers" },
  { label: "Outernational Series", value: "outernational" },
  { label: "DJ Pohy Series", value: "pohy" },
  { label: "Malong's Round-up", value: "roundup" },
  { label: "Label Stories", value: "labelstory" },
  // { label: "", value: "" },
  // { label: "", value: "" },
];

const IndexPage = () => {

  //#region DATAS
  const rawArticles = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              author
              categories
              date(formatString: "MMMM DD, YYYY")
              featuredimage
              tags
              teaser
              templateKey
              title
            }
          }
        }
      }
    }
  `);
  const { edges: posts } = rawArticles.allMarkdownRemark;
  const articles: Article[] = posts?.map((item: any) => ({
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
  const articlesBySeries = articles.filter((item: Article) => 
    (item.categories !== 'mixtapes') && (item.categories !== 'news')
    ).sort((a: Article, b: Article) => 
    new Date(a.date).getTime() + new Date(b.date).getTime()
    ).reduce((acc, article) => {
      if (!acc[article.categories]) {
        acc[article.categories] = [];
      }
      acc[article.categories].push(article);

      return acc;
    },
    {} as { [key: string]: Article[] }
  );

  const sessionCategories = Object.keys(articlesBySeries);
  const random = React.useMemo(
    () => 
      ([
        articles[ Math.floor(Math.random() * articles.length)],
        articles[ Math.floor(Math.random() * articles.length)],
      ]),
      [],
  );
  //#endregion

  //#region STYLE
  const pageStyles = {
    // color: "#551a8b",
    backgroundColor: "#fafafa",
    // fontFamily: "Nunito",
  }
  const container = {
    backgroundColor: '#FFF',
    margin: '1rem 0',
    padding: '1rem',
  }
  const headerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    margin: '0 1rem 1rem',
  }
  const sizing = {
    padding: '0.8rem',
  };
  //#endregion

  //#region COLORS
  const blued = {
    borderBottom: '6px solid #3273dc',
    color: '#3273dc',
    fontSize: '24px',
    marginBottom: '-17px',
    width: '150px',
    whiteSpace: 'nowrap',
  } as const;
  const greened = {
    borderBottom: '6px solid #0b5c66',
    color: '#0b5c66',
    fontSize: '24px',
    marginBottom: '-17px',
    width: '250px',
    whiteSpace: 'nowrap',
  } as const;
  const oranged = {
    borderBottom: '6px solid #FA8542',
    color: '#FA8542',
    fontSize: '24px',
    marginBottom: '-17px',
    width: '250px',
    whiteSpace: 'nowrap',
  } as const;
  const purpled = {
    borderBottom: '6px solid #551a8b',
    color: '#551a8b',
    fontSize: '24px',
    marginBottom: '-17px',
    width: '200px',
    whiteSpace: 'nowrap',
  } as const;
  //#endregion

  function getRandomEnumValue<T extends object>(enumObj: T): T[keyof T] {
    const enumValues = Object.values(enumObj) as T[keyof T][];
    return enumValues[Math.floor(Math.random() * enumValues.length)];
  }
  const current: { color: string, notation: RoughNotationProps, text: string }[] = React.useMemo(
    () => [0,1,2].map((index: number) => (
      {
        color:['#3273dc', '#0b5c66', '#FA8542', '#551a8b'][ Math.floor( Math.random() * 4)],
        notation: getRandomEnumValue(Notations),
        text: CATEGORIES.filter((item) => item.value === sessionCategories[index])[0].label 
      })
    ),
    [],
  );

  //#region RENDER
  return (
    <div style={pageStyles}>
      <div className="container" style={sizing}>

        <div className="columns">
          
          <div className="column is-8">
            {[0,1,2].map((index: number) => (
              <div style={container} key={index}>
                {header({
                  color: { color: current[index].color },
                  notation: current[index].notation,
                  text: current[index].text,
                })}
                {highlightRoll(
                  articlesBySeries[sessionCategories[index]],
                  { color: current[index].color }
                  )}
              </div>
            ))}

            <div style={container}>
              <div style={headerContainer}>
                <h1 style={purpled}>Random</h1>
              </div>
              { topRoll(random, { color: '#551a8b' }) }
            </div>
            
          </div>

          <div className="column is-4">
            <div style={container}>
                <div style={headerContainer}>
                  <p style={purpled}>Mixtapes</p>
                  <Link to={'/blog/categories/mixtapes'}>
                    <p className="tag">View all</p>
                  </Link>
                </div>
                {listRoll(
                  articles.filter((item: Article) => item.categories === 'mixtapes').slice(0, 18),
                  { color: '#551a8b' },
                  )}
            </div>
          </div>
        </div>

        <div style={container}>
          <div style={headerContainer}>
            <p style={greened}>News</p>
            <Link to={'/blog/categories/news'}>
              <p className="tag">View all</p>
            </Link>
          </div>
          {simpleRoll(
            articles.filter((item: Article) => item.categories === 'news').slice(0, 6),
            { color: '#0b5c66' },
            )}
        </div>

      </div>
    </div>
  )
  //#endregion
}

export default IndexPage;
