
import React from 'react';
import  "../../../node_modules/bulma/bulma.scss";
import { Article } from '../../pages';
import { hugeCell } from '../cells/hugeCell';

export const simpleRoll = (articles: Article[], color: { color: string}) =>  {
    
    const blogRoll = {
        padding: '0px',
        marginTop: '25px',
    };
    const blogRoll__item = {
        padding: '1.5rem',
    };
    
    return (
      <div>
        <div
          className="
            columns
            is-multiline
            is-three-quarters-mobile
            is-two-thirds-tablet
            is-half-desktop
            is-one-third-widescreen
            is-one-quarter-fullhd
          "
          style={blogRoll}
        >
            {articles?.map(
              (currentArticle: Article) =>
                <div className="is-parent column is-4" key={currentArticle.id} style={blogRoll__item}>
                    {hugeCell(currentArticle, color)}
                </div>
            )}
        </div>
      </div>
    )
};
