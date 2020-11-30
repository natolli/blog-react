import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme } from "../../utils/theme";

const BUTTON_MODIFIRES = {
  primary: () => `
        background-color: ${defaultTheme.primaryColor};
        color: ${defaultTheme.tertiaryColor};
    `,
  secondary: () => `
  background-color: ${defaultTheme.secondaryColor};
  color: ${defaultTheme.tertiaryColor};
  font-size: 1.5rem; 
  &:hover{
    opacity: .8;
  }
`,
  primaryTransparent: () => `
        border: 3px solid ${defaultTheme.tertiaryColor};
        background-color: transparent;
        color: ${defaultTheme.tertiaryColor};
        
        &:hover{
            background-color: ${defaultTheme.tertiaryColor};
        color: ${defaultTheme.primaryColor};
        }
    `,
  rounded: () => `
        border-radius: 10px;
    `,

  small: () => `
        font-size: 1.4rem;
        padding: 5px;
        border: 1px solid ${defaultTheme.tertiaryColor};
        background: transparent;
        transition: all 0.3s;
        &:hover{
          text-decoration:none;  
        }
        
    `,
};

export const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 1.8rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${applyStyleModifiers(BUTTON_MODIFIRES)}
`;

export const StyledInputButton = styled.input`
  border: none;
  padding: 10px 15px;
  font-size: 1.8rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${applyStyleModifiers(BUTTON_MODIFIRES)}
`;
