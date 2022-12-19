function count(){
let text = document.getElementById('text');
let str = text.value.length;
if(str < 15){
    text.style.color="green";

}
else{
    text.style.color="red";

}
document.getElementById('para').innerHTML=str;

}