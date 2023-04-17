import React from "react";
import PropTypes from "prop-types";
//import Typography from "@material-ui/core/Typography";
import { Typography } from "@mui/material";
const getMappedVariant = (variant: string) => {
  switch (variant) {
    case "header":
      return "h6";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

interface Props {
  children?: string | any;
  style?: React.CSSProperties | any;

  fontSize?: any;
  variant?: "header" | "title" | "subtitle" | "body";
}

const TypographyComponent: React.FC<Props> = ({
  variant = "body",
  style = "#2C2C2E",
  
  children,
}) => <Typography variant={getMappedVariant(variant)}>{children}</Typography>;

TypographyComponent.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

export default TypographyComponent;
