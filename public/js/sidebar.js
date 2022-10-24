const open_close_menu = document.querySelector('.open_close_menu');
const open_close_menu_icon = document.querySelector('.open_close_menu span');
const sidebar = document.querySelector('.wrapper .content .sidebar');

// SIDEBAR 
open_close_menu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        open_close_menu_icon.innerHTML = 'filter_list';
    } else {
        open_close_menu_icon.innerHTML = 'sort';
    }
});