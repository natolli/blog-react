import styled from "styled-components";
import { defaultTheme } from "../../utils/theme";

export const CardWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const CardDetailContainer = styled.div`
  border: 1px solid ${defaultTheme.fadeColor};
  padding: 10px;
  height: 80vh;
  width: 80vw;
  background-color: #f2eeee;
  margin: 0 auto;
  color: ${defaultTheme.secondaryColor};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    height: 140vh;
  }
  .close-btn {
    position: absolute;
    border: none;
    background: none;
    font-size: 2rem;
    right: 150px;
    outline: none;
    cursor: pointer;
    @media (max-width: 768px) {
      right: 50px;
    }
  }
  .textarea {
    width: 100%;
    height: 80px;
    @media (max-width: 768px) {
      height: 50px;
    }
    resize: none;
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 0.5rem;
    color: #666;
    box-shadow: inset 0 0 0.25rem #ddd;
    &:focus {
      outline: none;
      border: 1px solid darken(#ddd, 5%);
      box-shadow: inset 0 0 0.5rem darken(#ddd, 5%);
    }
    &[placeholder] {
      font-style: italic;
      font-size: 0.875rem;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .first {
      .detail-img {
      }
      .name {
        font-size: 2.5rem;
        font-weight: 500;
      }

      .description {
        margin-top: 5px;
        font-size: 1.2rem;
      }
    }
    .date {
      font-weight: bold;
      color: #222;
    }
  }
  .comment {
    overflow: auto;
    .title {
      text-align: center;
      height: 9.7%;
    }
    .comments {
      height: 65%;
      background-color: #e0dddd;
      overflow-y: scroll;
      overflow-x: hidden;
      .comment {
        &-box {
          margin: 10px auto;
          width: 90%;
        }
        &-name {
          background-color: white;
          width: fit-content;
          padding: 10px 10px 5px 10px;
          font-size: 1.4rem;
          font-weight: bold;
          border-right: 1px solid gray;
          border-left: 1px solid gray;
          border-top: 1px solid gray;
        }
        &-detail {
          border: 1px solid gray;
          word-wrap: break-word;
          font-size: 1.1rem;
          color: black;
          background-color: white;
          padding: 5px 10px 10px 10px;
        }
      }
    }
    .add-comment {
    }
  }
`;
