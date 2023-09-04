var carregando = document.getElementById("carregando")
var conteudo = document.getElementById("conteudo")
function inicia() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 500);
}

var imglogo = document.querySelector("#imglogo")
var header = document.querySelector("header")
var body = document.querySelector("body")
document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        imglogo.style.opacity = 0
        header.classList.add("header-scroll")
    } else {
        imglogo.style.opacity = 1
        header.classList.remove("header-scroll")
    }
})

var acessarDiv = document.querySelectorAll(".acessar-div")
function abrir(n) {
    acessarDiv[n].style.display = "block"
    body.style.overflowY = "hidden"
}

function fechar(n) {
    acessarDiv[n].style.display = "none"
    body.style.overflowY = "initial"
}

var boxSite = document.querySelectorAll(".box-site");

function animaScroll() {
  boxSite.forEach((box, index) => {
    // Verifique se a caixa está visível na metade da tela
    var rect = box.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var boxTop = rect.top;
    var boxBottom = rect.bottom;
    var boxCenter = (boxTop + boxBottom) / 2.5;

    // Defina uma margem personalizada a partir do centro da tela (ajuste conforme necessário)
    var marginFromCenter = 100;

    if (boxCenter < windowHeight / 2 + marginFromCenter && boxCenter > -windowHeight / 2 - marginFromCenter) {
      // Adiciona a classe .active apenas se a caixa estiver visível na metade da tela
      box.classList.add("active");
    } else {
      // Remove a classe .active se a caixa não estiver visível na metade da tela
      box.classList.remove("active");
    }
  });
}

// Execute a função inicialmente para as caixas visíveis na primeira carga da página
animaScroll();

window.addEventListener("scroll", animaScroll);

