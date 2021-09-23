import React, {useEffect} from 'react';
import {IFormProps} from "./types"
import Input from '../Input';
import Button from '../Button';
import Radio from "../RadioButton";


const Form = (props: IFormProps) => {
        const {formType, onSubmit,onCancel, handleChange, label, formData, isEditMode, isValidForm} = props;

    return (
        <div className="form-wrapper">
                <form onSubmit={onSubmit}>
                    {formType ==='form1'&&
                        <div className="field">
                            <Input value={formData?.firstName} label="First Name" className="input"  type="text" name="firstName" placeholder="type here" onChange={handleChange}/>
                            <Input value={formData?.lastName} label="Last Name" className="input"  type="text" name="lastName" placeholder="type here" onChange={handleChange}/>
                            <Input value={formData?.email} required={true} label="Email" className="input"  type="email" name="email" placeholder="type here" onChange={handleChange}/>
                            <Input value={formData?.age} label="Age" className="input"  type="number" name="age" placeholder="type here" onChange={handleChange}/>
                            <p className={"info"}>Select Gender</p>
                            <div className="gender-options">
                                <Radio checked={formData?.gender === 'male'} value={"male"} name={'gender'} onChange={handleChange} label={"Male"}/>
                                <Radio checked={formData?.gender==='female'} value={"female"} name={'gender'} onChange={handleChange} label={"Female"}/>
                            </div>
                            
                            {isEditMode&&
                                <div className={'button-container'}>
                                    <Button
                                        className="primary-button"
                                        onClick={onSubmit}
                                        value="Save"
                                        type="primary"
                                        disable={false}
                                        size="medium"
                                    />
                                    <Button
                                        className="primary-button"
                                        onClick={onCancel}
                                        value="Cancel"
                                        type="danger"
                                        disable={false}
                                        size="medium"
                                    />
                                </div> 
                           
                            }
                           
                        </div>
                    }
                    {formType ==='form2'&&
                        <div className="field">
                        <label className="label">{label}</label>
                            <Input label="Mobile Number" value={formData?.MobileNumber} className="input"  type="phone" name="MobileNumber" placeholder="your  mobile  number" onChange={handleChange}/>
                            <Input label="Address" value={formData?.address} className="input"  type="test" name="address" placeholder="your address" onChange={handleChange}/>
                            <Input label="Social Url" value={formData?.socialUrl} className="input"  type="text" name="socialUrl" placeholder=" your social here" onChange={handleChange}/>
                            {isEditMode&&
                                <div className={'button-container'}>
                                    <Button
                                        className="primary-button"
                                        onClick={onSubmit}
                                        value="Save"
                                        type="secondary"
                                        disable={false}
                                        size="medium"
                                    />
                                    <Button
                                        className="primary-button"
                                        onClick={onCancel}
                                        value="Cancel"
                                        type="danger"
                                        disable={false}
                                        size="medium"
                                    />
                                </div>
                            }
                            
                        </div>
                    }
                    
                </form>
        </div>
    );
};

export default Form;
