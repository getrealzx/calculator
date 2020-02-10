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
        // highlight the button
    //2,store inputField into value a then,
    //3,set addition function ready when next operator click


        if(opKey!=""){
            

            result=calc(a,b);
            console.log(result);
            // inputField.innerText=result;
            // opKey="";
        }
        opKey=key;
        console.log("operation:" + opKey);
        
        b=a;        
        console.log("b is "+b);

        // inputField.innerText="";
        inputField.innerText=result;
        a=result;
        console.log("a is "+a.toString()); 
    }

    else if(e.target.innerText == "C"){
        inputField.innerText = "";
        a=0;
        b=0;
        result=0;
        opKey='';
    }
})
