import React from "react";
import { RightNavContainer } from "./Navbar.styles";
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
  return (
    <RightNavContainer open={open}>
      <li className="links">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="links">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li className="links">
        <Link to="/signin" className="link">
          Sign In
        </Link>
      </li>
    </RightNavContainer>
  );
};

export default RightNav;
