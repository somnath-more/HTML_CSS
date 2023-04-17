import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";



const StyledButton = styled(Button)(({ theme }) => ({
   color:"black",
  height: "36px",
  width: "101px",
  textTransform:"none",
  borderBlockColor:"black",
}));

type Props = {
  label: string;

  // textTransform?:string|any;
  icon: ReactNode | any;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
};

export const ExportIcon = ({ label, icon, variant, onClick }: Props) => {
  return (
    <StyledButton variant={variant} startIcon={icon} onClick={onClick}>
      {label}
    </StyledButton>
  );
};


