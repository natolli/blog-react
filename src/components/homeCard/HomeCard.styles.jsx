import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 300px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  z-index: 400;
  background-color: ${defaultTheme.tertiaryColor};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1101px) {
    grid-template-columns: 90% 10%;
    .card-image {
      display: none;
    }
    .content {
      .title {
      }
      .description {
      }
    }
  }

  .content {
    color: ${defaultTheme.secondaryColor};
    .title {
      font-family: ${defaultTheme.primaryFont};
      font-size: 4rem;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      @media (max-width: 910px) {
        font-size: 2rem;
      }

      border-bottom: 1px solid ${defaultTheme.fadeColor};
    }
    .description {
      color: ${defaultTheme.darkFadeColor};
      font-size: 2rem;
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }
  }
`;
