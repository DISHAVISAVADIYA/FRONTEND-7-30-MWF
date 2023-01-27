import React from "react";
import Card from "./Card";
import { Kid } from "./Props";
export default function Kids() {
    return (
        <>
          <h1 className="text-center">Kids Products</h1>
    
          {Kid.map((Val) => {
            return (
              // <div  key={index + 1}>
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