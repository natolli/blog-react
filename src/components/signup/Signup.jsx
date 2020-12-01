import React, { useState } from "react";
import TextField from "../textField/TextField";
import InputButton from "../button/InputButton";
import { SignUpContainer } from "./Signup.styles";
import Alert from "../alert/Alert";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../graphql/mutation/register.js";
import Loader from "../loader/Loader";
import { Redirect } from "react-router-dom";

const SignUp = ({ setNewAccount }) => {
  const [register, { data, loading, error }] = useMutation(REGISTER);
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { email, password, firstName, lastName } = signUpForm;

  const handleSubmit = async (e) => {
    e.preventDefault();

    register({
      variables: { data: signUpForm },
    }).catch((e) => console.log(e));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <SignUp />
        <Alert>Error 404</Alert>
      </>
    );
  }
  if (data && data.register.error !== null) {
    return (
      <>
        <SignUp />
        <Alert>{data.register.error}</Alert>
      </>
    );
  }

  if (data && data.register.user !== null) {
    return <Redirect to="/user/confirm" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  return (
    <SignUpContainer>
      <h1 className="title">Sign Up</h1>
      <div className="part">
        <div className="part_one">
          <TextField
            name="firstName"
            type="text"
            handleChange={handleChange}
            label="First Name"
            value={firstName}
            required
          />
          <TextField
            name="lastName"
            type="text"
            handleChange={handleChange}
            label="Last Name"
            value={lastName}
            required
          />
        </div>
        <div className="part_two">
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
        </div>
      </div>
      <p className="signLink" onClick={() => setNewAccount(false)}>
        I already have an account
      </p>

      <InputButton
        type="submit"
        modifiers={["rounded", "secondary"]}
        onClick={(e) => handleSubmit(e)}
      >
        Sign Up
      </InputButton>
    </SignUpContainer>
  );
};

export default SignUp;
