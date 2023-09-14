import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/style.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import {store} from './store'; // Redux 스토어

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = {
  palette: {
    primary: {
      main: '#FAF1E4',
    },
    secondary: {
      main: '#435334',
    },
    error: {
      main: '#435334'
    },
    warning : {
      main: '#435334'
    },
    success : {
      main: '#435334',
    }
  }
}
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <App />
    </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
