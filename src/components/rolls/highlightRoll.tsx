
import React from 'react';
import { Article } from '../../pages';
import { hugeCell } from '../cells/hugeCell';
import { listCell } from '../cells/listCell';

export const highlightRoll = (articles: Article[], color: { color: string }) =>  {
    
    return (
      <div className='columns'>
        <div className='column'>
            {hugeCell(articles[0], color)}
        </div>
        <div className='column'>
          {articles.map((item: Article) => listCell(item, color)).slice(1,5)}
        </div>
      </div>
    )
};
