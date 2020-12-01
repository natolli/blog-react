import React from "react";
import { NotFoundImage } from "../../assets/notFoundImage";
import { NotFoundConatiner } from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundConatiner>
      <NotFoundImage />
      <h1 className="title">404 | Page Not Found</h1>
    </NotFoundConatiner>
  );
};

export default NotFound;
