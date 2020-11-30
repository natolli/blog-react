import React, { useState, useEffect } from "react";
import { AlertContainer } from "./Alert.styles";

const Alert = ({ children }) => {
  const [msg, setMsg] = useState(children);

  useEffect(() => {
    setTimeout(() => setMsg(null), 3000);
  }, []);

  return (
    msg && (
      <AlertContainer>
        <p className="title">{msg}</p>
        <span className="sign">&#9888;</span>
      </AlertContainer>
    )
  );
};

export default Alert;
