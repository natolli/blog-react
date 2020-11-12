import React from "react";
import styled from "styled-components";
import { Container } from "../../utils/Global";
import { defaultTheme } from "../../utils/theme";

const FooterContainer = styled.div`
  background-color: ${defaultTheme.fadeColor};
`;

const StyledFooter = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${defaultTheme.secondaryColor};
  .logo {
    font-family: ${defaultTheme.primaryFont};
    font-style: italic;
    font-weight: 500;
  }
  .trademark {
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <StyledFooter>
          <h1 className="logo">Deep</h1>
          <p className="trademark">copyright &copy; 2020</p>
        </StyledFooter>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
