import React from "react";
import { ConfirmConatiner } from "./Confirm.styles";
import { MailSvg } from "../../assets/mail";

const Confirm = () => {
  return (
    <ConfirmConatiner>
      <MailSvg />
      <h1 className="title">
        Almost done , we have sent a confirmation email. Confirm your email to
        login.
      </h1>
    </ConfirmConatiner>
  );
};

export default Confirm;
