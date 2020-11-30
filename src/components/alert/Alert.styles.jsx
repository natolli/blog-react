import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
    0%{
        right: -20px;
        opacity: 0; 
    }
    100%{
        bottom: 100px;
        right: 70px;
        opacity: 1;
    }
    
`;

export const AlertContainer = styled.div`
  padding: 7px 30px;
  border-radius: 10px;
  position: fixed;
  bottom: 100px;
  right: 70px;
  animation-name: ${fadeAnimation};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 550px;
  background-color: #f0386b;
  color: white;
  .title {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .sign {
    font-weight: 500;
    font-size: 2rem;
  }
`;
