import React from "react";
import Kids from "./Kids";
import Men from "./Men";

import Slider from "./Slider";
import Women from "./Women";
import { Details } from "./Props";
export default function Home() {
    return (
        <>
            {Details.map((val) => {
                return (
                    <Slider img1={val.img1} img2={val.img2}    img3={val.img3}/>);} )}
            <Women /> 
            <Men />
             <Kids />
        </>
    )
} 