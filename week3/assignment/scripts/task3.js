/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
/*
function add(number1, number2) {
  //
}
*/

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    number1 = parseInt(document.querySelector("#addend1").value);
    number2 = parseInt(document.querySelector("#addend2").value);
    return add(number1,number2);
}

// Step 4: Assign the return value to an HTML form element with an ID of sum
function printAddNumbers(){
    document.querySelector("#sum").value = addNumbers();
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", printAddNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// function expression
const subtraction = function (number1, number2) {
    return number1 - number2;
};

function subtractNumbers(){
    number1 = parseInt(document.querySelector("#minuend").value);
    number2 = parseInt(document.querySelector("#subtrahend").value);
    return subtraction(number1,number2);
}

function printSubtractNumbers(){
    document.querySelector("#difference").value = subtractNumbers();
}

document.querySelector("#subtractNumbers").addEventListener("click", printSubtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// arrow function
const multiplication = (number) => {
    console.log(number1 * number2);
    return number1 * number2;
};

function multiplyNumbers(){
    number1 = parseInt(document.querySelector("#factor1").value);
    number2 = parseInt(document.querySelector("#factor2").value);
    return multiplication(number1,number2);
}

function printMultiplyNumbers(){
    document.querySelector("#product").value = multiplyNumbers();
}

document.querySelector("#multiplyNumbers").addEventListener("click", printMultiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers(){
    number1 = parseInt(document.querySelector("#dividend").value);
    number2 = parseInt(document.querySelector("#divisor").value);
    return divide(number1,number2);
}

function printDivideNumbers(){
    document.querySelector("#quotient").value = divideNumbers();
}

document.querySelector("#divideNumbers").addEventListener("click", printDivideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let curDate = new Date();

// Step 2: Declare a variable to hold the current year
let curYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
curYear = curDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = curYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var numbers = [];

for (var i = 1; i <= 25; i++) {
  numbers.push(i); //current number will be added at the last index of the array
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
oddNumbers = numbers.filter( (number) => number % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
evenNumbers = numbers.filter( (number) => number % 2 == 0);
document.querySelector("#evens").textContent = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

document.querySelector("#sumOfArray").textContent = sumWithInitial;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const map1 = numbers.map(x => x * 2);
document.querySelector("#multiplied").textContent = map1;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const map2 = numbers.map(x => x * 2);

const initialValue2 = 0;
const sumWithInitial2 = map2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue2
);

document.querySelector("#sumOfMultiplied").textContent = sumWithInitial2;