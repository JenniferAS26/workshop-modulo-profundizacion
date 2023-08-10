// Open/Close Navbar Modal
const burgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeNavbar = document.querySelector('.modal-navbar__close-icon');

export default burgerMenu.addEventListener('click', () => {
  modalNavbar.classList.toggle('show');
});
closeNavbar.addEventListener('click', () => {
  modalNavbar.classList.remove('show');
});

