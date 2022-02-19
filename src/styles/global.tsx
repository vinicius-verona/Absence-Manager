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
    background: ${theme.palettes.primary};
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${theme.palettes.primary};
  }
  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.palettes.light};
    font-family: 'Source Sans Pro', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
