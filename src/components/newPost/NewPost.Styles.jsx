import styled, { keyframes } from "styled-components";
import { defaultTheme } from "../../utils/theme";

const show = keyframes`
 0% { 
   opacity:0; 
   transform: translateY(-1000px); 
  }
 
 100% { opacity:1; transform: translateY(0); }
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  .modalContainer {
    width: 1100px;
    height: 600px;
    @media (max-width: 768px) {
      height: 600px;
    }
    .warn {
      margin: 10px 0;
      padding: 10px;
      background-color: #e9a3a3;
      color: ${defaultTheme.secondaryColor};
    }
    background-color: ${defaultTheme.tertiaryColor};
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    padding: 20px 40px;
    position: relative;
    border-radius: 7px;
    animation-name: ${show};
    animation-duration: 0.5s;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .title {
        font-size: 3rem;
        color: ${defaultTheme.secondaryColor};
      }
      .cross {
        font-size: 2.5rem;
        border: none;
        background: none;
        cursor: pointer;
        color: ${defaultTheme.secondaryColor};
        outline: none;
      }
    }
    .textarea {
      width: 100%;
      height: 100px;
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
    .dropzone {
      background-color: rgba(0, 0, 0, 0.1);
      width: 90%;
      height: 150px;
      
      @media (max-width: 768px) {
        height: 80px;
      }
      border-radius: 10px;
      border: 1px dashed rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
      outline: none;
      cursor: pointer;
    }
  }

  .form {
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 5px;
    }
    .titleContainer {
      .title-label {
        color: ${defaultTheme.secondaryColor};
        margin-bottom: 20px;
      }
      .titleLabel {
        width: 70%;
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
    }
    .check-group {
      display: grid;
      gap: 5px;
      grid-template-columns: repeat(2, 1fr);
      .check {
        width: 40px;
      }
      .check-label {
        color: ${defaultTheme.secondaryColor};
        font-size: 1.2rem;
      }
    }
  }
`;
