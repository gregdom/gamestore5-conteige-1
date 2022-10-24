(function () {
    window.addEventListener('resize', () => {
        let widthWindow = window.innerWidth;
        let title_t = document.querySelector('.title-t') || "";

        if (widthWindow >= 768) {
            info.classList.remove('active');
            submIcon.innerHTML = 'menu';
            modal.classList.remove('active');
            title_t.innerText = 'Filtrar busca';
            return;
        } else {
            title_t.innerText = 'Plataformas';
        }
    })

})();