import React from "react";

    function Clear() {
        document.getElementById("display").value = " ";
}

function Num(e) {
    // var a = document.getElementById("num").value;
    var a = e.target.value;  

    document.getElementById("display").value +=a; 
   

}
function Calc() {
    var a = document.getElementById("display").value;
    var b = eval(a);
    document.getElementById("display").value = b;
}
 


export { Clear ,Num,Calc};