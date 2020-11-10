import React from "react";
import { Container } from "../../utils/Global";
import Burger from "./Burger";
import { NavBar, NavbarContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavBar>
      <Container>
        <NavbarContainer>
          <div className="logo">Deep</div>
          <Burger />
        </NavbarContainer>
      </Container>
    </NavBar>
  );
};

export default Navbar;
