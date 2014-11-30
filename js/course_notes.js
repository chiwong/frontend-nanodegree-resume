console.log();
document.url; // returns a string of the document's URL
// $("an element on the page").command(); // jQuery's method for grabbing an element from the page
// an example $("#main").append("some text"); // jQuery command to append text to the main id element

// declare a variable and then assign it a value
var firstName = "Chi";

// find and replace text in a string
// [string].replace([old],[new]);
var email = "cameron@udacity.com";
var newEmail = email.replace("udacity", "gmail");

// Convet "audacity" to "Udacity"
var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
       
    s = s.charAt(1).toUpperCase() + s.slice(2);
    return s;
};
console.log(udacityizer(s));

// to create an array
var array1 = [];
var array2 = ["one", "two", "three"];
array.length; // gives the length of an array
var array3 = array2; // array3 references array 2
var array4 = array2.slice(0); //array 4 is a COPY of array 2, not a reference
array2.pop(); // mutates the array and pops off and returns the last element of the array
array2.push(100); // pushes the value 100 into last slot of array; returns array length


// Return the name with the last name in all caps
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" "); // split the string at spaces and return as an array
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    finalName = names.join(" "); // takes elements from an array, join with a space, and return as a string
   
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

// object literal notation for creating objects
var bio = {
	"firstName": "Chi",
	"lastName": "Wong"
};
// to access a property of an object
console.log(bio.firstname);

// object dot and bracket notatoin
// dot notation to add a property to a declared object
bio.location = "Alhambra, CA";

// bracket notation to add a property to a declared object
bio["email"] = "blah@gmail.com";