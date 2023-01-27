import React from "react";
import Left from './Left';
import Right from './Right';
import "./style.css";

function Section() {
    return (
        <>
            <div className='section' >
            <Left />
            <Right />
            </div>
        </>
    )
}
export default Section;