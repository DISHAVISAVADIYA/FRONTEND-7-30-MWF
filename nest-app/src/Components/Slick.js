// import React from "react";
// import { useState } from "react";
 
 
// import Slider from "react-slick";
 
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
// export default function Slick() {
 
//   const config = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
 
//   const [settings, setSettings] = useState(config);
 
//   const products = [
//     {
//       img: 'https://images.pexels.com/photos/14433537/pexels-photo-14433537.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       title: 'Dolore magna',
//       text: 'Lorem ipsum dolor sit amet elit.'
//     },
//     {
//       img: '/images/product2.jpg',
//       title: 'Eget est lorem',
//       text: 'Lorem Ipsum adipiscing elit ipsum.'
//     },
//     {
//       img: '/images/product3.jpg',
//       title: 'Tempus imperdiet',
//       text: 'Orci porta non pulvinar neque laoreet.'
//     },
//     {
//       img: '/images/product4.jpg',
//       title: 'Mattis rhoncus',
//       text: 'Bibendum neque egestas congue quisque.'
//     },
//     {
//       img: '/images/product5.jpg',
//       title: 'Odio ut enim',
//       text: 'Mattis rhoncus urna neque viverra justo.'
//     }
//   ]
 
//   const onChangeCenterMode = e => {
//     if (e.target.checked) {
//       setSettings({
//         ...config,
//         centerMode: true,
//         centerPadding: '50px'
//       });
//     } else {
//       setSettings(config);
//     }
//   }
 
//   return (
//     <div classname="App">
//       <h3>Carousel Slider in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
 
//       <label classname="cb-centermode">
//         <input type="checkbox" checked="{settings.centerMode}" onchange="{onChangeCenterMode}"/>
//         <span>Enable Center Mode</span>
//       </label>
 
//       <slider {...settings}>
//         {products.map((x, i) => {
//           return <div key="{i}" classname="img-card">
//             <img classname="img" src="{x.img}"/>
//             <div class="card-body">
//               <div classname="card-title">{x.title}</div>
//               <div classname="card-text">{x.text}</div>
//             </div>
//           </div>
//         })}
//       </slider>
//     </div>
//   );
// }
 


// not working