import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: black;
    overflow-x: hidden;
  }
  html{
    scroll-behavior: smooth;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;
