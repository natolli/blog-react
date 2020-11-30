import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const SignInContainer = styled.form`
  padding: 30px 50px 30px 50px;
  box-shadow: 0 0 3px;
  border-radius: 10px;
  width: 450px;
  .title {
    font-weight: bold;
    font-size: 4rem;
  }
  .signLink {
    display: block;
    margin-bottom: 15px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
