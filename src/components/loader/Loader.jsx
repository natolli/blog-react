import React from "react";
import loader from "../../assets/loader.gif";

const Loader = () => {
  return (
    <>
      <img
        src={loader}
        alt="Loading...."
        style={{ height: "150px", width: "150px" }}
      />
    </>
  );
};

export default Loader;
