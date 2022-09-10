import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  --blue-water:#27569C;
  --cream:#E4B062;
  --main-background:#F5F5F5;
  --main-font-color:#000;
  
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color:var(--main-font-color);
},

body{
  background-color:var(--main-background);
}

`;

export default GlobalStyle;
