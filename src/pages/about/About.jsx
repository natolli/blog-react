import React from "react";
import { Container } from "../../utils/Global";
import { AboutStyle } from "./About.styles";

const About = () => {
  return (
    <Container>
      <AboutStyle>
        <h1 className="title">About</h1>
        <p className="desc">This is a simple react blog application </p>
      </AboutStyle>
    </Container>
  );
};

export default About;
