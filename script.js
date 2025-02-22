function loadPage(url) {
  // Oculta a imagem inicial e exibe o iframe
  document.getElementById("contentImage").style.display = "none";
  const iframe = document.getElementById("contentFrame");
  iframe.style.display = "flex";
  iframe.src = url; // Carrega a URL no iframe

  // Fecha o menu hambúrguer
  const menuItems = document.querySelector(".menu-items");
  if (menuItems.classList.contains("show")) {
    menuItems.classList.remove("show");
  }
}

function loadHome() {
  // Exibe a imagem inicial e oculta o iframe
  document.getElementById("contentImage").style.display = "grid";
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
