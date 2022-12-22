import React from 'react';
import ReactDOM from 'react-dom/client';
import './Employee.css';
import Employee from './Employee';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>
);
reportWebVitals();
