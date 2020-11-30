import React, { useState } from "react";
import TextField from "../textField/TextField";
import InputButton from "../button/InputButton";
import { SignUpContainer } from "./Signup.styles";
// import Alert from "../alert/Alert";
// import { useQuery, useMutation } from "@apollo/client";
// import { Register } from "../../graphql/mutation/register.js";
const SignUp = ({ setNewAccount }) => {
  // const [{}] = useQuery(Register);
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { email, password, firstName, lastName } = signUpForm;

  const handleSubmit = () => {
    console.log("Register Submitted");
  };

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
        onClick={() => handleSubmit()}
      >
        Sign Up
      </InputButton>
    </SignUpContainer>
  );
};

export default SignUp;
