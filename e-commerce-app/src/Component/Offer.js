import React from "react";
import Slider from "./Slider";
import { Offerr} from "./Props";

export default function Offer() {
    return (
        <>
            {Offerr.map((val) => {
                return (
                    <Slider img1={val.img1} img2={val.img2}    img3={val.img3}/>);} )}
        </>
    )
} 