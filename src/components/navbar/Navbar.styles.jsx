import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const NavBar = styled.div`
  background-color: ${defaultTheme.primaryColor};
`;

export const NavbarContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-family: ${defaultTheme.primaryFont};
    font-style: italic;
    font-size: 2.5rem;
    color: ${defaultTheme.tertiaryColor};
  }
`;

export const RightNavContainer = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  .links {
    padding: 18px 10px;
  }
  .link {
    color: ${defaultTheme.tertiaryColor};
    font-weight: 300;
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .link {
      color: #fff;
    }
  }
`;
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  .burger-item {
    width: 2rem;
    height: 0.25rem;
    background-color: ${defaultTheme.tertiaryColor};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
