export interface IFormProps {
    value?:string,
    handleChange: React.ChangeEventHandler,
    onSubmit: (e: any) => void,
    onCancel: (e: any) => void,
    label?: boolean,
    isValidForm:boolean
    formType:string,
    isEditMode:boolean,
    setActiveForm?:string,
    formData?:any
}
