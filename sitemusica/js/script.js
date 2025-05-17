// Script simples para smooth scroll nos links da navegação

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link (pulo instantâneo)

        const targetId = this.getAttribute('href'); // Pega o ID da seção alvo
        const targetElement = document.querySelector(targetId); // Encontra o elemento alvo na página

        if (targetElement) {
            // Rola suavemente até o elemento alvo
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Você pode adicionar outros scripts JavaScript aqui no futuro, se precisar.
// Por exemplo: modais para imagens, carrosséis, etc.