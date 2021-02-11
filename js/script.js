const hamburger_btn = document.getElementById('btnHamburger')
const hero = document.querySelector('.hero');
const title_h1 = document.querySelector('.main-title');
const headerLinks_div = document.querySelector('.header__links');

hamburger_btn.addEventListener('click', () => {
  if (hero.classList.contains('open')) {
    hero.classList.remove('open');
    title_h1.style.display = 'block';
    headerLinks_div.classList.remove('mobileLinks');
  } else {
    hero.classList.add('open');
    title_h1.style.display = 'none';
    headerLinks_div.classList.add('mobileLinks');
  }
});
