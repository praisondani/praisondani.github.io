document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle the form submission here, like sending data to a server
});


document.querySelector('.hamburger-menu').addEventListener('click', function() {
  const sidebar = document.querySelector('header');
  const content = document.querySelector('main'); // Ensure you have a <main> tag wrapping your main content
  sidebar.classList.toggle('collapsed-sidebar');
  content.classList.toggle('expanded-content');
});

// Assuming the JSON file is stored on the server and its structure is correct
fetch('/centralized_resume.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      displayResume(data);
  })
  .catch(error => {
      console.error('Error fetching resume data:', error);
      // Display a user-friendly error message or fallback content
  });

  //personalInfoDiv.textContent = `Name: ${personalInfo.name}, Contact: ${personalInfo.contact}, Email: ${personalInfo.email}, LinkedIn: ${personalInfo.linkedin}, Address: ${personalInfo.address}`;

// function displayResume(resumeData) {
//   const resumeContainer = document.getElementById('resume');
//   if (!resumeContainer) return;

//   // Display personal information (Example, adapt as needed)
//   const personalInfo = resumeData.personal_info;
//   if (personalInfo) {
//       const personalInfoDiv = document.createElement('div');
//       personalInfoDiv.textContent = `Name: ${personalInfo.name}, Contact: ${personalInfo.contact}, Email: ${personalInfo.email}, LinkedIn: ${personalInfo.linkedin}, Address: ${personalInfo.address}`;
//       resumeContainer.appendChild(personalInfoDiv);
//   }

//   // Display other resume sections (Example, adapt as needed)
//   resumeData.sections.forEach(section => {
//       const sectionDiv = document.createElement('div');
//       sectionDiv.classList.add('section');

//       const title = document.createElement('h4');
//       title.textContent = section.title;
//       sectionDiv.appendChild(title);

//       const content = document.createElement('p');
//       content.textContent = section.content; // Assuming 'content' is a string
//       sectionDiv.appendChild(content);

//       resumeContainer.appendChild(sectionDiv);
//   });
// }


function displayResume(resumeData) {
  const resumeContainer = document.getElementById('resume');
  if (!resumeContainer) return;

  // Iterate over each section in the resume data
  resumeData.sections.forEach(section => {
      // Find the corresponding container for each section
      const containerId = section.title.toLowerCase().replace(/\s+/g, '-') + '-container';
      const sectionContainer = document.getElementById(containerId);
      if (!sectionContainer) return;

      const sectionDiv = document.createElement('div');
      sectionDiv.classList.add('section');

      // Add section title
      const title = document.createElement('h4');
      title.textContent = section.title;
      sectionDiv.appendChild(title);

      // Process each item in the content array
      section.content.forEach(item => {
          const contentDiv = document.createElement('div');

          // Add position and organization if available (mainly for Work Experience and Education)
          if (item.position) {
              const positionDiv = document.createElement('div');
              positionDiv.innerHTML = `<strong>${item.position}</strong>, ${item.organization}, ${item.date}`;
              contentDiv.appendChild(positionDiv);
          }

          // Add descriptions
          item.description.forEach(desc => {
              const descP = document.createElement('p');
              descP.textContent = desc;
              contentDiv.appendChild(descP);
          });

          //sectionDiv.appendChild(contentDiv);
          sectionContainer.appendChild(contentDiv);
      });

      resumeContainer.appendChild(sectionDiv);
  });
}
