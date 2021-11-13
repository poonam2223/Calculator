const userInput = document.getElementById("userInput");
var expression='' ;


function press(num){
    console.log("expression -- " + num);
    expression += num; 
    console.log("expression -- " + expression);
    userInput.value = expression;  
}


function equal(){
    userInput.value = eval(expression);
    expression = '';
}

function  Clear(){
    expression = '';
    userInput.value = '';  
}
