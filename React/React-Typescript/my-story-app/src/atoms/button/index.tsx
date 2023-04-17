import React from 'react';

interface buttonProps{
    label?:string;
    style?:React.CSSProperties;
}



 const ButtonComponent = (props:buttonProps) => {
    const {label,style}=props;
  return (
    <ButtonComponent style={style} label={label}/>
  )
}
export default ButtonComponent;
