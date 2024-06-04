const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconbars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click, displayMenu');
menu.addEventListener('click, displayMenu');

function displayMenu() {
  if (menu.classList.contains('tampil')) {
      menu.classList.remove('tampil');
      iconbars.style.display = 'inline';
      iconbars.style.display = 'none';
  } else {
    menu.classList.add('tampil');
      iconbars.style.display = 'none';
      iconbars.style.display = 'inline';
  }
}