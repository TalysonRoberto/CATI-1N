document.addEventListener("DOMContentLoaded", () => {
  const mainCircle = document.querySelector(".main-circle");
  const subCircles = document.querySelectorAll(".sub-circle");

  let timeoutId; // Variável para armazenar o ID do temporizador

  mainCircle.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    subCircles.forEach((circle) => {
      circle.classList.add("visible"); // Adiciona a classe para tornar os círculos visíveis
    });
  });

  mainCircle.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      subCircles.forEach((circle) => {
        circle.classList.remove("visible"); // Remove a classe para ocultar os círculos
      });
    }, 1000); // 2000 milissegundos = 2 segundos
  });
});

const slides = document.querySelectorAll(".carousel-slides .slide");
let currentIndex = 0;

// Inicializa o primeiro slide como ativo
slides[currentIndex].classList.add("active");

function showNextSlide() {
  slides[currentIndex].classList.remove("active"); // Remove a classe active do slide atual
  currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide
  slides[currentIndex].classList.add("active"); // Adiciona a classe active ao novo slide
}

setInterval(showNextSlide, 3000);

function loadPage(url) {
  // Oculta a imagem inicial e exibe o iframe
  document.getElementById("contentImage").style.display = "none";
  const iframe = document.getElementById("contentFrame");
  iframe.style.display = "block";
  iframe.src = url; // Carrega a URL no iframe

  // Fecha o menu hambúrguer
  const menuItems = document.querySelector(".menu-items");
  if (menuItems.classList.contains("show")) {
    menuItems.classList.remove("show");
  }
}

function loadHome() {
  // Exibe a imagem inicial e oculta o iframe
  document.getElementById("contentImage").style.display = "block";
  const iframe = document.getElementById("contentFrame");
  iframe.style.display = "none";
  iframe.src = ""; // Limpa o conteúdo do iframe

  // Fecha o menu hambúrguer
  const menuItems = document.querySelector(".menu-items");
  if (menuItems.classList.contains("show")) {
    menuItems.classList.remove("show");
  }
}

function toggleMenu() {
  const menuItems = document.querySelector(".menu-items");
  menuItems.classList.toggle("show"); // Alterna a classe 'show'
}
