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
/* function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcesssor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
	return juice;
}
console.log(fruitProcesssor(2, 3)); */

////////////////////////////////////
/* 37. REVIEWING FUNCTIONS*/
////////////////////////////////////
/* const calcAge = function(birthYear){
	return 2037 - birthYear;
}
const yearUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	if(retirement > 0){
		console.log(`${firstName} retires in ${retirement}`);
		return retirement;
	}else{
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};
console.log(yearUntilRetirement(1991, 'Jorge'));
console.log(yearUntilRetirement(1950, 'Mike')); */

////////////////////////////////////
/* 38. INTRODCUTION TO ARRAYS*/
////////////////////////////////////

/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jorge';
const jorge = [firstName, 'Gonzalez', 2037 - 1988, 'teacher', friends];
console.log(jorge);

// Exercise
const calcAge = function (birthYear) {
	return 2037 - birthYear;
};
const years = [1999, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length -1 ])];
console.log(ages); */

////////////////////////////////////
/* 39. BASIC ARRAY OPERATIONS (METHODS)*/
////////////////////////////////////
/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Jhon');
console.log(friends);

// Remove elements
friends.pop() // Last element
const popped = friends.pop() // Last element
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
	console.log('You have a friend called Steven');
} */

////////////////////////////////////
/* 42. INTRODUCTION TO OBJECTS*/
////////////////////////////////////
/* const jorgeArray = [
	'Jorge',
	'Gonzalez',
	2037-1988,
	'teacher',
	['Michael','Peter','Steven']
];

const jorge = {
	firstName: 'Jorge',
	lastName: 'Gonzalez',
	age:2037 - 1988,
	job: 'teacher',
	friends: ['Michael','Peter','Steven']
}; */

////////////////////////////////////
/* 43. DOTS VS BRACKET NOTATION*/
////////////////////////////////////
// const jorge = {
// 	firstName: 'Jorge',
// 	lastName: 'Gonzalez',
// 	age:2037 - 1988,
// 	job: 'teacher',
// 	friends: ['Michael','Peter','Steven']
// };
// // console.log(jorge);

// // console.log(jorge.lastName);
// // console.log(jorge['lastName']);

// const nameKey = 'Name';
// // console.log(jorge['first' + nameKey]);
// // console.log(jorge['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jorge? Choose between firstName, lastName, age, job, and friends');

// /* if(jorge[interestedIn]){
// 	console.log(jorge[interestedIn]);
// }else{
// 	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// } */

// jorge.location = 'Mexico';
// jorge['twitter'] = '@jorgegonzalez';
// // console.log(jorge);

// // Challenge
// // Jorge has 3 friends, and his best friend is called Michael
// console.log(`${jorge['firstName']} has ${jorge.friends.length} and his best friend is called ${jorge.friends[0]}`); 

////////////////////////////////////
/* 44. OBJECT METHODS*/
////////////////////////////////////
const jorge = {
	firstName: 'Jorge',
	lastName: 'Gonzalez',
	birthYear: 1988,
	job: 'teacher',
	friends: ['Michael','Peter','Steven'],
	hasDriverLicense: true,

	/* calcAge: function(birthYear){
		return 2022 - birthYear;
	} */

	// calcAge: function(){
	// 	console.log(this);
	// 	return 2022 - this.birthYear;
	// }

	calcAge: function(){
		this.age = 2022 - this.birthYear;
		return this.age;
	},
	// challenge: function(){
	// 	return console.log(`${this.firstName} is a ${this.age}-years old and he has a driver's license.`);
	// },
	getSummary: function(){
		return `${this.firstName} is a ${this.calcAge()}-years old ${jorge.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`
	}
};

console.log(jorge.calcAge());
console.log(jorge.age);
console.log(jorge.age);
console.log(jorge.age);
// console.log(jorge.challenge);

// Challenge
// 'Jorge is a 34-year old teacher, and he has a driver's license.'
console.log(jorge.getSummary());