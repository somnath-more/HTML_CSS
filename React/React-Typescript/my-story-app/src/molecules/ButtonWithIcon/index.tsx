import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
;


const StyledButton = styled(Button)(({ theme }) => ({
   color:"white",
  height: "48px",
  width: "384px",
  textTransform:"none",
  backgroundColor:"blue",
}));

type Props = {
  label: string;

  
  icon: ReactNode | any;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;

};

export const ButtonWithIcon = ({ label, icon, variant, onClick }: Props) => {
  return (
    <StyledButton variant={variant} startIcon={icon} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export const AddButton = () => {
  return (
    <ButtonWithIcon
      label="Add to library"
      icon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 6V0H8.5V6H14.5V8H8.5V14H6.5V8H0.5V6H6.5Z" fill="white"/>
      </svg>}
      variant="text"    />
  );
}





