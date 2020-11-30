import React, { useState } from "react";
import TextField from "../textField/TextField";
import { Link, Redirect, useHistory } from "react-router-dom";
import { SignInContainer } from "./Signin.styles";
import { LOGIN } from "../../graphql/mutation/login";
import InputButton from "../button/InputButton";
import { useMutation } from "@apollo/client";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
import { ME } from "../../graphql/queries/me";

const SignIn = ({ setNewAccount }) => {
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

  const history = useHistory();

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
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

      <Link className="signLink">Forgot Password</Link>

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

export default SignIn;
