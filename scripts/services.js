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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = document.getElementById(this.getAttribute('aria-controls'));
            if (!answer) {
                console.error('FAQ answer element not found for:', this);
                return;
            }
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            answer.hidden = expanded;
        });
    });
});
