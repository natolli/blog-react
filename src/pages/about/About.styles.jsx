import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const AboutStyle = styled.div`
  .title {
    margin: 70px 0;
    font-size: 5rem;
    color: ${defaultTheme.secondaryFont};
  }
  .desc {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 500px;
  }
`;
