import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { ThemeProvider } from './ThemeContext';
import Background from './Background';

import RouterRoute from './Router';


ReactDOM.render(
  <React.StrictMode>
      <Background>
        <ThemeProvider>
         
          <RouterRoute />
        </ThemeProvider>,
      </Background>,

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

