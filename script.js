console.log('Runnning.....');

// Regular funcation - calling a function
sayhello();
// greeting(); === Error 
// sayhello(); === Error 

// Function definitions//

// Regular function//
function sayhello() {
    console.log('Hello World');
}

// Function Expression Def//
const greeting = function() {
    console.log('Greetings');
}

// Arrow function//
const sayItBack = () => {
    console.log('Back!');
}

greeting();
sayItBack();

// Arrow Functions

// const add = () => 
// console.log(2 + 2);

// const multiply = () => { console.log(3 *3 );
// console.log("Done!");
// }

// Function adding //

function add(num1, num2, num3){
    return num1 + num2 + num3;
}
const result = add(2,3,4);
console.log(result);

// Funcation Multiply 
const multiply = (num1, num2) => num1 * num2; 
const result1= multiply(3,4)
console.log(result1);

// Arguments

// function getDevObject(name) {
// const skills = [];

// for (let i = 1; i <arguments.length; i++){
//     skills.push(arguments[i]);
// }
// return {
//     devName:name , 
//     jobSkills: skills};
// }

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'React');
console.log(devObj);

function getDevObject(name, ...skills) {
    return {
      devName: name,
      jobSkills: skills
    };
  }

// Practice Activity 1: Write a Function Declaration
// Write a function named computeArea using the function declaration approach.

// computerArea(){
//     return {

//     }

// }

// It will have two parameters: width & height.

// It will computer the area of a rectangle (width multiplied by height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// ======== Default Parameters

// function setColor(bicycle, color) {
//     console.log(color);
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }


function setColor(bicycle, wheels, size, color = 'Yellow') {
    console.log(color);
    bicycle.color = color;
    bicycle.wheels = wheels;
    bicycle.size = size;
}

const bikeObj = {};
setColor(bikeObj, 2, '20 inches');
console.log(bikeObj);


// ========= Functions as Arguments

const colors = ['red', 'green', 'blue'];

// Named Function
function printUpperCaseColors(color) {
    console.log(color.toUpperCase());
}

colors.forEach(printUpperCaseColors);

//
colors.forEach(function(color, index, arr) {
    console.log(color + index);
    console.log(arr);
});

// Arrow function
colors.forEach((color) => console.log(color));

const user = {};

function createUser(userObj, name, age, role) {
    userObj.role = role;
    userObj.age = age;
    userObj.name = name;
}


createUser(user, 'max', 30, 'dev');

console.log(user);

let x = 5;

{
  console.log(x);
  let x = 6;
}
