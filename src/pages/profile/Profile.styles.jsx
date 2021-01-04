import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const ProfileContainer = styled.div`
  .plus {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
  .detail {
    height: 50vh;
    padding: 40px 100px;
    background-color: ${defaultTheme.fadeColor};
    display: flex;
    justify-content: space-between;
    color: ${defaultTheme.secondaryColor};
    margin-bottom: 50px;
    @media (max-width: 768px) {
      padding: 40px 10px;
    }
    .first {
      .name {
        font-family: ${defaultTheme.primaryFont};
        font-weight: 100;
        font-size: 7rem;
        @media (max-width: 768px) {
          font-size: 4rem;
        }
      }
      .email {
        font-size: 2rem;
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
    .second {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .blogged {
        font-size: 2rem;
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }
`;
