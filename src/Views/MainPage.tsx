import React, {useState, useEffect} from 'react';
import Form from '../components/Form'
import Button  from '../components/Button';
import Card from "../components/Card";

const MainPage = () => {
    const [activeForm, setActiveForm] = useState<string>('');
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [firstForm,setFirstForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        age:'',
        gender:''
    });
    const [secondForm,setSecondForm] = useState({
        MobileNumber:'',
        address:'',
        socialUrl:''
    });
    const validate=(arr)=>{
        let valid=true
        Object.keys(arr).map((key)=> {
           valid = !!arr[key]?.length;
        })
        return valid;
    }
    const setInitialData = ()=>{
        const fstForm = localStorage.getItem("firstForm");
        const scnForm = localStorage.getItem("secondForm");

        const FirstformData = fstForm&&JSON.parse(fstForm);
        const SecondformData = scnForm&&JSON.parse(scnForm);

        if(FirstformData){
            setFirstForm({
                firstName:FirstformData?.firstName,
                lastName:FirstformData?.lastName,
                email:FirstformData?.email,
                age:FirstformData?.age,
                gender:FirstformData?.gender
            })
        }
        if(SecondformData){
            setSecondForm({
                MobileNumber:SecondformData.MobileNumber,
                address:SecondformData.address,
                socialUrl:SecondformData.socialUrl
            })
        }

    }
    useEffect(()=>{
        setInitialData()
    },[localStorage])

    const handleChange = (evt)=> {
        const value = evt.target.value;
        setIsEditMode(true)
        if (activeForm==='form1'){
            setFirstForm({
                ...firstForm,
                [evt.target.name]: value
            });
        }else {
            setSecondForm({
                ...secondForm,
                [evt.target.name]: value
            });
        }
    }


    const onFormOneSubmit = (e)=>{
        e.preventDefault()
        if (activeForm==='form1'){
                localStorage.setItem('firstForm',JSON.stringify(firstForm))
        }else {
            localStorage.setItem('secondForm',JSON.stringify(secondForm))
        }
        setActiveForm('')
        setIsShow(true)
    }
    const onCancel=()=>{
        setIsEditMode(false)
        setActiveForm('')
        setIsShow(false)
        setInitialData()
    }
    const renderCards=()=>(
        <>
            {validate(firstForm) && <Card data={firstForm}/>}
            {validate(secondForm) && <Card data={secondForm}/>}
        </>
    )
    return (
        <div className="main-page">
            <h2>Select  a form</h2>
            <div className="cta-buttons">
                <Button
                    className={`primary-button ${activeForm==='form1'&& 'active'}`}
                    onClick={()=> {
                        setActiveForm('form1')
                        setIsShow(false)
                    }}
                    value="Form 1"
                    type="primary"
                    disable={false}
                    size="medium"
                />
                <Button
                    className={`primary-button ${activeForm==='form2'&& 'active'}`}
                    onClick={()=> {
                        setActiveForm('form2')
                        setIsShow(false)
                    }}
                    value="Form 2"
                    type="primary"
                    disable={false}
                    size="medium"
                />
            </div>
          
            {activeForm === 'form1' &&
                <Form
                    formType={activeForm}
                    formData={firstForm}
                    isEditMode={isEditMode}
                    isValidForm={!!firstForm.email}
                    onCancel={onCancel}
                    onSubmit={onFormOneSubmit}
                    handleChange={handleChange}
                />
            }
            {activeForm === 'form2' &&
                <Form
                    formType={activeForm}    
                    formData={secondForm}
                    isEditMode={isEditMode}
                    isValidForm={!!secondForm.address}
                    onCancel={onCancel}
                    onSubmit={onFormOneSubmit}
                    handleChange={handleChange}
                    
                    
                />
            }
            {
                <div className={'display-data'}>
                    {isShow &&renderCards()}
                    {(activeForm==='')&&!isShow && renderCards()}

                </div>
            }
        </div>
    )
};

export default MainPage
