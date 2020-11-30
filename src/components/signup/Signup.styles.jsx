import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const SignUpContainer = styled.form`
  padding: 30px 50px 30px 50px;
  box-shadow: 0 0 3px;

  border-radius: 10px;
  width: 750px;
  @media (max-width: 768px) {
    width: 400px;
  }

  .title {
    font-weight: bold;
    font-size: 4rem;
  }
  .part {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 0;
    }
  }
  .signLink {
    display: block;
    margin-bottom: 15px;
    text-decoration: underline;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
`;
