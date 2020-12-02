import React, { useState } from "react";
import TextField from "../textField/TextField";
import { withRouter, Redirect } from "react-router-dom";
import { SignInContainer } from "./Signin.styles";
import { LOGIN } from "../../graphql/mutation/login";
import InputButton from "../button/InputButton";
import { useMutation } from "@apollo/client";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
import { ME } from "../../graphql/queries/me";
import { FORGOT_PASSWORD } from "../../graphql/mutation/forgotPassword";

const SignIn = ({ setNewAccount, history }) => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN, {
    errorPolicy: "none",
    update(cache, { data: { login } }) {
      cache.writeQuery({
        query: ME,
        data: {
          me: login.user,
        },
      });
    },
  });

  const [
    forgotPasswordEmail,
    {
      data: forgotPasswordData,
      loading: forgotPasswordLoading,
      error: forgotPasswordError,
    },
  ] = useMutation(FORGOT_PASSWORD);

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signInForm;

  const handleSubmit = async (e) => {
    loginUser({
      variables: { input: signInForm },
    });
  };

  const forgotPassword = () => {
    if (email === "") {
      return;
    }
    forgotPasswordEmail({
      variables: { email: email },
    });
  };

  if (loading || forgotPasswordLoading) {
    return <Loader />;
  }

  if (error || forgotPasswordError) {
    return (
      <>
        <SignIn />
        <Alert>Error 404</Alert>
      </>
    );
  }

  if (data && data.login.error !== null) {
    return (
      <>
        <SignIn />
        <Alert>{data.login.error}</Alert>
      </>
    );
  }

  if (data && data.login.user !== null) {
    return <Redirect to="/posts" />;
  }
  if (forgotPasswordData && forgotPasswordData.forgotPassword === true) {
    history.push("/user/change-password");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInForm({ ...signInForm, [name]: value });
  };

  return (
    <SignInContainer>
      <h1 className="title">Sign In</h1>
      <TextField
        name="email"
        type="email"
        handleChange={handleChange}
        label="Email"
        value={email}
        required
      />
      <TextField
        name="password"
        type="password"
        handleChange={handleChange}
        label="Password"
        value={password}
        required
      />
      <p className="signLink" onClick={() => setNewAccount(true)}>
        I don't have an account
      </p>

      <p className="signLink" onClick={() => forgotPassword()}>
        Forgot Password
      </p>

      <InputButton
        type="submit"
        onClick={(e) => handleSubmit(e)}
        modifiers={["rounded", "secondary"]}
      >
        Sign In
      </InputButton>
    </SignInContainer>
  );
};

export default withRouter(SignIn);
