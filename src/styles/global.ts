import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: boder-box;
}

body {
  background: #F0F0F5;
  /* background: #000; */
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto sans-serif;
}

`;
