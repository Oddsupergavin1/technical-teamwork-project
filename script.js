document.addEventListener('DOMContentLoaded', initMenuToggle);

function initMenuToggle() {
    var menuButton = document.querySelector('button');
    var nav = document.querySelector('nav');

    if (!menuButton || !nav) {
        console.error('Menu button or nav not found!');
        return;
    }

    menuButton.addEventListener('click', toggleNavVisibility);
}

function toggleNavVisibility() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('hide');
}
