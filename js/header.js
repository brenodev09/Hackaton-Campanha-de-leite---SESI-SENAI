//  // Lógica do menu hambúrguer para dispositivos móveis
//         document.getElementById('btnmenu').addEventListener('click', function() {
//             document.getElementById('navmenu').classList.add('open');
//         });

//         document.getElementById('btn-close').addEventListener('click', function() {
//             document.getElementById('navmenu').classList.remove('open');
//         });

//         // Fechar ao clicar em um item de menu
//         document.querySelectorAll('.nav-item').forEach(item => {
//             item.addEventListener('click', function() {
//                 document.getElementById('navmenu').classList.remove('open');
//             });
//         });


const btnMenu = document.getElementById('btnmenu'); 
const navMenu = document.getElementById('navmenu');
const btnClose = document.getElementById('btn-close') 
 
 btnMenu.addEventListener('click', () => { navMenu.classList.add('open');
     btnClose.setAttribute('aria-expanded', 'true'); });
      btnClose.addEventListener('click', () => { navMenu.classList.remove('open'); 
        btnClose.setAttribute('aria-expanded', 'false'); });
        btnClose.addEventListener('click', ()=>{
    menu.classList.remove('open')

})