import React from "react";
import { InfoContainer } from "./Info.styles";

const Info = (props) => {
  return <InfoContainer>{props.children}</InfoContainer>;
};

export default Info;
