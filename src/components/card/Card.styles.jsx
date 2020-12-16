import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const CardContainer = styled.div`
  margin-top: 50px;
  width: 600px;
  min-height: 600px;
  border: 1px solid ${defaultTheme.fadeColor};
  background-color: ${defaultTheme.lightFade};
  color: ${defaultTheme.secondaryColor};
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 450px;
  }
  .header {
    padding: 20px 10px;
    .name {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  .body {
    width: 100%;
    padding: 20px 10px;

    .title {
    }
    .description {
      margin-top: 10px;
      font-size: 1.2rem;
    }
    .bottom {
      width: 100%;
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .first {
        min-height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .topicItems {
          width: 300px;
          display: flex;
        }
        .comment {
          font-size: 1.2rem;
          text-decoration: underline;
        }
      }
      .second {
        .rating {
        }
      }
    }
  }
`;
