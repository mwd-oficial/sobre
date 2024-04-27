var carregando = document.getElementById("carregando")
var conteudo = document.getElementById("conteudo")

function inicia() {
  setTimeout(() => {
    body.style.overflowY = "auto"
    carregando.style.display = "none"
    conteudo.style.display = "block"
  }, 1000);
}

var title = document.querySelector("title")
var emojis = ['1F916', '1F5A5', '1F47E', '1F468']
let i = 0

setInterval(() => {
  title.innerHTML = `MWD &#x${emojis[i]}`
  if (i < emojis.length - 1) {
    i++
  } else {
    i = 0
  }

}, 500);

var imglogo = document.querySelector("#imglogo")
var secAnima = document.querySelector("#sec-anima")
var header = document.querySelector("header")
var modelViewer = document.querySelector("model-viewer")
document.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    secAnima.style.opacity = 0
    imglogo.style.opacity = 0
    modelViewer.style.opacity = 0
    header.classList.add("header-scroll")
  } else {
    secAnima.style.opacity = 1
    imglogo.style.opacity = 1
    modelViewer.style.opacity = 1
    header.classList.remove("header-scroll")
  }
})

var mouseModelViewer = false
modelViewer.addEventListener("mouseover", function () {
  cursor.style.display = "none"
  mouseModelViewer = true
})

modelViewer.addEventListener("mouseleave", function () {
  cursor.style.display = "block"
  mouseModelViewer = false
})

var images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  images[i].onmousedown = function (e) {
    if (e.preventDefault) e.preventDefault();
    return false;
  }
}

var section = document.querySelector("section")
var paleta = 0

function animaPaletaf() {
  setTimeout(() => {
    paleta++
    if (paleta >= 360) {
      paleta = 0
    }
    requestAnimationFrame(animaPaletaf)
    section.style.filter = `hue-rotate(${paleta}deg)`
  }, 10);
}
animaPaletaf()

var cursor = document.querySelector("#cursor")
var body = document.querySelector("body")
document.onmousemove = function (e) {
  if (!mouseModelViewer) {
    cursor.style.top = e.clientY + 'px'
    cursor.style.left = e.clientX + 'px'

    let element = document.createElement('div')
    element.classList = 'element'
    body.prepend(element)

    element.style.top = e.pageY + 'px'
    element.style.left = e.pageX + 'px'

    setTimeout(function () {
      let text = document.querySelectorAll('.element')[0],
        directionX = Math.random() < .5 ? -1 : 1,
        directionY = Math.random() < .5 ? -1 : 1

      text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px'
      text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 200)) + 'px'
      text.style.opacity = 0
      text.style.transform = 'scale(0.25)'
      text.innerHTML = randomText()

      setTimeout(function () {
        element.remove()
      }, 1000);

    }, 10);
  }
}

function randomText() {
  var text = ("abcdefghijklmnopqrstuvwxyz1234567890").split("")
  letter = text[Math.floor(Math.random() * text.length)]
  return letter
}

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
window.addEventListener('scroll', animaScroll);


var progresso = document.querySelector("#progresso");
window.addEventListener("scroll", function () {
  var alturaTotal = document.body.scrollHeight - window.innerHeight;
  var progressoAtual = (window.scrollY / alturaTotal) * 100;
  progresso.style.width = progressoAtual + "%";
});
