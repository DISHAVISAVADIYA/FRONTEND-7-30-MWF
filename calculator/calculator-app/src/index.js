import React  from "react";
import  ReactDOM  from "react-dom/client";
import {Plus,Minus,Multi,Divid} from "./Calc";
import reportWebvitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(
    <React.StrictMode>
        <button type="button"  onClick={Plus} >Addition</button>
        <button type="button" onClick={Minus}>Substaction</button>
        <button type="button" onClick={Multi}>Multiple</button>
        <button type="button" onClick={Divid}>Division</button>


    </React.StrictMode>
);
reportWebvitals();