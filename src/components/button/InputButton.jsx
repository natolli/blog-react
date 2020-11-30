import React from "react";
import { StyledInputButton } from "./Button.styles";

const InputButton = ({ children, ...otherProps }) => {
  return <StyledInputButton {...otherProps} value={children} />;
};

export default InputButton;
