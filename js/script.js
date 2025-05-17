document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('menu-trigger');
    const slideMenu = document.getElementById('slide-menu');

    menuTrigger.addEventListener('click', function() {
        slideMenu.classList.toggle('active');

        if (slideMenu.classList.contains('active')) {
            menuTrigger.textContent = 'Fechar';
        } else {
            menuTrigger.textContent = 'MENU';
        }
    });
});