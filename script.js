document.addEventListener('DOMContentLoaded', () => {
    const mainCircle = document.querySelector('.main-circle');
    const subCircles = document.querySelectorAll('.sub-circle');

    let timeoutId; // Variável para armazenar o ID do temporizador

    mainCircle.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        subCircles.forEach(circle => {
            circle.classList.add('visible'); // Adiciona a classe para tornar os círculos visíveis
        });
    });

    mainCircle.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            subCircles.forEach(circle => {
                circle.classList.remove('visible'); // Remove a classe para ocultar os círculos
            });
        }, 1000); // 2000 milissegundos = 2 segundos
    });
});



const slides = document.querySelectorAll('.carousel-slides .slide');
let currentIndex = 0;

// Inicializa o primeiro slide como ativo
slides[currentIndex].classList.add('active');

function showNextSlide() {
    slides[currentIndex].classList.remove('active'); // Remove a classe active do slide atual
    currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide
    slides[currentIndex].classList.add('active'); // Adiciona a classe active ao novo slide
}

setInterval(showNextSlide, 3000);


// Função para carregar a página inicial
function loadHome() {
    document.getElementById('contentImage').style.display = 'block'; // Mostra a imagem inicial
    const iframe = document.getElementById('contentFrame');
    iframe.style.display = 'none'; // Oculta o iframe
    iframe.src = ''; // Remove o conteúdo do iframe
}

// Função para carregar a página no iframe
function loadPage(url) {
    document.getElementById('contentImage').style.display = 'none'; // Oculta a imagem
    const iframe = document.getElementById('contentFrame');
    iframe.style.display = 'block'; // Mostra o iframe
    iframe.src = url; // Carrega a URL no iframe
}


const followImage = document.getElementById('followImage');
let mouseX = 0, mouseY = 0;
let imageX = 0, imageY = 0;

// Função para atualizar a posição da imagem com atraso
function moveImage() {
    // Interpolação para atrasar o movimento (ajustado para cerca de 3 segundos)
    imageX += (mouseX + 50- imageX) * 0.3;
    imageY += (mouseY - imageY) * 0.3;

    // Atualiza a posição da imagem
    followImage.style.transform = `translate(${imageX}px, ${imageY}px)`;

    // Chama a função novamente na próxima animação de quadro
    requestAnimationFrame(moveImage);
}

// Inicializa o movimento da imagem com atraso
document.addEventListener('mousemove', (event) => {
    followImage.style.display = 'block'; // Mostra a imagem
    mouseX = event.pageX;
    mouseY = event.pageY;
});

// Oculta a imagem quando o mouse sai da janela
document.addEventListener('mouseout', () => {
    followImage.style.display = 'none';
});
// Inicia o loop de movimento da imagem
moveImage();


  // Array de aniversariantes
  const anniversaries = [
    { name: "Talyson", birthday: "2024-04-05" },
    { name: "Teste1", birthday: "2024-11-12" },
    { name: "Teste2", birthday: "2024-10-22" },
    { name: "Teste3", birthday: "2024-11-30" },
    { name: "Teste4", birthday: "2024-09-15" },
];

// Função para exibir os aniversariantes do mês atual
function displayBirthdays() {
    const currentMonth = new Date().getMonth(); // Obtém o mês atual (0-11)
    const currentYear = new Date().getFullYear(); // Obtém o ano atual
    const birthdayList = document.getElementById("birthdayList");

    // Filtra os aniversariantes do mês atual
    const thisMonthBirthdays = anniversaries.filter(person => {
        const birthdayDate = new Date(person.birthday);
        return birthdayDate.getMonth() === currentMonth && birthdayDate.getFullYear() === currentYear;
    });

    // Atualiza o DOM com os aniversariantes
    if (thisMonthBirthdays.length > 0) {
        birthdayList.innerHTML = thisMonthBirthdays.map(person => `
            <div class="birthday-item">
                <p><strong>${person.name}</strong> - ${person.birthday}</p>
            </div>
        `).join('');
    } else {
        birthdayList.innerHTML = "<p class='no-birthdays'>Nenhum aniversariante neste mês.</p>";
    }
}

// Chama a função para exibir os aniversariantes ao carregar a página
displayBirthdays();


// Inicializa com a imagem visível e o iframe oculto
window.onload = function() {
    document.getElementById('contentFrame').style.display = 'none';
};


