////////////////////////////////////
/* 32. ACTIVATING STRIC MODE*/
////////////////////////////////////
/* "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D"); */

// const interface = "Audio";⁄
// const private = 534;

////////////////////////////////////
/* 33. FUNCTIONS*/
////////////////////////////////////
// function logger() {
// 	console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcesssor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// const appleJuice = fruitProcesssor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcesssor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

////////////////////////////////////
/* 34. FUNCTIONS DECLARATIONS VS EXPRESSIONS*/
////////////////////////////////////

// Function declaration

// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

////////////////////////////////////
/* 35. ARROW FUNCTIONS*/
////////////////////////////////////
// // Function expression
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };

// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	// return retirement;
// 	return `${firstName} retires in ${retirement}`;
// };

// console.log(yearUntilRetirement(1992, "Miguel"));
// console.log(yearUntilRetirement(1988, "Jorge"));

////////////////////////////////////
/* 36. FUNCTIONS CALLING OTHER FUNCTIONS*/
////////////////////////////////////
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcesssor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
	return juice;
}
console.log(fruitProcesssor(2, 3));
