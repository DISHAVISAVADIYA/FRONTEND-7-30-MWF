function display (val){
    document.getElementById("result").value+=val;
    
}

function clr(){
    document.getElementById("result").value="";
}
function final(){
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;
}
function square(){
    var number=document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(number,2);
    
}
function sqr(){
    var sr=document.getElementById("result").value;
    document.getElementById("result").value= Math.sqrt(sr);
}
function del(){
    var delet=document.getElementById("result").value;
    document.getElementById("result").value=delet.substr(0,delet.length-1);

}
function pm(){
    var minus=document.getElementById("result").value;
    document.getElementById("result").value=(-minus);
}

function divide(){
    var divide=document.getElementById("result").value;
    document.getElementById("result").value=1/divide;

}
function per(){

    var p=document.getElementById("result").value;
    var y=eval(p)
    
    var percent=y/10000;
    document.getElementById("result").value=percent;

}

