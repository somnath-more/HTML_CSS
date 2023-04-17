import React, { CSSProperties } from "react";
// import './button.css';

interface ButtonProps {
  primary?: boolean; //optional
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  size?: number | "medium";

  label: string;
  border?:string|any;
  height?: string;
  width?: string;
  onClick?: () => never;
  style?: CSSProperties;
}

export const ButtonComponent = ({
  primary = true,
  size = "medium",
  color = "white",
  backgroundColor = "#224DFF",
 border= "none",
  height = "44px",
  width = "384px",
  borderRadius="6px",
  label,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor, height, width, borderRadius, color ,border}}
      {...props}
    >
      {label}
    </button>
  );
};
