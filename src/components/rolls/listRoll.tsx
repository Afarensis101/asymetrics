
import React from 'react';
import { Article } from '../../pages';
import { listCell } from '../cells/listCell';

export const listRoll = (articles: Article[], color: { color: string}) =>  {
     
    return (
        <div>
            {articles.map((item) => listCell(item, color))}
        </div>
    )
};
