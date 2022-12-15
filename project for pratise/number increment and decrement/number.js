
    
    const plus= document.querySelector('#plus');
    const minus= document.querySelector('#minus');
    const num= document.querySelector("#num");
    let a=0;
    plus.addEventListener("click",function(){

    if(a<10){
        a++;
        num.style.color="green";

        
    }
    else{
        return a;
    }
    num.innerHTML=a;

    });
    minus.addEventListener("click",function(){
        if(a>0){
            a--
            num.style.color="red";
        }
        else{
            return a;
        }
        num.innerHTML=a;
    })
