// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Rola suavemente para o elemento correspondente ao ID do link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Animação suave
        });
    });
});

// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Posição de rolagem atual
    const backToTopBtn = document.getElementById('backToTop'); // Botão para voltar ao topo

    // Exibe o botão se a rolagem for maior que 300 pixels
    if (scrollPosition > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none'; // Oculta o botão
    }
});

// Rolar suavemente para o topo quando o botão for clicado
document.getElementById('backToTop').addEventListener('click', function() {
    // Rola suavemente para o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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

const options = {
    threshold: 0.3 // Define a visibilidade necessária para acionar a animação
};

// Cria um observador de interseção para animar as seções
const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; // Se não estiver visível, sai da função
        }
        entry.target.classList.add('appear'); // Adiciona classe de animação
        fadeInOnScroll.unobserve(entry.target); // Para de observar o elemento
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
    titulo.innerHTML = '';  // Limpa o texto inicial
    typewriter(titulo, 'João Victor Cassula Billó', 150);  // Coloca o efeito de digitação
});

// Mudança de cor ao passar o mouse nos ícones sociais
const icons = document.querySelectorAll('.social-icon'); // Seleciona ícones sociais

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.filter = 'hue-rotate(90deg)'; // Muda a cor do ícone
        icon.style.transition = 'filter 0.5s ease'; // Transição suave
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.filter = 'hue-rotate(0deg)'; // Restaura a cor original
    });
});

// Função para botão "voltar ao topo"
const toTopBtn = document.createElement('button'); // Cria o botão
toTopBtn.textContent = '↑'; // Define o texto do botão
toTopBtn.classList.add('to-top'); // Adiciona uma classe ao botão
document.body.appendChild(toTopBtn); // Adiciona o botão ao corpo da página

window.addEventListener('scroll', () => {
    // Exibe o botão se a rolagem for maior que 100 pixels
    if (window.pageYOffset > 100) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none'; // Oculta o botão
    }
});

// Ação do botão para voltar ao topo
toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Rola para o topo
        behavior: 'smooth' // Animação suave
    });
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

// Efeito de brilho em texto ao passar o mouse
const allText = document.querySelectorAll('h1, h2, p'); // Seleciona textos que terão o efeito

allText.forEach(text => {
    text.addEventListener('mouseenter', () => {
        text.style.textShadow = '0 0 5px #FFFFFF, 0 0 10px #6A0DAD'; // Efeito roxo e branco neon
        text.style.transition = 'text-shadow 0.5s ease'; // Transição suave
    });
    text.addEventListener('mouseleave', () => {
        text.style.textShadow = 'none'; // Remove o efeito
    });
});

// Função para alternar o menu
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn'); // Seleciona o botão do menu
    const navMenu = document.getElementById('nav-menu'); // Seleciona o menu de navegação
    
    menuBtn.classList.toggle('open'); // Alterna a classe para o botão do menu
    navMenu.classList.toggle('nav-visible'); // Alterna a visibilidade do menu
}

// Função de digitação automática para uma mensagem de boas-vindas
const text = "Welcome to my website!"; // Texto a ser digitado
let index = 0; // Índice do caractere atual
const typingSpeed = 160; // Velocidade da digitação

function typeText() {
    // Verifica se ainda há caracteres para digitar
    if (index < text.length) {
        document.querySelector('.typing-text').textContent += text.charAt(index); // Adiciona o caractere atual
        index++; // Avança para o próximo caractere
        setTimeout(typeText, typingSpeed); // Chama a função novamente após um atraso
    }
}

// Ao carregar a página, inicia a animação de digitação
document.addEventListener('DOMContentLoaded', typeText);
