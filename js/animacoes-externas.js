var checkbox = document.querySelector("#anima-input")
var body = document.querySelector("body")
var scenes = document.querySelectorAll(".scene");
var desVanDiv = document.querySelectorAll(".des-van-div")
var parallaxes = [];

checkbox.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add("desabilitado");
        for (let i = 0; i < desVanDiv.length; i++) {
            desVanDiv[i].style.display = "block"
        }
        parallaxes.forEach((parallax) => {
            parallax.disable();
        });
    } else {
        body.classList.remove("desabilitado");
        for (let i = 0; i < desVanDiv.length; i++) {
            desVanDiv[i].style.display = "none"
        }
        parallaxes.forEach((parallax) => {
            parallax.enable();
        });
    }
});

if (window.matchMedia("(orientation:landscape)").matches) {

    scenes.forEach((scene) => {
        let parallax = new Parallax(scene);
        parallaxes.push(parallax);
    });

    const elements = document.querySelectorAll(".box-vanilla");
    elements.forEach(element => {
        VanillaTilt.init(element, {
            max: 30,
            speed: 0
        });
    });

}


var swiperSlide = document.querySelectorAll(".swiper-slide")
var swiperP = document.querySelector("#swiper-p")
var cor1
var cor2
var texto
var cnp = 0
var cssvar = getComputedStyle(document.documentElement).getPropertyValue('--anima-brilho');
document.documentElement.style.setProperty('--anima-brilho', '#E14F25');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChangeTransitionStart: function () {
            var previousIndex = this.previousIndex;
            var activeIndex = this.activeIndex;

            if (swiperSlide[0].classList.contains("swiper-slide-active")) {
                cor1 = "#E14F25"
                cor2 = "#F16529"
                texto = "<strong>HTML (Hypertext Markup Language)</strong> é como a espinha dorsal da internet. Ele é usado para criar páginas da web e dizer ao navegador como exibir o conteúdo. Imagine o HTML como a estrutura de uma casa, definindo onde as paredes, portas e janelas devem estar. Ele lida com o conteúdo e a estrutura da página, como texto, imagens e links."
                document.documentElement.style.setProperty('--anima-brilho', cor1);
            } else if (swiperSlide[1].classList.contains("swiper-slide-active")) {
                cor1 = "#264DE4"
                cor2 = "#2965F1"
                texto = "<strong>CSS (Cascading Style Sheets)</strong> é como a decoração de uma casa. Ele permite que você estilize e formate sua página da web para torná-la visualmente atraente. Com o CSS, você pode escolher as cores, fontes, tamanhos e posições dos elementos em sua página. É o que torna as páginas bonitas e fáceis de ler."
                document.documentElement.style.setProperty('--anima-brilho', cor1);
            } else if (swiperSlide[2].classList.contains("swiper-slide-active")) {
                cor1 = "#E5A228"
                cor2 = "#F1DB4E"
                texto = "<strong>JS (JavaScript)</strong> é como a eletricidade que torna sua casa funcional. Ele é uma linguagem de programação que permite adicionar interatividade às páginas da web. Isso significa que você pode criar formulários que respondem quando você clica neles, menus que se abrem quando você passa o mouse sobre eles e muito mais. O JavaScript torna as páginas da web dinâmicas e interativas."
                document.documentElement.style.setProperty('--anima-brilho', cor2);
            } else if (swiperSlide[3].classList.contains("swiper-slide-active")) {
                cor1 = "#484C89"
                cor2 = "#777BB3"
                texto = "<strong>PHP (Hypertext Preprocessor)</strong> é como os bastidores de um teatro. É uma linguagem de programação usada principalmente em servidores web. Ela permite que os desenvolvedores criem sites que interagem com bancos de dados, processam formulários e fazem coisas mais complexas. PHP é responsável por muitas funcionalidades dinâmicas em sites, como enviar e-mails a partir de formulários ou mostrar informações de bancos de dados."
                document.documentElement.style.setProperty('--anima-brilho', cor2);
            }
            if (activeIndex > previousIndex) {
                cnp++
                swiperSlide[cnp]
            } else if (activeIndex < previousIndex) {
                cnp--
                swiperSlide[cnp]
            }
            swiperP.style.backgroundImage = `linear-gradient(135deg, ${cor1}, ${cor2})`
            swiperP.innerHTML = texto
        },
    },
});
