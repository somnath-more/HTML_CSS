import React from 'react';
import TextField  from '@mui/material/TextField';
export interface InputFieldProps {
  // label: string;
  // type?: string;
  // 
  // value?: string;
  placeholder?: string;
  style?:React.CSSProperties;
  //onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//121
 const TextFieldComponent=(props:InputFieldProps) =>{
  const { placeholder,style}= props;
 

    return <TextField style={style} placeholder={placeholder}/>
  
};
export default TextFieldComponent;
