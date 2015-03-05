// Bio object containing basic profile info
var bio = {
	"name" : "John Bolorinos",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(650) 690 - 2071",
		"email" : "jkbolorinos@gmail.com",
		"twitter" : "twitter.com/jkbolorinos",
		"github" : "github.com/jbol",
		"blog" : "www.jkbolorinos.com",
		"location" : "San Francisco, CA"
		},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Hey Udacity!",
	"skills" : [
		"Adobe Creative Suite - Photoshop + Illustrator",
		"C++",
		"Java",
		"HTML/CSS",
		"Javascript/jQuery",
		"Natively fluent in English and Spanish"
	],
	// Display function for Bio object
	"displayBio": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		
		// Format all contact info
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedContactHeader = formattedMobile + formattedEmail + formattedBlog + formattedLocation;
		
		var formattedContactFooter = formattedTwitter + formattedGithub;
		var formattedContactTotal = HTMLcontactGeneric.replace("%data%", formattedContactHeader);

		$("#topContacts").append(formattedContactTotal);
		$("#footerContacts").append(formattedContactFooter);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		// Adding div for google map here...although not really sure this is the best place for it
		$("#mapDiv").append(googleMap);

		// Check if skills is not empty
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			// Iterate through skills and append to #skills in header
			for(skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			};
		};
	}
};

// Work object containing work experience
var work = {
    "jobs": [
        {
            "title": "Web Developer",
            "employer": "Freelance",
            "dates": "08/2011 - Current",
            "location": "Twain Harte, CA",
            "description": "Designed/Developed mobile friendly websites using Bootstrap. Translated website text (English to Spanish). \n Managed Google Adwords campaigns for clients (increasing unique visitors by up to 300%)"
        },
        {
            "title": "Research Assistant (Information Systems & Technology Dept.)",
            "employer": "MIT",
            "dates": "07/2014 - 11/2014",
            "location": "Madrid, Spain",
            "description": "Researched current and future applications of Internet of Things/Smart Cities. Drafted preliminary reports on projects and policies currently being implemented. Prepared market analysis presentations on future projections of the IoT industry"
        },
        {
            "title": "Student Systems Administrator",
            "employer": "University of California, Davis",
            "dates": "10/2011 - 06/2012",
            "location": "Davis, CA",
            "description": "Provided front-desk support to students using the labsTested programs and drivers on local system before adding them to the kickstarter. Monitored the systems/network using Nagios"
        }
    ],

	// Display function for Work object
	 "displayWork": function() {
		$("#workExperience").append(HTMLworkStart);

		// Iterate through work object and append each job to #workExperience in main
		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

// Project object containing past projects
var projects = {
	"projects" : [
		{
			"title" : "www.armadilo3D.com",
			"dates" : "12/2014 - 01/2015",
			"description" : "Vacation rental website",
			"image" : "images/tabarcaisland.png"
		},
		{
			"title" : "www.befluent.com",
			"dates" : "08/2014 - 09/2014",
			"description" : "Language learning/teaching website",
			"image" : "images/befluent.png"
		},
		{
			"title" : "www.mikespizzasonora.com",
			"dates" : "01/2014 - 02/2014",
			"description" : "Local restaurant website",
			"image" : "images/mikespizza.png"
		},
		{
			"title" : "www.tabarcaisland.com",
			"dates" : "08/2012 - 10/2012",
			"description" : "Vacation rental website",
			"image" : "images/tabarcaisland.png"
		}
	],
	// Display function for Projects object
	 "displayProjects": function() {
		$("#projects").append(HTMLprojectStart);

		// Iterate through projects object and append each project to #projects in main
		for(project in projects.projects) {

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
			
			var projectTotal = formattedProjectTitle + formattedDates + formattedDescription + formattedImage;
			
			var formattedProject = HTMLprojectItem.replace("%data%" , projectTotal);
			$(".project-entry:last").append(formattedProject);
		}
	}
}

// Education object containing educational history
var education = {
	"schools": [
		{
			"name" : "University of California, Davis",
			"degree" : "Bachelor of Arts",
			"dates" : "09/2008 - 06/2012 ",
			"location" : "Davis, CA",
			"major": "Psychology"
		},
		{
			"name" : "University of Pau",
			"degree" : "Bachelor of Arts",
			"dates" : "01/2008 - 06/2008",
			"location" : "Pau, France",
			"major" : "Business Administration"
		},
		{
			"name" : "Colegio San Pablo CEU",
			"degree" : "Bachillerato",
			"dates" : "09/2002 - 06/2006 ",
			"location" : "Madrid, Spain",
			"major" : "Especializacion en Ciencias"
		}
	],
	"onlineCourses": [
		{
			"title" : "Nanodegree",
			"school" : "Udacity",
			"date" : "Current",
			"url" : "www.udacity.com"
		}
	],

	// Display function for Education object
	"displayEducation": function() {
		$("#education").append(HTMLschoolStart);

		// Iterate through education object and append each school to #education in main
		for(school in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
	}
};



// Call functions to display objects
bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();


// Internationalize name function
function inName(name){
	name =  name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
};

$('#main').append(internationalizeButton);
