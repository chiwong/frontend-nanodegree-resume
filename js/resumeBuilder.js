var work = {
	"jobs": [
	{
		"employer":"Planet Express",
		"title": "Delivery Boy",
		"location": "Los Angeles",
		"dates": "2007 - Current",
		"description": "blah blah blah blah blah"
	},
	{
		"employer":"Panucci's Pizza ",
		"title": "Delivery Boy",
		"location": "Columbus",
		"dates": "2005 - 2007",
		"description": "blah blah pizza blah blah cheese"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Hydrologic Calculator",
		"date": 2013,
		"description": "Hydrologic Calculator written in Python",
		"images": "images.fry.jpg"
	}
	]
}

var bio = {
	"name": "Chi Wong",
	"role": "Web Developer",
	"welcomeMessage": "Hi, please browse my resume",
	"contacts": {
		"mobile": "626-xxx-xxxx",
		"email": "blah@gmail.com",
		"github": "https://github.com/chiwong",
		"twitter": "@blah",
		"location": "Los Angeles"
		},
	"skills": ["HTML", "CSS", "Python"],
	"bioPic": "images.fry.jpg"
}

var education = {
	"schools": [
	{
		"name": "The Ohio State University",
		"location": "Columbus, OH",
		"degree": "Bachelor of Science",
		"majors": ["Systems Engineering"],
		"dates": 9999,
		"url": "www.osu.edu"
	},
	{
		"name": "The Ohio State University",
		"location": "Columbus, OH",
		"degree": "Master of Science",
		"majors": ["Civil Engineering"],
		"dates": 9999,
		"url": "www.osu.edu"
	}
	],
	"onlineCourse": [
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2014, 
		"url": "www.udacity.com/course/ud804"
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// Skills section
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

// Work section
if (work.jobs.length > 0) {
	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", 
			work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", 
			work.jobs[i].title);
		var formattedHTMLworkDates = HTMLworkDates.replace("%data%",
			work.jobs[i].dates);
		var formattedHTMLworkLocation = HTMLworkLocation.replace(
			"%data%", work.jobs[i].location);
		var formattedHTMLworkDescription = HTMLworkDescription.replace(
			"%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedHTMLworkEmployer + 
			formattedTitle);
		$(".work-entry:last").append(formattedHTMLworkDates);
		$(".work-entry:last").append(formattedHTMLworkLocation);
		$(".work-entry:last").append(formattedHTMLworkDescription);

	}
}


// Collecting Click Locations
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
})

// InternationalizeButton
$("#main").append(internationalizeButton);
var iName = function(twonames) {
	// ie) twonames = "Chi Wong", want to return "Chi WONG"
	var newName = twonames.split(" ");
	newName[1] = newName[1].toUpperCase();
	return newName.join(" ");
}