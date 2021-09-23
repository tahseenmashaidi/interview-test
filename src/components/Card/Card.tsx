import React from 'react';
import {ICardProps} from './types';

const Card: React.FC<ICardProps> = ({data }) => {


    return (
        <div className={'card-box'}>
            {
                Object.keys(data).map((key)=> (
                    <div className={'card'}>
                        <div>{[key]}:</div>
                        <div>{data[key]}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;
