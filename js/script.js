var a=0;
var b=0;
var key="";
var input="";
var checkNum="1234567890.";
var operators="+-×÷=";
var result=0;
var opKey="";

var keys = document.querySelector(".calculator");
var inputField=document.querySelector(".input");


let calc=function(a,b){
        switch(opKey){
            case "+":
                return a + b;
                break;
            case "-":
                return b - a;
                break;
            case "×":
                return a * b;
                break;
            case "÷":
                return b / a;
                break;
            case "=":
                break;
        }
    }

keys.addEventListener('click',function(e){

    key = e.target.innerText;
    if (checkNum.includes(key)){
        if(inputField.innerText.includes(".")&&key=="."){}//ignore duplicate "."

        else{
        inputField.innerText=inputField.innerText + key;
        a=parseFloat(inputField.innerText);  console.log("a is "+a.toString());    
        }
    }

    else if (operators.includes(key)){
    //1,check previous operator: call operation function
    //2,store inputField into value a then,
    //3,set addition function ready when next operator click
    inputField.innerText=key;

        if(opKey!=""){

            result=calc(a,b);
            console.log(result);
            inputField.innerText=result;
            // a=result;
        }
        opKey=key;
        console.log(opKey);
        
        b=a;        
        console.log("b is "+b);

        // inputField.innerText="";
       
        console.log("a is "+a.toString());   
        console.log("opKey is "+opKey);
    }

    else if(e.target.innerText == "C"){
        inputField.innerText = "";
        a=0; console.log("a is "+a.toString());    
        b=0; console.log("b is "+b);
        result=0; console.log(result);
        opKey='';
    }
    //c
})
