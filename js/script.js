
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
