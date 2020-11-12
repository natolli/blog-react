import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const ShowCase = styled.div`
  background-color: ${defaultTheme.primaryColor};
  position: absolute;
  height: 65vh;
`;
export const ShowCaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  .content {
    padding-top: 70px;
    @media (max-width: 810px) {
      height: 90%;
      align-self: center;
      text-align: center;
    }
  }
  .title {
    color: ${defaultTheme.tertiaryColor};
    font-size: 4rem;
    @media (max-width: 810px) {
      font-size: 3rem;
    }
  }
  @media (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Cards = styled.div`
  background-color: ${defaultTheme.tertiaryColor};
  position: relative;
  top: 650px;
  .sp {
    margin-bottom: 100px;
  }
  margin-bottom: 100px;
`;
