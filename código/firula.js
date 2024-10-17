// Função para criar e gerenciar o botão "voltar ao topo"
const toTopBtn = document.createElement('button'); // Cria o botão
toTopBtn.textContent = '↑'; // Define o texto do botão
toTopBtn.classList.add('to-top'); // Adiciona uma classe ao botão
document.body.appendChild(toTopBtn); // Adiciona o botão ao corpo da página

window.addEventListener('scroll', () => {
    // Exibe o botão se a rolagem for maior que 100 pixels
    toTopBtn.style.display = (window.pageYOffset > 100) ? 'block' : 'none';
});

// Ação do botão para voltar ao topo
toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Rola para o topo
        behavior: 'smooth' // Animação suave
    });
});

// Função para animação de fade-in ao rolar
const fadeElements = document.querySelectorAll('.projeto, .projeto2, .educacao-container'); // Seleciona elementos para a animação de fade-in
window.addEventListener('scroll', function() {
    fadeElements.forEach(function(element) {
        const rect = element.getBoundingClientRect(); // Obtem a posição do elemento em relação à janela
        // Verifica se o elemento está visível na janela
        if (rect.top <= window.innerHeight - 100) {
            element.style.opacity = 1; // Define a opacidade para 1
            element.style.transform = 'translateY(0)'; // Restaura a posição original
        }
    });
});

// Função para animação fade-in das seções ao rolar a página
const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página
const options = { threshold: 0.3 }; // Define a visibilidade necessária para acionar a animação

// Cria um observador de interseção para animar as seções
const fadeInOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear'); // Adiciona classe de animação
            fadeInOnScroll.unobserve(entry.target); // Para de observar o elemento
        }
    });
}, options);

sections.forEach(section => {
    fadeInOnScroll.observe(section); // Inicia a observação para cada seção
});

// Função de digitação automática
const typewriter = (element, text, delay) => {
    let i = 0; // Índice do caractere atual
    const interval = setInterval(() => {
        element.innerHTML += text[i]; // Adiciona o caractere atual ao elemento
        i++;
        if (i >= text.length) clearInterval(interval); // Para o intervalo quando todos os caracteres foram escritos
    }, delay); // Delay entre os caracteres
};

// Ao carregar a página, inicia a animação de digitação no título
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('h1'); // Seleciona o título
    titulo.innerHTML = ''; // Limpa o texto inicial
    typewriter(titulo, 'João Victor Cassula Billó', 150); // Coloca o efeito de digitação
});

// Efeito de brilho nos botões ao passar o mouse
const buttons = document.querySelectorAll('button, .social-icon'); // Seleciona botões e ícones sociais
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 15px 5px #6A0DAD'; // Brilho roxo neon
    });
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none'; // Remove o brilho
    });
});
