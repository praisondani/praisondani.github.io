document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Form submitted! This is a placeholder functionality.');
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const sidebar = document.querySelector('header');
    if (sidebar.style.height === 'auto' || sidebar.style.height === '100%') {
        sidebar.style.height = '0';
    } else {
        sidebar.style.height = 'auto'; // Adjust to '100%' if 'auto' doesn't work
    }
});
