import React from "react";
import Info from "../../components/info/Info";
import { MailSvg } from "../../assets/mail";

const PasswordEmail = () => {
  return (
    <Info>
      <MailSvg />
      <h1 className="title">
        Check your email, we've sent you a link to change your password
      </h1>
    </Info>
  );
};

export default PasswordEmail;
