import React from "react";
const g1 = 'image/i2.jpg';
const g2 = 'i1.jpg';
const g3 = 'image/i3.jpg';
const g4 = 'image/i4.jpg';
const g5 = 'image/i5.jpg';
const g6 = 'image/i6.jpg';
const g7 = 'image/i7.jpg';
const g8 = 'image/i8.jpg';


function Gallary() {
    return (
    <React.Fragment>
        <h1 className="gal">GALLARY</h1>
        <div className="container">
        <img src={g1} alt="picture" title="pic"/>
        <img src={g2} alt="picture" title="pic"/>
        <img src={g3} alt="picture" title="pic"/>
        <img src={g4} alt="picture" title="pic"/>
        <img src={g5} alt="picture" title="pic"/>
        <img src={g6} alt="picture" title="pic"/>
        <img src={g7} alt="picture" title="pic"/>
        <img src={g8} alt="picture" title="pic"/>
        </div>
    </React.Fragment>
    
    );
  }
  
  export default Gallary;
  