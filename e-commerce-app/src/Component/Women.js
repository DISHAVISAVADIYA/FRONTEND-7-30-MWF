import React from "react";
import Card from "./Card";
import { Props } from "./Props";

// function Pcard(Val) {

//     return (
// <div className="card-row">

//         <Card
//             imgsrc={Val.imgsrc}
//             name={Val.name}
//             price={Val.price}
//             add={Val.add}

//             />
//             </div>

//     );

// }
export default function Women() {
  return (
    <>
      <h1 className="text-center">Women Products</h1>

      {Props.map((Val) => {
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
