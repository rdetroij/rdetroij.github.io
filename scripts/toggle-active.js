// Wanneer een menulink (class="nav__link") wordt aangeklikt, 
// krijgt dat de class 'active'

const navLinks = document.querySelectorAll('.nav__link');
let activeNavLink = document.querySelector('.nav__link--active');

navLinks.forEach(
  navLink => {
    navLink.addEventListener('click', () => {
      if (activeNavLink) activeNavLink.classList.remove('nav__link--active');
      navLink.classList.add('nav__link--active');
      activeNavLink = navLink;
    });
  }
);