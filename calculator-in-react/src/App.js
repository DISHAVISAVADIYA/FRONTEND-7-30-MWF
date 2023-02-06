import React from "react";
import { Num, Clear ,Calc }  from "./calculation";

function App() {

  return (
    <>
        {/* <h1>calculator</h1> */}
      
      <div className="calculator">
      
          <table className='text-center'>
     
        <tr >
        <td className="" colspan="4">
              <input type="btn" id="display" placeholder="0" className="w-100 btn" readOnly/>
              </td>
            </tr>
       
        <tr>
          <td className="w-25">
              <button type="btn" id="number" value="7" className="w-100 btn" onClick={(e)=>Num(e)}>
              7
            </button>
          </td>
          <td className="w-25 ">
            <button  type="btn" id="number" value="8" className="w-100 btn" onClick={(e)=>Num(e)}>
              8
            </button>
          </td>
          <td className="w-25 ">
          <button type="btn" id="number" value="9" className="w-100 btn" onClick={(e)=>Num(e)}>
              9
            </button>
            </td>
            <td className="w-25 ">
            <button  className="w-100 btn" id="clear" value="clear" onClick={()=>Clear()}>
              c
            </button>
          </td>
          </tr>
        
          
          <tr>
          <td className="w-25">
              <button type="btn" id="number" value="4" className="w-100 btn" onClick={(e)=>Num(e)}>
              4
            </button>
          </td>
          <td className="w-25 ">
            <button  type="btn" id="number" value="5" className="w-100 btn" onClick={(e)=>Num(e)}>
              5
            </button>
          </td>
          <td className="w-25 ">
          <button type="btn" id="number" value="6" className="w-100 btn" onClick={(e)=>Num(e)}>
              6
            </button>
            </td>
            <td className="w-25 ">
            <button  className="w-100 btn" id="number" value="+" onClick={(e)=>Num(e)}>
              +
            </button>
          </td>
          </tr>
        
          <tr>
          <td className="w-25">
              <button type="btn" id="number" value="1" className="w-100 btn" onClick={(e)=>Num(e)}>
              1
            </button>
          </td>
          <td className="w-25 ">
            <button  type="btn" id="number" value="2" className="w-100 btn" onClick={(e)=>Num(e)}>
              2
            </button>
          </td>
          <td className="w-25 ">
          <button type="btn" id="number" value="3" className="w-100 btn" onClick={(e)=>Num(e)}>
              3
            </button>
            </td>
            <td className="w-25 ">
            <button  className="w-100 btn" id="number" value="-" onClick={(e)=>Num(e)}>
              -
            </button>
          </td>
          </tr>
          <tr>
          <td className="w-25">
              <button type="btn" id="number" value="0" className="w-100 btn" onClick={(e)=>Num(e)}>
              0
            </button>
          </td>
          <td className="w-25 ">
            <button  type="btn" id="number" value="." className="w-100 btn" onClick={(e)=>Num(e)}>
              .
            </button>
          </td>
          <td className="w-25 ">
          <button type="btn" id="number" value="*" className="w-100 btn" onClick={(e)=>Num(e)}>
              X
            </button>
            </td>
            <td className="w-25 ">
            <button  className="w-100 btn" id="number" value="/"  onClick={(e)=>Num(e)}>
              /
            </button>
          </td>
          </tr>
          <tr>
            <td colSpan="4">
              <button className="w-100 btn" id="sum" value="=" onClick={ Calc}>
              =
            </button>
            </td>
          </tr>
        

        </table>
        </div>

    </>
  );
}

export default App;
