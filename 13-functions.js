// =============== BASIC FUNCTION ===========
/*There are 3 ways of writing a function in JavaScript:

Function Declaration
Function Expression
Arrow Function
*/





// ================ FUNCTION DECLARATION: Tranditional way to define function ================ 


// function showMessege() {
//     let messege = "Hello world"; //local variables
//     alert(messege);
// }
// showMessege();





// function printName(firstName, lastName) {
//     alert(firstName + lastName);
// }

// let userName = "kailash";
// let secondName = "kumar";

// printName(userName, secondName);







// function addNumber(numberOne, numberTwo) {
//     let totalNumber = numberOne + numberTwo;
//     console.log(totalNumber);
// }

// let numOne = 20;
// let numTwo = 100;

// addNumber(numOne, numTwo);



// function multipleNumber(numberOne, numberTwo) {
//     let resultNumber = numOne * numberTwo;
//     console.log(resultNumber);
// }

// let numOne = 2045445664560;
// let numTwo = 2874564564587;

// multipleNumber(numOne, numTwo);






// ============ function expression ================ 

// let greetName = function(firstName) {
//     console.log("hello" + " " + firstName);
// }

// let myName = "Kailash";
// greetName(myName);















// let welcomeName = function(yourName) {
//     console.log("Welcome to Your name is: " + " " + yourName);
// }


// let myNamePrint = "Kailash Kumar";
// let userName = welcomeName(myNamePrint);













/*====================== arrow function: arrow function introduce in ES6 ======================
 Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.*/



// let addNumber = (numOne, numTwo) => numOne + numTwo;

// let numberOne = 100;
// let numberTwo = 100;

// let result = addNumber(numberOne, numberTwo);
// console.log(result);




// let multipleNumber = (numOne, numTwo) => numOne * numTwo;


// let numberOne = 20;
// let numberTwo = 40;
// let result = multipleNumber(numberOne, numberTwo);

// console.log(result);














// ==================== function call others function ==================

/*

var optionChooseYes = 1;

function myFunc() {
    console.log("This is my Function");
}


function addNumber(a, b) {
    let result = a + b;
    console.log(result);
    myFunc();
}

if (optionChooseYes == 1) {
    addNumber(10, 20);
}

*/

// ==================== function practice ====================