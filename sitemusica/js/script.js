document.addEventListener('DOMContentLoaded', function() {

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    window.showWelcomeMessage = function() {
        alert("Bem-vindo ao site de Pablo Martins Leite! Explore sua música e trajetória.");
    }

    const toggleButtons = document.querySelectorAll('.toggle-details-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const detailsDiv = document.getElementById(targetId);
            if (detailsDiv) {
                if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                    detailsDiv.style.display = 'block';
                    this.textContent = 'Ocultar Detalhes';
                } else {
                    detailsDiv.style.display = 'none';
                    this.textContent = 'Ver Detalhes';
                }
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            const formMessageDiv = document.getElementById('form-message');

            formMessageDiv.textContent = '';
            formMessageDiv.className = '';

            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                formMessageDiv.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formMessageDiv.classList.add('error');
                return;
            }

            setTimeout(() => {
                formMessageDiv.textContent = `Obrigado por sua mensagem, ${nome}! Entraremos em contato em breve. (Simulação)`;
                formMessageDiv.classList.add('success');
                contactForm.reset();
            }, 1000);
        });
    }

    const destaqueItems = document.querySelectorAll('.destaque-item');
    destaqueItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0px 6px 18px rgba(0,0,0,0.4)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.3)';
        });
    });

});