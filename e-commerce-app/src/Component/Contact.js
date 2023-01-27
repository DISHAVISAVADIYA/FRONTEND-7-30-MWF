import React from "react";
import Iframe from 'react-iframe';

export default function Contact() {
    return (
        <>
            <button className="btn bg-info mt-5 py-2 text-white"> <b>contact with us</b></button>
            <h1 className="contact-h1 mt-5">Our Office Address <i class="bi bi-geo-alt-fill"></i></h1>
            <div className="row">
                <div className="col-md-6">
                   
             
<Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7383.3648978796!2d70.76464041923523!3d22.290015730369493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1674079189384!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                </div>
                <div className="col-md-6">
                    <h3>Contact form</h3>
                    <input type="text" placeholder="enter firstname"  className="contact-input"/>
                    <input type="text" placeholder="enter lastname" className="contact-input"/>
                    <input type="text" placeholder="enter phone" className="contact-input"/>
                    <input type="text" placeholder="enter mail" className="contact-input"/>
                    <input type="text" placeholder="enter address" className="contact-input"/>
                    <button className="btn bg-info text-white mt-2">send</button>
                    <button className="btn bg-danger text-white ms-2 mt-2">reset</button>



                </div>
            </div>
        </>
    )
} 
