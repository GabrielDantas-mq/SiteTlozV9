let galeriaAberta = false;
    function toggleGaleria() {
             const galeria = document.getElementById('galeria-lateral');
                const btn = document.getElementById('btn-galeria');

             if (galeriaAberta) {
                    galeria.style.right = '-300px';
                    btn.innerHTML = '➤';
            } else {
                    galeria.style.right = '0';
                    btn.innerHTML = '❮';
            }
    galeriaAberta = !galeriaAberta;
}




