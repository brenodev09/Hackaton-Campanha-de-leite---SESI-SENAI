
// script dos accordions - seçao de duvidas
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const resposta = accordion.querySelector('.resposta-accordion')
        resposta.classList.toggle('ativo')
    })
})


// dados das fileiras
// script da seção de feedbacks - carrossel de depoimentos
var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});




let jaRodou = false;

function surgirNumeros() {
  const elementos = document.querySelectorAll(".number-data");

  elementos.forEach(el => {
    let valorFinal = parseInt(el.getAttribute("valor"));
    let valorAtual = 0;
    let incremento = Math.ceil(valorFinal / 300); 
    if (incremento < 1) incremento = 1; 
    let sufixo = el.getAttribute("data-sufixo") || "";

    let contador = setInterval(() => {
      valorAtual += incremento;
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(contador);
      }
      el.textContent =   sufixo + valorAtual.toLocaleString("pt-BR") ;
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  if (jaRodou) return;

  const alvo = document.querySelector(".number-data");
  if (!alvo) return;

  const rect = alvo.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if (rect.top >= 0 && rect.bottom <= alturaTela) {
    surgirNumeros();
    jaRodou = true;
  }
});
