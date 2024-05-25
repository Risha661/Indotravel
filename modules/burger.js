const activeBtn = document.querySelector('.header__menu-button');
const navMenu = document.querySelector('.header__menu');
const navMenuActive = document.querySelector('.header__menu_active');
const listMenu = document.querySelector('.header__list');
const numberListMenu = document.querySelectorAll('.header__item');

activeBtn.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu_active');
  if (navMenu.classList.contains('header__menu_active')) {
    activeBtn.style.cssText = `
      width: 44px;
      height: 44px;
      background: url("../img/hero/icons8-cross-64.png") center/contain no-repeat;
      transition: 0.5s;`
    ;
  } else {
    activeBtn.style.cssText = `
      width: 35px;
      height: 16px;
      background: url("../img/hero/menu_mob.svg") center/contain no-repeat;
      transition: 0.5s;`
    ;
  }
});

document.addEventListener('click', e => {
  const clickInsideMenu = navMenu.contains(e.target); 
  const clickInsideBtn = activeBtn.contains(e.target);

  if (!clickInsideBtn && !clickInsideMenu) {
    navMenu.classList.remove('header__menu_active');
    activeBtn.style.cssText = `
      width: 35px;
      height: 16px;
      background: url("../img/hero/menu_mob.svg") center/contain no-repeat;
      transition: 0.5s;`
    ;
  }
});

numberListMenu.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('header__menu_active');
    activeBtn.style.cssText = `
      width: 35px;
      height: 16px;
      background: url("../img/hero/menu_mob.svg") center/contain no-repeat;
      transition: 0.5s;`
    ;
  });
});

navMenu.addEventListener('mouseover', () => {
  navMenu.style.cssText = `
  background: #00c2fc;
  transition: 0.7s;`
  ;
});

navMenu.addEventListener('mouseout', () => {
  navMenu.style.cssText = `
  background: #FCB500;
  transition: 0.7s;`
  ;
});


