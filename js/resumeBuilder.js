//Lesson 1
//Quiz 1

//var awesomeThoughts = "I am Chi Wong and I am AWESOME!";
//console.log(awesomeThoughts);

//Quiz 2
//$() is the jQuery selector
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

//Quiz 3
var name = "Chi Wong";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Quiz 4
var email = "wong.169@gmail.com";
var picURL = "images/fry.jpg";
var welcome = "Welcome to Chi's resume!";
var skills = ["HTML", "CSS", "Python"];
var contact = {
	"mobile": "626-xxx-xxxx",
	"email": "wong.169@gmail.com",
	"github": "https://github.com/chiwong",
	"twitter": "@_prodichi_",
	"location": "Los Angeles"
};
var bio = {
	"name": name,
	"role": role,
	"contact": contact,
	"picURL": picURL,
	"wecome": welcome,
	"skills": skills
}
var formattedMobile = HTMLemail.replace("%data%", bio.contact.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", picURL);
$("#header").append(formattedBioPic);

var formattedWelcome = HTMLWelcomeMsg.replace("%data%", welcome);
$("#header").append(formattedWelcome);

$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", skills);
$("#skills").append(formattedSkills);

