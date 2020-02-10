// acronym - take letters and use reduce to create an acronym
function acronym(arr) {

    return arr.reduce(((acc, currentElem) => acc + currentElem.slice(0,1)), '')

  }
  console.log(acronym(['very', 'important', 'person']))

// function acronym(arr) {
//     return arr.reduce(((x, y) => x + y.slice(0, 1)), '').toUpperCase()
// }


// console.log(acronym(['very', 'important', 'person']));


let buttons = document.querySelector(".buttons");
let result = document.getElementById("result");
let input = document.getElementById('input');
let numStorage = [];
let stringStorage = [];
let sum = 0;
let limitOperation = false;
let validChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
let validOpChar = ["+"];
buttons.addEventListener('click', function(e){
    // console.log(e.target.textContent);
    //if e.target is not an equal sign or a clear sign then append a string input
    // when e.target is the equal sign, then split the string by the + symbol
    // add all of the content using the reduce method 
    // display results on our screen
    // if C is entered, reset all of our arrays values
    if(validChar.includes(e.target.textContent)  && limitOperation == false){
        console.log("found");
        input.textContent = input.textContent + e.target.textContent;
    }
    else if (validOpChar.includes(e.target.textContent)){
        input.textContent = input.textContent + e.target.textContent;
        limitOperation = false;
    }
    else if (e.target.textContent == "="){
        stringStorage = input.textContent.split("+");
        console.log(stringStorage);
        let numStorage = stringStorage.map(function(strNum){
            return parseFloat(strNum);
        })
        console.log(numStorage);
        sum = numStorage.reduce(function(x, y){
            return x + y
        })
        console.log(sum);
        input.textContent = sum.toString();
        numStorage = [];
        stringStorage = [];
        limitOperation = true;
    }
    else if(e.target.textContent == "C"){
        input.textContent = "";
        numStorage = [];
        stringStorage = [];
        limitOperation = false;
        sum = 0;
    }
})