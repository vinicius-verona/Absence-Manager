import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

export default createGlobalStyle`
  html{
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar-track{
    background: ${theme.palettes.primary};
  }
  ::-webkit-scrollbar {
    width: 10px;
    background: ${theme.palettes.primary};
  }
  ::-webkit-scrollbar-thumb{
    background: ${theme.palettes.light};
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${theme.palettes.darkerLight};
  }

  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white /*${theme.palettes.light}*/;
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
`;
