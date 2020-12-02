import React, { useState } from "react";
import Info from "../../components/info/Info";
import { Form } from "./styles";
import TextField from "../../components/textField/TextField";
import InputButton from "../../components/button/InputButton";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CHANGE_PASSWORD } from "../../graphql/mutation/changePassword";
import { ConfirmSucessSvg } from "../../assets/confirmSucess";
import Loader from "../../components/loader/Loader";

const ChangePassword = () => {
  const [password, setPassword] = useState("");

  const { passwordId } = useParams();
  const [changePassword, { data, loading, error }] = useMutation(
    CHANGE_PASSWORD
  );

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  let body = (
    <Form>
      <h1>New Password</h1>
      <TextField
        name="password"
        type="password"
        handleChange={handleChange}
        label="Password"
        value={password}
        required
      />
      <InputButton
        type="submit"
        onClick={(e) => handleSubmit(e)}
        modifiers={["rounded", "secondary"]}
      >
        Change
      </InputButton>
    </Form>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "") {
      return;
    }

    changePassword({
      variables: { data: { password: password, token: passwordId } },
    });
  };

  if (loading) {
    return (
      <Info>
        <Loader />
      </Info>
    );
  }
  if (error) {
    body = (
      <>
        <h1>404 | Error</h1>
      </>
    );
  }
  if (data && data.changePassword) {
    body = (
      <>
        <ConfirmSucessSvg />
        <h1>
          Password successfully changed. You can now signin with your new
          account.
        </h1>
      </>
    );
  } else if (data && !data.changePassword) {
    body = (
      <>
        <h1>404 | Error</h1>
      </>
    );
  }

  return <Info>{body}</Info>;
};

export default ChangePassword;
