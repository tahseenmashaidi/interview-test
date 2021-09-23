import React from 'react';
import {IButtonProps} from './types';

const Button: React.FC<IButtonProps> = ({ disable, onClick, value, type}) => {

    const button = () => (
        <button disabled={disable} className={`button ${`${'button__' + type}` || ''}  }`}
                onClick={onClick}>
        {value}
        </button>
    );

    return (
        <>    
            {button()}     
        </>
    )
};

export default Button;
