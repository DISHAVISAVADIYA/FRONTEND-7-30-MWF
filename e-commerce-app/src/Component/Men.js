import React from "react";
import Card from "./Card";
import { Menp } from "./Props";

export default function Men() {
  
    
    return (
        <>
          <h1 className="text-center">Men Products</h1>
    
          {Menp.map((Val) => {
            return (
              
              <Card
                imgsrc={Val.imgsrc}
                name={Val.name}
                price={Val.price}
                add={Val.add}
              />
            );
          })}
        </>
      );
} 