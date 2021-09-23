
import React  from 'react';
import IRadioProps from './types';


const Radio: React.FC<IRadioProps> = ({checked,name ,value,onChange,label}) => {

    return (
        <div className={'radio-container'}>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={(event)=>onChange(event)}
                />
                {label}
            </label>
        </div>
    )
};

export default Radio;
