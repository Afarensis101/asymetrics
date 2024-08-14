
import React from 'react';
import  "../../../node_modules/bulma/bulma.scss";
import { Link } from 'gatsby'
import { Article } from '../../pages';

export const listCell = (article: Article, customStyle: Object) =>  {

  //#region STYLE
  const box = {
    display: 'flex',
    flexDirection: 'row',
  } as const;
  const imgBox = {
    width: '120px',
    height: '120px'
  };
  const img = {
    borderRadius: '0.2rem',
    objectFit: 'cover',
    width: '120px',
    height: '120px',
    maxWidth: 'none',
    padding: '0.5rem',
  } as const;
  const info = {
    margin: '0.5rem',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  } as const;
  const title = {
      // color: 'rgba(85, 26, 139, 1)',
      // fontSize: '24px', 
      // marginBottom: '0.2em', 
      // marginTop: '0.2em',
      color: 'rgba(11, 92, 102, 1)',
      fontSize: '16px',
      margin: '0.2em',
  };
  const date = {
      color: 'hsla(274, 6%, 18%, 0.9)',
      fontSize: '14px',
      margin: '0.2em',
  };
  //#endregion
    
    return (
      <Link key={article?.id} to={`/blog${article?.slug}`}>
        <div style={box}>
          <div style={imgBox}>
              <img
                alt={article?.title}
                style={img}
                className="prevent_steal"
                src={article?.featuredimage}
              />
          </div>
          <div style={info}>
            <div><p style={{...title, ...customStyle}}>{article?.title}</p></div>
            <div><p style={date}><small>{article?.date}</small>&nbsp;</p></div>
          </div>
        </div>
      </Link>
    )
};
