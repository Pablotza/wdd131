// Add dynamic footer functionality for year and last modified date
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});

// Add hamburger menu toggle for mobile view
const nav = document.querySelector('nav ul');
const hamburgerButton = document.createElement('button');
hamburgerButton.textContent = '☰'; // Hamburger symbol
hamburgerButton.classList.add('hamburger');

document.querySelector('header').appendChild(hamburgerButton);

hamburgerButton.addEventListener('click', function () {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        hamburgerButton.textContent = '☰'; // Revert to hamburger
    } else {
        nav.style.display = 'block';
        hamburgerButton.textContent = 'X'; // Close symbol
    }
});
