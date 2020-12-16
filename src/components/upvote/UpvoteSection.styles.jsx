import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const UpvoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btns {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    .x {
      font-size: 3.5rem;
      margin: -15px 0;
      cursor: pointer;
      color: #474747;
    }
  }
  .score {
    font-size: 5rem;
    padding-bottom: 20px;
    margin-right: 20px;
  }
`;
