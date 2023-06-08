/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Camilo Ferreira"; //defined as const because name usually won't change, unless a legal process is initiated and accepted

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let curYear = new Date().getFullYear(); //This is dynamic, therefore declared as let

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = curYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPicName = "party_img.png";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute('src', 'images/' + myPicName);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let myFavFood = ["pizza","hamburguer","mussel","empanada"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = myFavFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let mySecFavFood = "nachos";

// Step 4: add the variable holding another favorite food to the favorite food array
myFavFood.push(mySecFavFood);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = myFavFood;

// Step 6: remove the first element in the favorite foods array
myFavFood.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myFavFood;

// Step 8: remove the last element in the favorite foods array
myFavFood.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myFavFood;


