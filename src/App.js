import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import About from "./pages/about/About";
import SignInSignUp from "./pages/sign/SignInSignUp";
import Posts from "./pages/posts/Posts";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import NotFound from "./pages/notFound/NotFound";
import Confirm from "./pages/confirm/Confirm";
import ConfirmSucess from "./pages/confirm/ConfirmSucess";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={SignInSignUp} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/user/confirm" component={Confirm} />
        <Route
          exact
          path="/user/confirm/:confirmId"
          component={ConfirmSucess}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
