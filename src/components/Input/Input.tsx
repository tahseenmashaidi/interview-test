import React, { useState, useRef } from 'react';
import IInputProps from './types';


const Input: React.FC<IInputProps> = ({name, onChange, value, placeholder, type, className, disabled, autoComplete, errorMsg, error, required, label}) => {

    const [focus, setFocus] = useState(false);
    const InputRef = useRef(null);

    const handleBlur = () => {
        if(value === ''){setFocus(false)}
    };

    const handleFocus = (el) => {
        if(window.innerWidth < 554){
            const elementTop = window.pageYOffset + el.target.getBoundingClientRect().top;
            window.scrollTo(0, elementTop - 180);
        };
    };

    return (
        <>
        <label id={name} onFocus={(e) => handleFocus(e)}  className={`input ${className} ${errorMsg ? 'input--error' : ''} ${(focus || value || className?.includes('input--error')) ? 'active' : ''} ${disabled ? 'input--disabled' : ''} ${name || ''}`}  >
                <label className={'label'}>{label}{required&& <span>  * </span> }</label> 
                <input
                    ref={InputRef}
                    onFocus={() => {setFocus(true);}}
                    onBlur={handleBlur}
                    disabled={disabled}
                    id={name}
                    name={name}
                    type={type}
                    autoComplete={autoComplete ? 'true' : 'false'}
                    onChange={onChange}
                    value={value}
                    className="input-field"
                    placeholder={placeholder}
                    required={required}
                />
                {error && <p className={`input-err-msg`}>{errorMsg}</p> }
            </label>
        </>
    )
};

export default Input;
