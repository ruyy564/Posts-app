import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import store from './store/index';
import { Provider } from 'react-redux';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
