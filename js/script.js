
// script dos accordions - seçao de duvidas
const accordions = document.querySelectorAll('.accordion')

accordions.forEach (accordion => {
    accordion.addEventListener('click', () =>{
        const resposta = accordion.querySelector('.resposta-accordion')
        resposta.classList.toggle('ativo')
    })
})
