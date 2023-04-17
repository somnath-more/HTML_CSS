import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const StyledButton = styled(Button)(({ theme }) => ({
  // borderRadius: "50px",
  // fontWeight: 600,
  // padding: "10px 20px",
  // textTransform: "none",
  height: "36px",
  width: "384px",
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

export const GithubButton = () => {
  return (
    <ButtonWithIcon
      label="Github"
      icon={<SvgIcon component={GitHubIcon} viewBox="0 0 24 24" />}
      variant="outlined"
    />
  );
};

export const GoogleButton = () => {
  return (
    <ButtonWithIcon
      label="Google"
      icon={<SvgIcon component={GoogleIcon} viewBox="0 0 24 24" />}
      variant="outlined"
    />
  );
};
