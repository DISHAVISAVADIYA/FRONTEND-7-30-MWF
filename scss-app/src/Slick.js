import React from "react";
import Slider from "react-slick";

export default function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="sld">
      <div className="sld-img" >
        <img src ="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
      </div>
      <div className="sld-img" >
      <img src =" https://images.pexels.com/photos/4962458/pexels-photo-4962458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
        
      </div>
      <div   className="sld-img" >
      <img src ="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
        
      </div>
      <div  className="sld-img" >
      <img src ="https://images.pexels.com/photos/6306062/pexels-photo-6306062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
        
      </div>
      <div  className="sld-img" >
      <img src ="https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
    
      </div>
      <div  className="sld-img" >
      <img src ="https://images.pexels.com/photos/2309266/pexels-photo-2309266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img"/>
        
      </div>
    </Slider>
  );
}