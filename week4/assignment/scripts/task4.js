/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {'name':'','photo':'','favoriteFoods':'','hobbies':'','placesLived':[]};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Camilo Ferreira";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/party_img.png";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["pizza","hamburguer","fries"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["zumba","volleyball","gaming"];

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let newObject = {'place':'','lenght':''};

// Step 8: For each property, add appropriate values as strings
newObject['place'] = "Ciudad Vieja, Montevideo, Uruguay";
newObject['lenght'] = "50 meters";

// Step 9: Add additional objects with the same properties for each place you've lived
let home2 = {'place':'La Blanqueada, Montevideo, Uruguay','lenght':'60 meters'};
let home3 = {'place':'Cordon, Montevideo, Uruguay','lenght':'75 meters'};

myInfo.placesLived.push(newObject, home2, home3);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#name").textContent = myInfo.name;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
// Get the image element by ID
var myImage = document.querySelector("#photo");
// Assign a new source to the image
myImage.src = myInfo.photo;


// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let items = [];
for (let foodStr of myInfo.favoriteFoods) {
    let indexItem = myInfo.favoriteFoods.indexOf(foodStr) + 1;
    let item = '<li>' + indexItem + ". " + foodStr +'</li>';
    items.push(item);
};

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let myFoodListDom = document.querySelector("#favorite-foods");
for (let item of items) {
    myFoodListDom.innerHTML += item;
};

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let myHobbiesDom = document.querySelector("#hobbies");
for (let hobbieStr of myInfo.hobbies) {
    listItem = document.createElement('li');
    let indexItem = myInfo.hobbies.indexOf(hobbieStr) + 1;
    listItem.textContent = indexItem + ". "+ hobbieStr;
    myHobbiesDom.append(listItem);
};

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
//completed at step 6 in other approach

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placesLivedDom = document.querySelector("#places-lived");
for (let i = 0; i < myInfo.placesLived.length; i++){
    //Store the place record with its two properties
    oneHome = myInfo.placesLived[i];

    //Create the elements to place later in DOM
    dtItem = document.createElement('dt');
    ddItem = document.createElement('dd');

    //Set the text to be contained by elements created previously
    dtItem.textContent = oneHome.place;
    ddItem.textContent = oneHome.lenght;

    //Push elements created into the HTML DOM
    placesLivedDom.append(dtItem);
    placesLivedDom.append(ddItem);
}