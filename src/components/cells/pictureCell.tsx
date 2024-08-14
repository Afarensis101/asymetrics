
import React from 'react';
import { Link } from 'gatsby'
import { Article } from '../../pages';
import { CATEGORIES } from '../../pages/index';


export const pictureCell = (article: Article, customStyle: Object) =>  {

    //#region STYLE
    const overlayed = {
        position: 'absolute',
        bottom: '8px',
        left: '16px',
        zIndex: 100,
    } as const;

    const textBox = {
        // marginTop: '-170px',
        color: 'rgb(255, 255, 255)',
        // zIndex: 100,
        position: 'relative',
    } as const;

    const image = {
        borderRadius: '0.2rem',
        objectFit: 'cover',
        position: 'absolute',
        padding: '1rem',
        // opacity: 0.4,
    } as const;
    const title = {
        color: 'rgba(85, 26, 139, 1)',
        fontSize: '18px', 
        marginLeft: '0.5rem',
    };

    const tag__container = {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
    } as const;
    const tag = {
          font: '100% $font-regular',
          marginLeft: '0.5rem',
          fontSize: '10px',
          color: '#0b5c66',
          textTransform: 'uppercase',
    } as const;

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
            <div style={overlayed && textBox}>
                <p style={{...title, ...customStyle}}>{article?.title}</p>
                <div style={tag__container}>
                    <Link style={tag} className="tag" to={`/blog/categories/${article?.categories}`}>
                        {article?.categories}
                    </Link>
                </div>
            </div>
        </article>
    )
};
