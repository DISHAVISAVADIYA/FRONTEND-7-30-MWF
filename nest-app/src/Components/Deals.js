import React from "react";
const deals = "https://thumbs.dreamstime.com/z/fantastic-hot-deals-promotion-sale-poster-design-50937452.jpg";
const style = {
    'height': '300px',
   
    "width": "23%"
}
const main = {
    'display': 'flex',
    'width': '100%',
    justifyContent: "center"
}
export default function Deals() {
    return (
        <>
            <div className="main" style={main}>       
                 <img src="https://images.pexels.com/photos/7957753/pexels-photo-7957753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"style={style} />
            <img src="https://images.pexels.com/photos/7957755/pexels-photo-7957755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style={style} />
            <img src="https://images.pexels.com/photos/7957753/pexels-photo-7957753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"style={style} />

            <img src={deals }  style={style} />
            </div>

        </>    
    );
}