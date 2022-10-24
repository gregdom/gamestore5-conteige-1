const subm = document.querySelector('.btn-toggle-subInfo');
const submIcon = document.querySelector('.btn-toggle-subInfo span');
const info = document.querySelector('header .inHeader .info');
const modal = document.querySelector('.modal');


// SUBMENU MOBILE INFO
subm.addEventListener('click', () => {
    info.classList.toggle('active');
    modal.classList.add('active');
    if (info.classList.contains('active')) {
        submIcon.innerHTML = 'close';
    } else {
        submIcon.innerHTML = 'menu';
        modal.classList.remove('active');
    }
});


// ABLE AND DISABLE
modal.addEventListener('click', () => {
    info.classList.remove('active');
    submIcon.innerHTML = 'menu';

    modal.classList.remove('active');
});