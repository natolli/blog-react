import React, { useState } from "react";
import Loader from "../../components/loader/Loader";
import SignIn from "../../components/signin/Signin";
import SignUp from "../../components/signup/Signup";
import { SignInSignUpContainer } from "./SignInSignUp.styles";

const SignInSignUp = () => {
  const [newAccount, setNewAccount] = useState(false);

  return (
    <SignInSignUpContainer>
      {newAccount ? (
        <SignUp setNewAccount={setNewAccount} />
      ) : (
        <SignIn setNewAccount={setNewAccount} />
      )}
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
