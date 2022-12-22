import React from 'react';
import ReactDOM from 'react-dom/client';
// import Form1 from './form1';
// import './style.css';
import Form2 from './Form2';
import './form2.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Form1 /> */}
    <Form2 />
  </React.StrictMode>
);
reportWebVitals();
