// =========== TYPE CONVERSION ===========
// original value are not converted in type conversion. 
// Manual type conversion 
// The type conversion only used in three data types which are String, number, and boolean. 

// let myNumber = "10"; //string data types

// let numberTwo = 10;

// console.log(Number(myNumber) + numberTwo);

// ============ TYPE COERCION ========= 
// AUTOMATIC convert type to another type according to data types

// ================ IMPLICIT TYPE CONVERTION: AUTOMATIC ====================
// let result;
// result = '2' + 2;/
// result = '10' + null;
// result = '100' + undefined;

// result = 2 + "kailash";
// result = 2 + undefined;
// console.log(result);

// ================= EXPLICIT TYPE CONVERTION : MANUAL=====================
// let stringValue = "Kailash";
// console.log(typeof stringValue);

// let convertNumber = Number(stringValue);
// console.log(typeof convertNumber);

// let convertBoolean = Boolean(stringValue);
// console.log(typeof convertBoolean);

// ===================================================================
//             TYPE CASTING/CONVERSITION
// ===================================================================

/*
Change data types one to another types may be manual or automatic is called type convertion or type castings.


1. automatic type convertion/Implicit
2. Manual type convertion /Explicit



let numberOne = 10;
console.log(numberOne);
console.log(typeof numberOne);

numberOne = +10 + +"10";
console.log(numberOne);

numberOne = String(20);
console.log(numberOne)
console.log(typeof numberOne);

numberOne = Boolean(20);
console.log(numberOne)
console.log(typeof numberOne);

numberOne = Object(20);
console.log(numberOne)
console.log(typeof numberOne);

*/