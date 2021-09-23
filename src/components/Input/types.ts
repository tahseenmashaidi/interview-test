import React from 'react'
interface IInputProps {
    
    name: string,
    placeholder: string,
    type: string,
    onChange: React.ChangeEventHandler,
    autoComplete?:React.InputHTMLAttributes<boolean>,
    value?: string,
    label?: string,
    className?: string,
    errorMsg?: string | boolean,
    error?: boolean,
    disabled?: boolean,
    required?: boolean,
    

}



export default IInputProps;
