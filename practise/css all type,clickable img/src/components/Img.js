import React from 'react';
const a = 'https://picsum.photos/400/300';
const b = 'https://picsum.photos/400/300';
const c = 'https://picsum.photos/400/300';
const link1 = 'https://www.google.com/';
const link2 = 'https://www.youtube.com/shorts/1XQXIsNnbkI';
// internal css for h1 tag
const heading ={
  background: 'rgb(240, 212, 212)',
  color: 'black',
  fontFamily: "'Dancing Script', cursive",
  textTransform: 'uppercase',
  letterSpacing: '3px',
  padding: '10px',
  textAlign : 'center'
}
function Img(){
return(
  <>
  <h1 style={heading}>clickable image</h1>
<img src={a} style={{'margin':'20px'}}/>
<a href={link2}>
<img src={b} style={{'margin':'20px'}}/>
</a>
<a href={link1}>
<img src={c} style={{'margin':'20px'}}/>
</a>


  </>

);
}
export default Img;