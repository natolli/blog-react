import React from "react";
import { NotFoundImage } from "../../assets/notFoundImage";
import Info from "../../components/info/Info";

const NotFound = () => {
  return (
    <Info>
      <NotFoundImage />
      <h1 className="title">404 | Page Not Found</h1>
    </Info>
  );
};

export default NotFound;
