import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import About from "./pages/about/About";
import SignInSignUp from "./pages/sign/SignInSignUp";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </>
  );
}

export default App;
