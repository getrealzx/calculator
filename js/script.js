

var n1;
var n2;
var key="";
var input="";

var numbers = document.querySelector(".calculator");
var inputfield=document.querySelector(".input")

numbers.addEventListener('click',function(e){
    // console.log(e.target.innerText.toString());
    key = e.target.innerText;
    if (key!="+" && key!="+"&& key!="-"&& key!="&divide;"&& key!="&times;"&& key!="=" && key!="C"){
        input=input + key;
    }
    if{
        input="operator";
    }
    console.log(input);
})

inputfield.append(key);
