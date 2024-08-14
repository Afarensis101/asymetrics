
import React from 'react';
import  "../../../node_modules/bulma/bulma.scss";
import { Link } from 'gatsby'
import { Article } from '../../pages';
import { CATEGORIES } from '../../pages/index';


export const hugeCell = (article: Article, customStyle: Object) =>  {
    //#region STYLE
    const text__container = {
        display: 'flex',
        flexDirection: 'column',
        color: '#FFF',
        textAlign: 'end',
        margin: '0.5em',
    } as const;
    const image = {
        borderRadius: '0.2rem',
        objectFit: 'cover',
    }as const;
    const title = {
        // color: 'rgba(85, 26, 139, 1)',
        fontSize: '24px', 
        marginBottom: '0.2em', 
        marginTop: '0.2em',
    };
    const teaser = {
          color: '#000',
          marginTop: '0.6rem',
          font: '100% $font-regular',
          fontSize: '16px',
    };
    const tag__container = {
          marginTop: '0.8rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
    } as const;
    const tag = {
          font: '100% $font-regular',
          fontSize: '16px',
          color: '#0b5c66',
          textTransform: 'uppercase',
    };
    const author = {
          marginTop: '0.8rem',
          font: '100% $font-regular',
          fontSize: '16px',
          fontStyle: 'italic',
    };
    //#endregion
    
    return (
        <article>
            <Link to={`/blog${article?.slug}`}>
                <div className="image is-5by4">
                    <img
                        className="prevent_steal"
                        alt={article?.title}
                        src={article?.featuredimage}
                        style={image}
                    />
                </div>
            </Link>
            <div style={text__container}>
                <Link to={`/blog${article?.slug}`}><p style={{...title, ...customStyle}}>{article?.title}</p></Link>
                <p style={teaser}>{article?.teaser}</p>
                
                {/* <div style={tag__container}>
                
                    <Link style={tag} to={`/blog/categories/${article?.categories}`}>
                        {CATEGORIES.some((cat) => cat.value === article?.categories)
                        ? CATEGORIES.filter((cat) => cat.value === article?.categories)[0].label
                        : article?.categories
                        }
                    </Link>
                </div> */}
                {/* <p style={author}>{article.author}</p> */}
            </div>
        </article>
    )
};
