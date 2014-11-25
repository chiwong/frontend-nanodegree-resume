//Lesson 1
//Quiz 1

//var awesomeThoughts = "I am Chi Wong and I am AWESOME!";
//console.log(awesomeThoughts);

//Quiz 2
//$() is the jQuery selector
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

//Quiz 3
var name = "Chi Wong"
var role = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);