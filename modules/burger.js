const activeBtn = document.querySelector('.header__menu-button');
const navMenu = document.querySelector('.header__menu');
const listMenu = document.querySelector('.header__list');
const numberListMenu = document.querySelectorAll('.header__item');

activeBtn.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu_active');
});

document.addEventListener('click', e => {
  const clickInsideMenu = navMenu.contains(e.target); 
  const clickInsideBtn = activeBtn.contains(e.target);

  if (!clickInsideBtn && !clickInsideMenu) {
    navMenu.classList.remove('header__menu_active');
  }
});

numberListMenu.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('header__menu_active');
  });
});


