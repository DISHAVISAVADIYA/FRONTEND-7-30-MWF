import React from 'react';
import ReactDOM from 'react-dom/client';
import Img from './components/Img';
import './components/style.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Img />
   
  </React.StrictMode>
);

reportWebVitals();
