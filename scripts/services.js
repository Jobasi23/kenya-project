document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');
    const nav = document.querySelector('nav');

    if (hamburger && navMenu && nav) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            nav.classList.toggle('menu-open');
            hamburger.textContent = hamburger.textContent.trim() === '☰' ? '✕' : '☰';
        });
    } else {
        console.error('Required elements not found in the DOM.');
    }
});
