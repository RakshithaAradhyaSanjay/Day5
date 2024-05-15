const resume = {
  personalInfo: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    linkedIn: "linkedin.com/in/johndoe",
    github: "github.com/johndoe"
  },
  education: [
    {
      institution: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2016-08-01",
      endDate: "2020-05-31",
      gpa: "3.8"
    }
    // Add more educational experiences here
  ],
  workExperience: [
    {
      company: "Tech Solutions Inc.",
      position: "Software Developer",
      startDate: "2020-06-01",
      endDate: "Present",
      responsibilities: [
        "Developed and maintained company website using JavaScript, HTML, and CSS",
        "Collaborated with a team of developers to create a mobile application",
        "Wrote unit tests to ensure code quality"
      ]
    }
    // Add more work experiences here
  ],
  skills: ["JavaScript", "React", "Node.js", "Git", "Agile Methodologies"],
  languages: ["English (Fluent)", "Spanish (Conversational)"]
};

 const resumeJSON = JSON.stringify(resume, null, 2);
 console.log(resumeJSON);

 // Using 'for' loop to iterate over arrays
for (let i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i]);
  }
  
  // Using 'for...in' loop to iterate over object properties
  for (let key in resume.personalInfo) {
    console.log(`${key}: ${resume.personalInfo[key]}`);
  }
  
  // Using 'for...of' loop to iterate over array values (ES6)
  for (let skill of resume.skills) {
    console.log(skill);
  }
  
  // Using 'forEach' method to iterate over array elements
  resume.workExperience.forEach(function(experience) {
    console.log(experience);
  });
  
