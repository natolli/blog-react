import styled, { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./theme";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    /* ${normalize()} */
    
    
    *, *::after, *::before{
        margin:0; 
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 16px;
        scroll-behavior: smooth;
        
    }
    body{
        font-family: 'Lato', sans-serif;
        background-color: ${defaultTheme.tertiaryColor}
    }
    
    a{
        text-decoration: none;
        color: #333
    }

    ul{
        list-style:none;
    }

    h1,h2{
        line-height: 1.3;
    }
    img{
        width: 100%;
    }

    
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
