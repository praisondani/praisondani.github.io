document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Form submitted! This is a placeholder functionality.');
});

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

