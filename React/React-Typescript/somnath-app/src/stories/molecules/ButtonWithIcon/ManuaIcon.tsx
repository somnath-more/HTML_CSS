import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";



const StyledButton = styled(Button)(({ theme }) => ({
  color:"#FFFFFF",
  height: "36px",
  width: "147px",
  textTransform:"none",
  backgroundColor:"#224DFF",
}));

type Props = {
  label: string;

  // textTransform?:string|any;
  icon: ReactNode | any;
  variant?: "text" | "outlined" | "contained";
  // onClick?: () => void;
};

export const ManuaIcon = ({ label, icon, variant }: Props) => {
  return (
    <StyledButton variant={variant} startIcon={icon} >
      {label}
    </StyledButton>
  );
};


