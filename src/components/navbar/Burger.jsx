import React, { useState } from "react";
import RightNav from "./RightNav";
import { StyledBurger } from "./Navbar.styles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="burger-item" />
        <div className="burger-item" />
        <div className="burger-item" />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
