
import React from 'react';
import { Article } from '../../pages';
import { pictureCell } from '../cells/pictureCell';

export const topRoll = (articles: Article[], color: { color: string}) =>  {
    
    return (
      <div className='grid'>
        <div className='cell is-row-span-2'>
            {pictureCell(articles[0], color)}
        </div>
        <div className='cell'>
            {pictureCell(articles[1], color)}
            {/* <div className='grid'>
                <div className='cell'>
                    {pictureCell(articles[2])}
                </div>
                <div className='cell'>
                    {pictureCell(articles[3])}
                </div>
            </div> */}
        </div>
      </div>
    )
};
