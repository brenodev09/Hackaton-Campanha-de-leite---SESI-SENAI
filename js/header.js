 // Lógica do menu hambúrguer para dispositivos móveis
        document.getElementById('btnmenu').addEventListener('click', function() {
            document.getElementById('navmenu').classList.add('open');
        });

        document.getElementById('btn-close').addEventListener('click', function() {
            document.getElementById('navmenu').classList.remove('open');
        });

        // Fechar ao clicar em um item de menu
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                document.getElementById('navmenu').classList.remove('open');
            });
        });