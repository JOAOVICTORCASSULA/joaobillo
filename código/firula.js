// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backToTopBtn = document.getElementById('backToTop');

    if (scrollPosition > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Rolar suavemente para o topo quando o botão for clicado
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para animação de fade-in ao rolar
const fadeElements = document.querySelectorAll('.projeto, .projeto2, .educacao-container');

window.addEventListener('scroll', function() {
    fadeElements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});

// Função para animação fade-in das seções ao rolar a página
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5
};

const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        fadeInOnScroll.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    fadeInOnScroll.observe(section);
});

// Função de digitação automática
const typewriter = (element, text, delay) => {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, delay);
};

document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('h1');
    titulo.innerHTML = '';  // Limpa o texto inicial
    typewriter(titulo, 'João Victor Cassula Billó', 150);  // Coloca o efeito
});

// Mudança de cor ao passar o mouse nos ícones sociais
const icons = document.querySelectorAll('.social-icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.filter = 'hue-rotate(90deg)';
        icon.style.transition = 'filter 0.5s ease';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.filter = 'hue-rotate(0deg)';
    });
});

// Função para botão "voltar ao topo"
const toTopBtn = document.createElement('button');
toTopBtn.textContent = '↑';
toTopBtn.classList.add('to-top');
document.body.appendChild(toTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
