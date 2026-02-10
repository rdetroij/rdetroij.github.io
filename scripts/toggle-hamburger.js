// Open het hamburgermenu op kleine schermen en sluit
// wanneer je op een link of ergens buiten het menu klikt

const menu = document.querySelector('.nav');
const navList = menu.querySelectorAll('.nav__link');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hamburger--open');

  if (menu.classList.contains('hamburger--open')) {
    overlay.addEventListener('click', () => {
      menu.classList.remove('hamburger--open');
    });
    navList.forEach(
      navL => {
        navL.addEventListener('click', () => {
          menu.classList.remove('hamburger--open');
        })
      }
    )
  };
});