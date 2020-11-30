import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
