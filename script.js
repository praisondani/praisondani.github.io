
/* document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Form submitted! This is a placeholder functionality.');
}); */

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const sidebar = document.querySelector('header');
    const content = document.querySelector('section');
    if (sidebar.style.transform === 'translateX(-100%)') {
        sidebar.style.transform = 'translateX(0)';
        content.style.marginLeft = '200px'; // Match sidebar width
    } else {
        sidebar.style.transform = 'translateX(-100%)';
        content.style.marginLeft = '0';
    }
});


document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('header');
    const content = document.querySelector('section');
    sidebar.classList.toggle('collapsed-sidebar');
    content.classList.toggle('collapsed-content');
});

// Assuming the JSON file is stored on the server
fetch('/centralized_resume.json')
    .then(response => response.json())
    .then(data => {
        displayResume(data);
    })
    .catch(error => console.error('Error:', error));

// Defining the resume data directly in the script

function displayResume(resumeData) {
    const resumeContainer = document.getElementById('resume');

    // Display personal information
    console.log(resumeData);
    const personalInfo = resumeData.personal_info;
    const personalInfoDiv = document.createElement('div');
    personalInfoDiv.innerHTML = `<strong>Name:</strong> ${personalInfo.name}<br>
                                 <strong>Contact:</strong> ${personalInfo.contact}<br>
                                 <strong>Email:</strong> ${personalInfo.email}<br>
                                 <strong>LinkedIn:</strong> ${personalInfo.linkedin}<br>
                                 <strong>Address:</strong> ${personalInfo.address}`;
    resumeContainer.appendChild(personalInfoDiv);

    // Display each section
    resumeData.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');

        const title = document.createElement('div');
        title.classList.add('section-title');
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const content = document.createElement('div');
        content.classList.add('section-content');
        section.content.forEach(item => {
            content.innerHTML += `<div><strong>${item.position}</strong> at ${item.organization} (${item.date})</div>`;
            item.description.forEach(desc => {
                content.innerHTML += `<div>${desc}</div>`;
            });
        });
        sectionDiv.appendChild(content);

        resumeContainer.appendChild(sectionDiv);
    });
}


