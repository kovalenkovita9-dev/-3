// js/script.js (Без змін)

document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо елементи DOM, необхідні для бургер-меню
    const header = document.querySelector('header');
    const burgerBtn = document.querySelector('.burger-menu-btn');

    // Перевіряємо, чи існують ці елементи
    if (burgerBtn && header) {
        burgerBtn.addEventListener('click', () => {
            // 1. Перемикає клас "menu-open" на тегу <header>
            header.classList.toggle('menu-open'); 
            
            // 2. Оновлює атрибут ARIA для доступності
            const isExpanded = header.classList.contains('menu-open');
            burgerBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
});