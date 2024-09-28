document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');

    if (window.innerWidth <= 768) {
        const hamburgerButton = document.createElement('button');
        hamburgerButton.textContent = '☰'; // Hamburger symbol
        hamburgerButton.classList.add('hamburger');

        header.appendChild(hamburgerButton);

        hamburgerButton.addEventListener('click', function () {
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
                hamburgerButton.textContent = '☰';
            } else {
                nav.style.display = 'block';
                hamburgerButton.textContent = 'X'; 
            }
        });
    }
});
