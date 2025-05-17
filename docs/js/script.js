// js/script.js

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    const menuTrigger = document.getElementById('menu-trigger');
    const slideMenu = document.getElementById('slide-menu');

    menuTrigger.addEventListener('click', function() {
        slideMenu.classList.toggle('active');

        if (slideMenu.classList.contains('active')) {
            menuTrigger.textContent = 'Fechar';
            // document.body.style.overflow = 'hidden'; // Opcional: evita scroll do body
        } else {
            menuTrigger.textContent = 'MENU';
            // document.body.style.overflow = ''; // Opcional: restaura scroll do body
        }
    });

    /*
    Nota: Não precisamos de listeners nos links do menu porque a navegação multi-página
    já recarrega o script e fecha o menu automaticamente.
    */
});