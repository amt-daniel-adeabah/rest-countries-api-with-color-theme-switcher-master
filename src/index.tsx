import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { ApiProvider } from './contexts/ApiContext';
import { BrowserRouter as Routes } from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ThemeProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


