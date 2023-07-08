/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let curDate;

// Step 2: Declare another variable to hold the day of the week
let curDay;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
curDate = new Date();
curDay = curDate.getDay();
console.log(curDay);

// Step 4: Declare a variable to hold a message that will be displayed
let msgToDisplay1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if(curDay!=0 && curDay!=6){
    msgToDisplay1 = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if(curDay!=0 && curDay!=6){
    msgToDisplay1 = "Hang in there!";
}else{
    msgToDisplay1 = "Woohoo!  It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let msgToDisplay2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(curDay) {
    case 0:
        msgToDisplay2 = "Sunday";
        break;
    case 1:
        msgToDisplay2 = "Monday";
        break;
    case 2:
        msgToDisplay2 = "Tuesday";
        break;
    case 3:
        msgToDisplay2 = "Wednesday";
        break;
    case 4:
        msgToDisplay2 = "Thursday";
        break;
    case 5:
        msgToDisplay2 = "Friday";
        break;
    case 6:
        msgToDisplay2 = "Saturday";
        break;
  }


/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = msgToDisplay1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = msgToDisplay2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let globArray = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(oneArray){
    let templesDivDom = document.querySelector("#temples");
    for(let i = 0; i < globArray.length; i++){
        oneTemple = globArray[i];
        let templeId = "temple-" + (i+1);

        //Create article element and assign as id the index within the array of the element
        articleTemple = document.createElement("article");
        articleTemple.setAttribute("id",templeId);

        //Create subelements
        h3TempleName = document.createElement("h3");
        h4TempleLocation = document.createElement("h4");
        h4TempleDedicated = document.createElement("h4");
        imgTemple = document.createElement("img");

        //Set content for the elements or any applicable attribute
        h3TempleName.textContent = "### " + oneTemple.templeName + " ###"; //I added hashtag to make easier to differ them
        h4TempleLocation.textContent = oneTemple.location;
        h4TempleDedicated.textContent = oneTemple.dedicated;
        imgTemple.setAttribute("src", oneTemple.imageUrl);

        //Places new elements and treated into the actual HTML document (either into an existing element or as child)
        templesDivDom.append(articleTemple);
        
        let templeArticleDom = document.querySelector("#"+templeId);
        templeArticleDom.appendChild(h3TempleName);
        templeArticleDom.appendChild(h4TempleLocation);
        templeArticleDom.appendChild(h4TempleDedicated);
        templeArticleDom.appendChild(imgTemple);
    }
}

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

async function getTemples(url){
    const response = await fetch(url);
    if(response.ok){
        globArray = await response.json();
        console.log(globArray);
    }
    output(globArray);
}

getTemples(url);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
