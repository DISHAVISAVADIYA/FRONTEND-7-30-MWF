import React from "react";
function Plus(){

         let a = parseInt(prompt('enter value of a:'));
         let b = parseInt(prompt('enter value of b :'));
         let c = a+b;
        alert(c);
}
function Minus(){
    let a = parseInt(prompt('enter value of a:'));
    let b = parseInt(prompt('enter value of b:'));
    let c = a-b;
    alert(c);


}
function Multi(){
    let a = parseInt(prompt('enter value of a:'));
    let b = parseInt(prompt('enter value of b:'));
    let c = a*b;
    alert(c);

}
function Divid(){
    let a = parseInt(prompt('enter value of a:'));
    let b = parseInt(prompt('enter value of b:'));
    let c = a/b;
    alert(c);

}

export { Plus,Minus,Multi,Divid};