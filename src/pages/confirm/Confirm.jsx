import React from "react";
import { MailSvg } from "../../assets/mail";
import Info from "../../components/info/Info";

const Confirm = () => {
  return (
    <Info>
      <MailSvg />
      <h1 className="title">
        Almost done , we have sent a confirmation email. Confirm your email to
        login.
      </h1>
    </Info>
  );
};

export default Confirm;
