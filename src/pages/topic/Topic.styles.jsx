import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const TopicContainer = styled.div`
  min-height: 1100px;
  .topic-title {
    padding: 20px 70px;
    background-color: ${defaultTheme.fadeColor};
    color: ${defaultTheme.secondaryColor};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
